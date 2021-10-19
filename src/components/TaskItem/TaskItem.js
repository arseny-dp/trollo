import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleTask } from "actions";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import styles from './task-item.module.scss';

const TaskItem = ({ task, toggleTask, index }) => {
	return (
		<Draggable
			draggableId={`task${task.id}`}
			index={index}
		>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className={[
						styles.body,
						task.done && styles.done
					].join(' ')}
					style={provided.draggableProps.style}
				>
					<span className={styles['text-container']}>
						<div className={styles.decore} />
						<div className={styles.text}>
							{task.text}
						</div>
					</span>
					<div
						className={styles['check-icon']}
						onClick={() => toggleTask(task.id)}>
						<FontAwesomeIcon icon={faCheck} />
					</div>
				</div>
			)}
		</Draggable>
	)
}

export default connect(null, { toggleTask })(TaskItem)

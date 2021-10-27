import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleTask } from "actions";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styles from './task-item.module.scss';

const TaskItem = ({ task, index }) => {
	const dispatch = useDispatch();

	const getStyle = (style, snapshot) => {
		if (!(snapshot.draggingOver === 'Delete' && snapshot.isDropAnimating)) {
			return style;
		}
		const { moveTo, duration } = snapshot.dropAnimation;
		const translate = `translate(calc(${moveTo.x}px - 50%), calc(${moveTo.y}px - 50%))`;
		const scale = `scale(0.2, 1)`;
		return {
			...style,
			transform: `${translate} ${scale}`,
			transition: `all linear ${duration}s`,
		};
	}

	return (
		<Draggable
			draggableId={`${task.id}`}
			index={index}
		>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className={[
						styles.body,
						task.done ? styles.done : null,
						snapshot.draggingOver === 'Delete' ? styles['drag-over-delete'] : null,
						snapshot.isDropAnimating ? styles.dropped : null
					].join(' ')}
					style={getStyle(provided.draggableProps.style, snapshot)}
				>
					<span className={styles['text-container']}>
						<div className={styles.decore} />
						<div className={styles.text}>
							{task.name}
						</div>
					</span>
					<div
						className={styles['check-icon']}
						onClick={() => dispatch(toggleTask(task.id))}>
						<FontAwesomeIcon icon={faCheck} />
					</div>
				</div>
			)}
		</Draggable>
	)
}

export default TaskItem;

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleTask } from "actions";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styles from './task-item.module.scss';

const TaskItem = ({ task, index }) => {
	const dispatch = useDispatch();

	const getStyle = (style, snapshot) => {
		// if (!(snapshot.draggingOver === 'Delete' && snapshot.isDropAnimating)) {
		// 	return style;
		// }
		// const { moveTo, curve, duration } = snapshot.dropAnimation;
		// const center = Math.floor(document.documentElement.clientWidth / 2);
		// const translate = `translate(${center}px, ${moveTo.y}px)`;
		// const scale = `scale(0)`;
		return {
			...style,
			// opacity: 0,
			// transform: `${translate} ${scale}`,
			// transition: `all ${curve} ${duration + 1}s`,
		};
	}

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
						task.done ? styles.done : null,
						snapshot.draggingOver === 'Delete' ? styles['drag-over-delete'] : null,
						snapshot.isDropAnimating ? styles.dropped : null
					].join(' ')}
					style={getStyle(provided.draggableProps.style, snapshot)}
				>
					<span className={styles['text-container']}>
						<div className={styles.decore} />
						<div className={styles.text}>
							{task.text}
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

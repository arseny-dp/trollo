import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleTask } from "actions";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import cn from "utils/bindedClassNames";
import styles from './TaskItem.module.scss';

const TaskItem = ({ task, index }) => {
	const dispatch = useDispatch();

	const toggleHandler = () => dispatch(toggleTask(task.id));
	window.localStorage.getItem('')

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
					className={cn(styles)({
						body: true,
						done: task.done,
						dragOverDelete: snapshot.draggingOver === 'Delete',
						dropped: snapshot.isDropAnimating
					})}
					onDoubleClick={toggleHandler}
					style={getStyle(provided.draggableProps.style, snapshot)}
				>
					<span className={styles.textContainer}>
						<div className={styles.decore} />
						<div className={styles.text}>
							{task.name}
						</div>
					</span>
					<div
						className={styles.checkIcon}
						onClick={toggleHandler}>
						<FontAwesomeIcon icon={faCheck} />
					</div>
				</div>
			)}
		</Draggable>
	)
}

export default TaskItem;

import TaskCreator from "components/TaskCreator";
import TaskItem from "components/TaskItem";
import useTasksByStory from "hooks/useTasksByStory";
import { Droppable } from "react-beautiful-dnd";
import cn from "utils/bindedClassNames";
import styles from './TaskList.module.scss';

const TaskList = ({ parentId }) => {
	const tasks = useTasksByStory(parentId);

	return (
		<>
			<Droppable droppableId={`${parentId}`}>
				{(provided, snapshot) => (
					<>
						<div
							ref={provided.innerRef}
							className={cn(styles)({
								wrapper: true,
								draggingOver: snapshot.isDraggingOver,
								draggingFromThis: snapshot.draggingFromThisWith
							})}
							{...provided.droppableProps}
						>
							{tasks.map((task, i) =>
								<TaskItem
									key={task.id}
									task={task}
									index={i} />
							)}
							{provided.placeholder}
							<TaskCreator parentId={parentId} />
						</div>
					</>
				)}
			</Droppable>
		</>
	)
}

export default TaskList

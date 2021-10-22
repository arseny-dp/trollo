import TaskCreator from "components/TaskCreator";
import TaskItem from "components/TaskItem";
import { Droppable } from "react-beautiful-dnd";
import styles from './task-list.module.scss';

const TaskList = ({ tasks, parentId }) => {

	return (
		<>
			<Droppable droppableId={`${parentId}`}>
				{(provided, snapshot) => (
					<>
						<div
							ref={provided.innerRef}
							className={[
								styles.wrapper,
								snapshot.isDraggingOver ? styles['dragging-over'] : null,
								snapshot.draggingFromThisWith ? styles['dragging-from-this'] : null
							].join(' ')}
							{...provided.droppableProps}
						>
							{tasks.map((e, i) =>
								<TaskItem key={e.id} task={e} index={i} />
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

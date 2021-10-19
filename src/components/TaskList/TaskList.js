import TaskItem from "components/TaskItem";
import { Droppable } from "react-beautiful-dnd";
import styles from './task-list.module.scss';

const TaskList = ({ tasks, list }) => {
	return (
		<>
			<Droppable droppableId={`${list}`}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						className={styles.wrapper}
						{...provided.droppableProps}
					>
						{tasks.map((e, i) =>
							<TaskItem key={e.id} task={e} index={i} />
						)}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</>
	)
}

export default TaskList

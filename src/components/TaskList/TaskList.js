import TaskItem from "components/TaskItem";
import { Droppable } from "react-beautiful-dnd";
import styles from './task-list.module.scss';

const TaskList = ({ tasks, list }) => {
	return (
		<>
			<Droppable droppableId={`list${list}`}>
				{provided => (
					<div
						className={styles.wrapper}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{tasks.map((e, i) =>
							<TaskItem key={e.id} task={e} index={i} />
						).reverse()}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</>
	)
}

export default TaskList

import TaskItem from "components/TaskItem";
import styles from './task-list.module.scss';

const TaskList = ({ tasks }) => {
	return (
		<>
			<div
				className={[styles.wrapper].join(' ')}
			>
				{tasks.map((e, i) =>
					<TaskItem key={e.id} task={e} index={i} />
				)}
			</div>
		</>
	)
}

export default TaskList

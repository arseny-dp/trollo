import TaskItem from "components/TaskItem"

const TaskList = ({tasks}) => {
	return (
		<div>
			{tasks.map(e =>
				<TaskItem key={e.id} task={e} />
			)}
		</div>
	)
}

export default TaskList

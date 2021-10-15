import TaskItem from "components/TaskItem"

const TaskList = ({tasks}) => {
	return (
		<>
			{tasks.map((e) =>
				<TaskItem key={e.id} task={e} />
			).reverse()}
		</>
	)
}

export default TaskList

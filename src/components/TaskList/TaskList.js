import TaskItem from "components/TaskItem"

const TaskList = ({tasks}) => {
	return (
		<>
			{tasks.map((e, i) =>
				<TaskItem key={e.id} task={e} index={i} />
			).reverse()}
		</>
	)
}

export default TaskList

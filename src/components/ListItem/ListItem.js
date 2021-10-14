import TaskCreator from "components/TaskCreator";
import TaskList from "components/TaskList";
import { connect } from "react-redux";

const ListItem = ({ list, filteredTasks: tasks }) => {
	return (
		<div>
			{list.name}
			<TaskCreator listId={list.id} />
			<TaskList tasks={tasks} />
		</div>
	)
}

const mapState = ({ tasks }, { list }) => {
	const filteredTasks = tasks.filter(
		({ parentId }) => parentId === list.id
	);
	return (
		{ filteredTasks }
	)
}

export default connect(mapState)(ListItem)

import TaskCreator from "components/TaskCreator";
import TaskList from "components/TaskList";
import { Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import styles from './list-item.module.scss';

const ListItem = ({ list, filteredTasks: tasks }) => {
	return (
		<div className={styles.body}>
			<div className={styles.head}>{list.name}</div>
			<div className={styles.content}>
				<TaskCreator listId={list.id} />
			<TaskList tasks={tasks} />
			</div>
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

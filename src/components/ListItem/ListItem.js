import TaskCreator from "components/TaskCreator";
import TaskList from "components/TaskList";
import styles from './list-item.module.scss';

const ListItem = ({ list, tasks }) => {
	return (
		<div className={styles.body}>
			<div className={styles.head}>{list.name}</div>
			<div className={styles.content}>
				<TaskCreator listId={list.id} />
				<TaskList tasks={tasks} list={list.id} />
			</div>
		</div>
	)
}

export default ListItem

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteList } from "actions";
import TaskCreator from "components/TaskCreator";
import TaskList from "components/TaskList";
import { useDispatch } from "react-redux";
import styles from './list-item.module.scss';

const ListItem = ({ list, tasks }) => {
	const dispatch = useDispatch();

	return (
		<div className={styles.body}>
			<div className={styles.head}>
				<div className={styles.text}>{list.name}</div>
				<div
					className={styles.delete}
					onClick={() => dispatch(deleteList(list.id))}
				>
					<FontAwesomeIcon icon={faTimesCircle} />
				</div>
			</div>
			<div className={styles.content}>
				<TaskCreator listId={list.id} />
				<TaskList tasks={tasks} list={list.id} />
			</div>
		</div>
	)
}

export default ListItem

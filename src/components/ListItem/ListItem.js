import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteList } from "actions";
import TaskCreator from "components/TaskCreator";
import TaskList from "components/TaskList";
import { Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styles from './list-item.module.scss';

const ListItem = ({ list, tasks }) => {
	const dispatch = useDispatch();

	return (
		<Droppable droppableId={`${list.id}`}>
			{(provided, snapshot) => (
				<div
					className={styles.body}
					ref={provided.innerRef}
				>
					<div className={styles.head}>
						<h2 className={styles.text}>{list.name}</h2>
						<div
							className={styles.delete}
							onClick={() => dispatch(deleteList(list.id))}
						>
							<FontAwesomeIcon icon={faTimesCircle} />
						</div>
					</div>
					<div className={[
						styles.content,
						snapshot.isDraggingOver ? styles['dragging-over'] : null,
						snapshot.draggingFromThisWith ? styles['dragging-from-this'] : null
					].join(' ')}>
						<TaskCreator listId={list.id} />
						<div {...provided.droppableProps}>
							<TaskList tasks={tasks} list={list.id} />
							{provided.placeholder}
						</div>
					</div>
				</div>
			)}
		</Droppable>
	)
}

export default ListItem

import { deleteTask, reorderTask } from "actions";
import ListCreator from "components/ListCreator";
import ListItem from "components/ListItem";
import TaskDeleteZone from "components/TaskDeleteZone";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styles from './list-list.module.scss';

const ListList = ({ board, lists, tasks }) => {
	const dispatch = useDispatch();

	const onDragEnd = (result) => {
		const { source, destination } = result;

		// dropped outside the list
		if (!destination) return;
		const dInd = destination.droppableId;
		const sInd = source.droppableId;
		const sId = tasks[sInd][source.index].id;

		if (dInd === 'Delete') {
			dispatch(deleteTask(sId));
			return;
		}

		const dId = tasks[dInd][destination.index] === undefined ? undefined : tasks[dInd][destination.index].id

		dispatch(reorderTask(sId, dId, +dInd));
	};
	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<div className={styles.wrapper}>
					{lists.map(e =>
						<ListItem key={e.id} list={e} tasks={tasks[e.id]} />
					)}
					<ListCreator boardId={board.id} />
				</div>
				<TaskDeleteZone />
			</DragDropContext>
		</>
	)
}

export default ListList

import { reorderTask } from "actions";
import ListItem from "components/ListItem";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

const ListList = ({ lists, tasks }) => {
	const dispatch = useDispatch();

	const onDragEnd = (result) => {
		const { source, destination } = result;

		// dropped outside the list
		if (!destination) return;
		const sInd = source.droppableId;
		const dInd = destination.droppableId;
		const sId = tasks[sInd][source.index].id;
		const dId = tasks[dInd][destination.index] === undefined ? undefined : tasks[dInd][destination.index].id

		dispatch(reorderTask(sId, dId, +dInd));
	};
	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				{lists.map(e =>
					<ListItem key={e.id} list={e} tasks={tasks[e.id]} />
				)}
			</DragDropContext>
		</>
	)
}

export default ListList

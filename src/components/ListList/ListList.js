import ListItem from "components/ListItem";
import { DragDropContext } from "react-beautiful-dnd";

const ListList = ({ lists }) => {

	// const reorder = (list, startIndex, endIndex) => {
	// 	const result = Array.from(list);
	// 	const [removed] = result.splice(startIndex, 1);
	// 	result.splice(endIndex, 0, removed);

	// 	return result;
	// };
	/**
	 * Moves an item from one list to another list.
	 */
	// const move = (source, destination, droppableSource, droppableDestination) => {
	// 	const sourceClone = Array.from(source);
	// 	const destClone = Array.from(destination);
	// 	const [removed] = sourceClone.splice(droppableSource.index, 1);

	// 	destClone.splice(droppableDestination.index, 0, removed);

	// 	const result = {};
	// 	result[droppableSource.droppableId] = sourceClone;
	// 	result[droppableDestination.droppableId] = destClone;

	// 	return result;
	// };

	const onDragEnd = (result) => {
		const { source, destination } = result;
		console.log("🚀 ~ file: ListList.js ~ line 7 ~ onDragEnd ~ source", source)
		console.log("🚀 ~ file: ListList.js ~ line 7 ~ onDragEnd ~ destination", destination)

		// dropped outside the list
		if (!destination) {
			console.log('miss')
			return;
		}
		const sInd = source.droppableId;
		const dInd = destination.droppableId;

		if (sInd === dInd) {
			// const items = reorder(state[sInd], source.index, destination.index);
			// const newState = [...state];
			// newState[sInd] = items;
			// setState(newState);
			console.log('same list')
			return;
		} else {
			// const result = move(state[sInd], state[dInd], source, destination);
			// const newState = [...state];
			// newState[sInd] = result[sInd];
			// newState[dInd] = result[dInd];

			// setState(newState.filter(group => group.length));
			console.log(`new list ${dInd}`)
		}
	};
	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				{lists.map(e =>
					<ListItem key={e.id} list={e} />
				)}
			</DragDropContext>
		</>
	)
}

export default ListList

import ListItem from "components/ListItem"
import { DragDropContext } from "react-beautiful-dnd"

const ListList = ({ lists }) => {
	const onDragEnd = () => {};
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

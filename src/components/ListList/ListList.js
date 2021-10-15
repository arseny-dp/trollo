import ListItem from "components/ListItem"

const ListList = ({ lists }) => {
	return (
		<>
			{lists.map(e =>
				<ListItem key={e.id} list={e} />
			)}
		</>
	)
}

export default ListList

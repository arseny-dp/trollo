import ListItem from "components/ListItem"

const ListList = ({ lists }) => {
	return (
		<div>
			{lists.map(e =>
				<ListItem key={e.id} list={e} />
			)}
		</div>
	)
}

export default ListList

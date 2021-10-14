import { addList } from "actions";
import { useState } from "react";
import { connect } from "react-redux";

const ListCreator = ({ boardId: parentId, addList }) => {

	const [value, setValue] = useState('List');
	const clearInput = () => setValue('');
	const handler = () => {
		addList({text: value, parentId});
		clearInput();
	}
	return (
		<div>
			Новый список
			<label>
				Название списка
				<input
					type='text'
					placeholder='Unnamed'
					onChange={e => setValue(e.target.value)}
					onKeyPress={e => e.key === 'Enter' && handler()}
					value={value} />
			</label>
		</div>
	)
}

export default connect(null, { addList })(ListCreator)

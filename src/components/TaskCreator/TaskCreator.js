import { addTask } from "actions";
import { useState } from "react";
import { connect } from "react-redux";

const TaskCreator = ({ listId: parentId, addTask }) => {

	const [value, setValue] = useState('Task');
	const clearInput = () => setValue('');
	const handler = () => {
		addTask({ name: value, parentId });
		clearInput();
	}
	return (
		<div>
			<input
				type='text'
				placeholder='Unnamed'
				onChange={e => setValue(e.target.value)}
				onKeyPress={e => e.key === 'Enter' && handler()}
				value={value} />
		</div>
	)
}
export default connect(null, { addTask })(TaskCreator)

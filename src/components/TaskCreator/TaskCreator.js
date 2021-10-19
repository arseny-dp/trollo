import { addTask } from "actions";
import { DEFAULT_TASK_NAME } from "constants/default";
import { useState } from "react";
import { connect } from "react-redux";

const TaskCreator = ({ listId: parentId, addTask }) => {

	const [value, setValue] = useState('');
	const clearInput = () => setValue('');
	const handler = () => {
		addTask({ text: value, parentId });
		clearInput();
	}
	return (
		<>
			<input
				type='text'
				placeholder={`${DEFAULT_TASK_NAME} #`}
				onChange={e => setValue(e.target.value)}
				onKeyPress={e => e.key === 'Enter' && handler()}
				value={value} />
		</>
	)
}
export default connect(null, { addTask })(TaskCreator)

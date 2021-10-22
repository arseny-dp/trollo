import { addTask } from "actions";
import { DEFAULT_TASK_NAME } from "constants/defaultNames";
import { useState } from "react";
import { useDispatch } from "react-redux";

const TaskCreator = ({ parentId }) => {
	const dispatch = useDispatch();

	const [value, setValue] = useState('');
	const clearInput = () => setValue('');
	const handler = () => {
		dispatch(addTask({ text: value, parentId }));
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
export default TaskCreator;

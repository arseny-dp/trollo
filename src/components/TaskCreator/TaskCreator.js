import { addTask } from "actions";
import EditableCaption from "components/EditableCaption";
import { DEFAULT_TASK_NAME } from "constants/defaultNames";
import { useDispatch } from "react-redux";

const TaskCreator = ({ parentId }) => {
	const dispatch = useDispatch();

	const handler = (value) => dispatch(addTask({ name: value, parentId }));

	return (
		<>
			<EditableCaption
				value=''
				handler={handler}
				placeholder={`${DEFAULT_TASK_NAME} #`} />
		</>
	)
}
export default TaskCreator;

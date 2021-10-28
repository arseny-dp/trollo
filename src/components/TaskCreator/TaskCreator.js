import { addTask } from "actions";
import EditableCaption from "components/EditableCaption";
import { DEFAULT_TASK_NAME } from "constants/defaultNames";
import { useDispatch } from "react-redux";
import styles from './task-creator.module.scss';

const TaskCreator = ({ parentId }) => {
	const dispatch = useDispatch();

	const handler = (value) => dispatch(addTask({ name: value, parentId }));

	return (
		<div className={styles.body}>
			<EditableCaption
				handler={handler}
				placeholder={`${DEFAULT_TASK_NAME} #`} />
		</div>
	)
}
export default TaskCreator;

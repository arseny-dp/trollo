import EditableCaption from 'components/EditableCaption';
import { DEFAULT_TASK_NAME } from 'constants/defaultNames';
import { number } from 'prop-types';
import { useDispatch } from 'react-redux';
import { taskAdded } from 'store/tasksSlice';
import styles from './TaskCreator.module.scss';

const TaskCreator = ({ parentId }) => {
	const dispatch = useDispatch();

	const handler = (value) => dispatch(taskAdded({ name: value, parentId }));

	return (
		<div className={styles.body}>
			<EditableCaption
				handler={handler}
				placeholder={`${DEFAULT_TASK_NAME} #`} />
		</div>
	);
};

TaskCreator.propTypes = {
	parentId: number.isRequired,
};

export default TaskCreator;

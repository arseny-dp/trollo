import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteStory } from 'actions';
import { useDispatch } from 'react-redux';
import styles from './StoryDelete.module.scss';

const StoryDelete = ({ id }) => {
	const dispatch = useDispatch();
	const deleteHandler = () => dispatch(deleteStory(id));

	return (
		<div
			className={styles.delete}
			onClick={deleteHandler}
		>
			<FontAwesomeIcon icon={faTimesCircle} />
		</div>
	)
}

export default StoryDelete

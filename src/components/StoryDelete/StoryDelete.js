import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { number } from 'prop-types';
import { useDispatch } from 'react-redux';
import { storyDeleted } from 'store/storiesSlice';
import styles from './StoryDelete.module.scss';

const StoryDelete = ({ id }) => {
	const dispatch = useDispatch();
	const deleteHandler = () => dispatch(storyDeleted(id));

	return (
		<div
			className={styles.delete}
			onClick={deleteHandler}
		>
			<FontAwesomeIcon icon={faTimesCircle} />
		</div>
	);
};

StoryDelete.propTypes = {
	id: number.isRequired,
};

export default StoryDelete;

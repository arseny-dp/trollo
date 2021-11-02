import EditableCaption from 'components/EditableCaption';
import { DEFAULT_STORY_NAME } from 'constants/defaultNames';
import { number } from 'prop-types';
import { useDispatch } from 'react-redux';
import { storyAdded } from 'store/storiesSlice';
import styles from './StoryCreator.module.scss';

const StoryCreator = ({ boardId: parentId }) => {
	const dispatch = useDispatch();

	const handler = (value) => {
		dispatch(storyAdded({ name: value, parentId }));
	};
	return (
		<div className={styles.body}>
			<EditableCaption
				handler={handler}
				placeholder={`${DEFAULT_STORY_NAME} #`} />
		</div>
	);
};

StoryCreator.propTypes = {
	boardId: number.isRequired,
};

export default StoryCreator;

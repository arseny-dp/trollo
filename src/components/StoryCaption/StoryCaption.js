import EditableCaption from 'components/EditableCaption';
import { number, shape, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { storyRenamed } from 'store/storiesSlice';
import styles from './StoryCaption.module.scss';

const StoryCaption = ({ story }) => {
	const dispatch = useDispatch();
	const renameHandler = (value) => dispatch(storyRenamed({id: story.id, name: value}));

	return (
		<h2 className={styles.caption}>
			<EditableCaption
				value={story.name}
				handler={renameHandler} />
		</h2>
	);
};

StoryCaption.propTypes = {
	story: shape({
		id: number.isRequired,
		name: string,
	}).isRequired
};

export default StoryCaption;

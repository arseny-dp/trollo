import { storyRename } from "actions";
import EditableCaption from "components/EditableCaption";
import { useDispatch } from "react-redux";
import styles from './story-caption.module.scss';

const StoryCaption = ({ story }) => {
	const dispatch = useDispatch();
	const renameHandler = (value) => dispatch(storyRename(story.id, value))

	return (
		<h2 className={styles.caption}>
			<EditableCaption
				value={story.name}
				handler={renameHandler} />
		</h2>
	)
}

export default StoryCaption

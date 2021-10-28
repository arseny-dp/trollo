import { addStory } from "actions";
import EditableCaption from "components/EditableCaption";
import { DEFAULT_STORY_NAME } from "constants/defaultNames";
import { useDispatch } from "react-redux";
import styles from './story-creator.module.scss';

const StoryCreator = ({ boardId: parentId }) => {
	const dispatch = useDispatch();

	const handler = (value) => {
		dispatch(addStory({ name: value, parentId }));
	}
	return (
		<div className={styles.body}>
			<EditableCaption
				handler={handler}
				placeholder={`${DEFAULT_STORY_NAME} #`} />
		</div>
	)
}

export default StoryCreator;

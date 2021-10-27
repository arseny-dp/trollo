import StoryCaption from "components/StoryCaption";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteStory } from "actions";
import TaskList from "components/TaskList";
import { useDispatch } from "react-redux";
import styles from './story-item.module.scss';

const StoryItem = ({ story }) => {
	const dispatch = useDispatch();

	return (
		<div className={styles.body}>
			<div className={styles.head}>
				<StoryCaption story={story} />
				<div
					className={styles.delete}
					onClick={() => dispatch(deleteStory(story.id))}
				>
					<FontAwesomeIcon icon={faTimesCircle} />
				</div>
			</div>
			<TaskList parentId={story.id} />
		</div>
	)
}

export default StoryItem

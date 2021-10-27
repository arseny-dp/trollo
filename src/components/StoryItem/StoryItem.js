import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteStory } from "actions";
import TaskList from "components/TaskList";
import { useDispatch } from "react-redux";
import styles from './story-item.module.scss';

const StoryItem = ({ story }) => {
	const dispatch = useDispatch();

	return (
		<div
			className={styles.body}
		>
			<div className={styles.head}>
				<h2 className={styles.caption}>{story.name}</h2>
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

import StoryCaption from "components/StoryCaption";
import StoryDelete from "components/StoryDelete";
import TaskList from "components/TaskList";
import styles from './StoryItem.module.scss';

const StoryItem = ({ story }) => {
	return (
		<div className={styles.body}>
			<div className={styles.head}>
				<StoryCaption story={story} />
				<StoryDelete id={story.id} />
			</div>
			<TaskList parentId={story.id} />
		</div>
	)
}

export default StoryItem

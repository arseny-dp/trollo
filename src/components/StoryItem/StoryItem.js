import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteStory } from "actions";
import TaskCreator from "components/TaskCreator";
import TaskList from "components/TaskList";
import { Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styles from './story-item.module.scss';

const StoryItem = ({ story, tasks }) => {
	const dispatch = useDispatch();
	return (
		<Droppable droppableId={`${story.id}`}>
			{(provided, snapshot) => (
				<div
					className={styles.body}
					ref={provided.innerRef}
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
					<div className={[
						styles.content,
						snapshot.isDraggingOver ? styles['dragging-over'] : null,
						snapshot.draggingFromThisWith ? styles['dragging-from-this'] : null
					].join(' ')}>
						<TaskCreator parentId={story.id} />
						{!!tasks.length &&
							<div {...provided.droppableProps}>
								<TaskList tasks={tasks} />
							</div>
						}
						{provided.placeholder}
					</div>
				</div>
			)}
		</Droppable>
	)
}

export default StoryItem

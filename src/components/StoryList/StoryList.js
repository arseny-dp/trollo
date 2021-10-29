import { deleteTask, reorderTask } from "actions";
import StoryCreator from "components/StoryCreator";
import StoryItem from "components/StoryItem";
import TaskDeleteZone from "components/TaskDeleteZone";
import useStoriesByBoard from "hooks/useStoriesByBoard";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styles from './StoryList.module.scss';

const StoryList = ({ parentId }) => {
	const dispatch = useDispatch();
	const [isDraggingNow, setIsDraggingNow] = useState(false);
	const stories = useStoriesByBoard(parentId)

	const onDragEnd = (result) => {
		setIsDraggingNow(false);

		const { source, destination, draggableId } = result;

		if (!destination) return; // dropped outside the list
		if (source.index === destination.index && source.droppableId === destination.droppableId) return; // nothing has changed

		const sId = +draggableId;

		if (draggableId === 'Delete') {
			dispatch(deleteTask(sId));
			return;
		}

		const dest = +destination.droppableId;
		const dInd = +destination.index;


		dispatch(reorderTask(sId, dInd, dest));
	};

	const onDragStart = () => setIsDraggingNow(true)

	return (
		<>
			<DragDropContext
				onDragEnd={onDragEnd}
				onDragStart={onDragStart}
			>
				<div className={styles.wrapper}>
					{stories.map(story =>
						<StoryItem key={story.id} story={story} />
					)}
					<StoryCreator boardId={parentId} />
				</div>
				<TaskDeleteZone show={isDraggingNow} />
			</DragDropContext>
		</>
	)
}

export default StoryList;

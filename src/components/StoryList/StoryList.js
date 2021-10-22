import { deleteTask, reorderTask } from "actions";
import StoryCreator from "components/StoryCreator";
import StoryItem from "components/StoryItem";
import TaskDeleteZone from "components/TaskDeleteZone";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styles from './story-list.module.scss';

const StoryList = ({ board, stories, tasks }) => {
	const dispatch = useDispatch();
	const [isDraggingNow, setIsDraggingNow] = useState(false);

	const onDragEnd = (result) => {
		setIsDraggingNow(false);

		const { source, destination } = result;

		// dropped outside the list
		if (!destination) return;
		const dInd = destination.droppableId;
		const sInd = source.droppableId;
		const sId = tasks[sInd][source.index].id;

		if (dInd === 'Delete') {
			dispatch(deleteTask(sId));
			return;
		}

		const dId = tasks[dInd][destination.index] === undefined ? undefined : tasks[dInd][destination.index].id

		dispatch(reorderTask(sId, dId, +dInd));
	};

	const onDragStart = () => {
		setIsDraggingNow(true);
	}

	return (
		<>
			<DragDropContext
				onDragEnd={onDragEnd}
				onDragStart={onDragStart}
			>
				<div className={styles.wrapper}>
					{stories.map(e =>
						<StoryItem key={e.id} story={e} tasks={tasks[e.id]} />
					)}
					<StoryCreator boardId={board.id} />
				</div>
				<TaskDeleteZone hidden={!isDraggingNow}/>
			</DragDropContext>
		</>
	)
}

export default StoryList

import StoryCreator from 'components/StoryCreator';
import StoryItem from 'components/StoryItem';
import TaskDeleteZone from 'components/TaskDeleteZone';
import useStoriesByBoard from 'hooks/useStoriesByBoard';
import { number } from 'prop-types';
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { taskDeleted, tasksReordered } from 'store/tasksSlice';
import styles from './StoryList.module.scss';

const StoryList = ({ parentId }) => {
	const dispatch = useDispatch();
	const [isDraggingNow, setIsDraggingNow] = useState(false);
	const stories = useStoriesByBoard(parentId);

	const onDragEnd = (result) => {
		setIsDraggingNow(false);

		const { source, destination, draggableId } = result;

		if (!destination) return; // dropped outside the list
		if (source.index === destination.index && source.droppableId === destination.droppableId) return; // nothing has changed

		const sId = +draggableId;

		if (destination.droppableId === 'Delete') {
			dispatch(taskDeleted(sId));
			return;
		}

		const dest = +destination.droppableId;
		const dInd = +destination.index;


		dispatch(tasksReordered({sId, dInd, dest}));
	};

	const onDragStart = () => setIsDraggingNow(true);

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
	);
};

StoryList.propTypes = {
	parentId: number.isRequired,
};

export default StoryList;

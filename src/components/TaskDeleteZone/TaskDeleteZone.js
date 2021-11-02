import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bool } from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import cn from 'utils/bindedClassNames';
import styles from './TaskDeleteZone.module.scss';

const TaskDeleteZone = ({ show }) => {
	return (
		<Droppable droppableId={'Delete'}>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					className={cn(styles)({
						body: true,
						hidden: !show,
						active: snapshot.isDraggingOver
					})}
					{...provided.droppableProps}
				>
					{provided.placeholder}
					<FontAwesomeIcon
						icon={faTrashAlt}
						size='3x'
						className={styles.icon} />
				</div>
			)}

		</Droppable>
	);
};

TaskDeleteZone.propTypes = {
	show: bool.isRequired,
};

export default TaskDeleteZone;

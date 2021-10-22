import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Droppable } from "react-beautiful-dnd";
import styles from './task-delete-zone.module.scss';

const TaskDeleteZone = ({ show }) => {
	return (
		<Droppable droppableId={'Delete'}>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					className={[
						styles.body,
						show ? null : styles.hidden,
						snapshot.isDraggingOver ? styles.active : null
					].join(' ')}
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
	)
}

export default TaskDeleteZone;

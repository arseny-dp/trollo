import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Droppable } from "react-beautiful-dnd"
import styles from './task-delete-zone.module.scss';

const TaskDeleteZone = ({hidden}) => {
	return (
		<Droppable droppableId={'Delete'}>
			{(provided, snapshot) => (
			<div
				ref={provided.innerRef}
				className={[
					styles.body,
					hidden ? styles.hidden : null,
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

export default TaskDeleteZone

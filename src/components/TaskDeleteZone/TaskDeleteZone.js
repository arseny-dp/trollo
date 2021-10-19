import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Droppable } from "react-beautiful-dnd"
import styles from './task-delete-zone.module.scss';

const TaskDeleteZone = () => {
	return (
		<Droppable droppableId={'Delete'}>
			{(provided, snapshot) => (
			<div
				ref={provided.innerRef}
				className={styles.body}
				{...provided.droppableProps}
			>
				<FontAwesomeIcon
					icon={faTrashAlt}
					size='3x'
					className={styles.icon} />
				{/* {provided.placeholder} */}
			</div>
		)}

		</Droppable>
	)
}

export default TaskDeleteZone

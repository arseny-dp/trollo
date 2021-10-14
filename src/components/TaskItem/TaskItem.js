import { toggleTask } from "actions";
import { connect } from "react-redux";
import styles from './task-item.module.scss';

const TaskItem = ({ task, toggleTask }) => {
	return (
		<div className={task.done ? styles.done : null} onClick={() => toggleTask(task.id)}>
			{task.text}
		</div>
	)
}

export default connect(null, { toggleTask })(TaskItem)

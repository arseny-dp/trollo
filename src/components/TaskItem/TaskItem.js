import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleTask } from "actions";
import { connect } from "react-redux";
import styles from './task-item.module.scss';

const TaskItem = ({ task, toggleTask }) => {
	return (
			<div className={[
					styles.body,
					task.done && styles.done
				].join(' ')}>
				<span className={styles.text}>
					<div className={styles.decore} />
			{task.text}
				</span>
				<div
					className={styles["check-icon"]}
					onClick={() => toggleTask(task.id)}>
					<FontAwesomeIcon icon={faCheck} />
		</div>
			</div>
	)
}

export default connect(null, { toggleTask })(TaskItem)

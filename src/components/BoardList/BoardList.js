import BoardItem from "components/BoardItem";
import { useSelector } from "react-redux";
import styles from './BoardList.module.scss';

const BoardList = () => {
	const boards = useSelector(state => state.boards);

	return (
		<div className={styles.body}>
			{boards.map(e =>
				<BoardItem key={e.id} board={e} />
			)}
		</div>
	)
};

export default BoardList;

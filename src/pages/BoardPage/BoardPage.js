import BoardCaption from "components/BoardCaption";
import StoryList from "components/StoryList";
import { useParams } from "react-router";
import styles from './BoardPage.module.scss';

const BoardPage = () => {

	const { id } = useParams();

	return (
		<div className={styles.body}>
			<BoardCaption id={+id} />
			<StoryList parentId={+id} />
		</div>
	);
};

export default BoardPage;

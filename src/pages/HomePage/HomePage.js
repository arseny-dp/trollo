import BoardCreator from "components/BoardCreator";
import BoardList from "components/BoardList";
import styles from './home-page.module.scss';

const HomePage = () => {

	return (
		<div className={styles.body}>
			<BoardCreator />
			<BoardList />
		</div>
	)
}

export default HomePage;

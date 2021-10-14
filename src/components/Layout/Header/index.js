import { Link } from "react-router-dom";
import styles from './header.module.scss'

const Header = () => {
	return (
		<div className={styles.body}>
			<Link to='/boards/'>Home</Link>
		</div>
	)
};

export default Header;

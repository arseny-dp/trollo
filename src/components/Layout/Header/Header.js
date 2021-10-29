import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.body}>
			<Link className={styles.link} to='/boards/'>
				<FontAwesomeIcon className={styles.icon} icon={faHome} size="2x" />
			</Link>
		</div>
	)
};

export default Header;
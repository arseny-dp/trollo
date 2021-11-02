import { node } from 'prop-types';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<div className={styles.body}>
			{children}
		</div>
	);
};

Layout.propTypes = {
	children: node
};

export default Layout;
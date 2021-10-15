import styles from './layout.module.scss'

const Layout = (props) => {
	return (
		<div className={styles.body}>
			{props.children}
		</div>
	)
};

export default Layout;
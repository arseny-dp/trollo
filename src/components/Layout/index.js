import './style.scss';

const Layout = props => {
	return (
		<div className='layout'>
			{props.children}
		</div>
	)
}

Layout.propTypes = {

}

export default Layout
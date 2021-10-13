import { Link } from "react-router-dom"

const Error = () => {
	return (
		<div>
			<div>Что-то пошло не так</div>
			<Link to='/'>Вернуться на главную</Link>
		</div>
	)
}

export default Error

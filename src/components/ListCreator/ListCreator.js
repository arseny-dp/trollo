import { addList } from "actions";
import { DEFAULT_LIST_NAME } from "constants/default";
import { useState } from "react";
import { connect } from "react-redux";
import styles from './list-creator.module.scss';

const ListCreator = ({ boardId: parentId, addList }) => {

	const [value, setValue] = useState('');
	const clearInput = () => setValue('');
	const handler = () => {
		addList({name: value, parentId});
		clearInput();
	}
	return (
		<div className={styles.body}>
			{/* <div>Новый список</div> */}
			{/* <label> */}
				{/* Название списка */}
				<input
					type='text'
					placeholder={`${DEFAULT_LIST_NAME} #`}
					onChange={e => setValue(e.target.value)}
					onKeyPress={e => e.key === 'Enter' && handler()}
					value={value} />
			{/* </label> */}
		</div>
	)
}

export default connect(null, { addList })(ListCreator)

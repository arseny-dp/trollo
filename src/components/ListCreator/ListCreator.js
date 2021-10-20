import { addList } from "actions";
import { DEFAULT_LIST_NAME } from "constants/default";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './list-creator.module.scss';

const ListCreator = ({ boardId: parentId }) => {
	const dispatch = useDispatch();

	const [value, setValue] = useState('');
	const clearInput = () => setValue('');
	const handler = () => {
		dispatch(addList({ name: value, parentId }));
		clearInput();
	}
	return (
		<div className={styles.body}>
			<input
				type='text'
				placeholder={`${DEFAULT_LIST_NAME} #`}
				onChange={e => setValue(e.target.value)}
				onKeyPress={e => e.key === 'Enter' && handler()}
				value={value} />
		</div>
	)
}

export default ListCreator;

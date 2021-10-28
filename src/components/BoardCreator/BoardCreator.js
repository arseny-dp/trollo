import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addBoard } from 'actions';
import { DEFAULT_BOARD_NAME } from 'constants/defaultNames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './board-creator.module.scss';

const BoardCreator = () => {

	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const [isOpened, setIsOpened] = useState(false);

	const closeDropdown = () => setIsOpened(false);
	const clearInput = () => setValue('');
	const confirm = () => {
		dispatch(addBoard(value));
		clearInput();
	}
	const cancel = () => {
		closeDropdown();
		clearInput();
	}

	const getOpenedClass = isOpened => isOpened ? styles.dropdown_opened : '';

	return (
		<div className={styles.body}>
			<div className={styles.top} onClick={() => setIsOpened(!isOpened)}>
				<div className={styles.icon}>
					<FontAwesomeIcon icon={faPlus} />
				</div>
				Новая доска
			</div>
			<div className={`${styles.dropdown} ${getOpenedClass(isOpened)}`}>
				<label className={styles.label}>
					Название доски
					<input
						className={styles.input}
						type='text'
						placeholder={`${DEFAULT_BOARD_NAME} #`}
						onChange={e => setValue(e.target.value)}
						value={value} />
				</label>
				<div className={styles.buttons}>
					<button
						className={styles.cancel}
						type='reset'
						onClick={cancel}
					>
						Отмена
					</button>
					<button
						className={styles.confirm}
						type='submit'
						onClick={confirm}
					>
						Сохранить
					</button>
				</div>
			</div>
		</div>
	)
};

export default BoardCreator;

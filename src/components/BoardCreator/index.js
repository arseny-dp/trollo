import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './style.scss';

const BoardCreator = props => {
	const {
		boards,
		setBoards
	} = props

	const [value, setValue] = useState('Board');
	const [isOpened, setIsOpened] = useState(false);

	const closeDropdown = () => setIsOpened(false)
	const clearInput = () => setValue('');
	const addBoard = () => {
		let id = Date.now();
		let name = value || 'Unnamed ' + id;
		setBoards([...boards, { id: id, name: name }]);
		clearInput()
	}
	const cancel = () => {
		closeDropdown();
		clearInput();
	}

	const getOpenedClass = isOpened => isOpened ? 'board-creator__dropdown_opened' : '';

	return (
		<div className='board-creator'>
			<div className='board-creator__top' onClick={() => setIsOpened(!isOpened)}>
				<div className='board-creator__icon'>
					<FontAwesomeIcon icon={faPlus} />
				</div>
				Новая доска
			</div>
			<div className={`board-creator__dropdown ${getOpenedClass(isOpened)}`}>
				<label className='board-creator__label'>
					Название доски
					<input
						className='board-creator__input'
						type='text'
						placeholder='Unnamed'
						onChange={e => setValue(e.target.value)}
						value={value} />
				</label>
				<div className="board-creator__buttons">
					<button className='' type='submit' onClick={addBoard} >Сохранить</button>
					<button type='reset' onClick={cancel}>Отмена</button>
				</div>
			</div>
		</div>
	)
}

BoardCreator.propTypes = {

}

export default BoardCreator

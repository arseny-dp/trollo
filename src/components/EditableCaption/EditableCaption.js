import { useEffect, useRef, useState } from "react";
import styles from './editable-caption.module.scss';

const EditableCaption = (props) => {
	const { value, handler, placeholder = '' } = props;
	const create = !value;

	const [inputValue, setInputValue] = useState(value);
	const [saved, setSaved] = useState(false);
	const [error, setError] = useState(false);

	const enter = useRef(false);

	const keyPressHandler = (e) => {
		if (e.key !== 'Enter') return;

		if (inputValue === '' && !create) {//на пустое поле | только редактирование
			setError(true);
			return;
		};

		enter.current = true;
		create ? lostFocusHandler() : e.currentTarget.blur();
	}

	const lostFocusHandler = () => {
		if (!enter.current && !create) { //сбрасываем и выдаем ошибку если без ввода | только редактирование
			setInputValue(value);
			// setError(true);
			return;
		};
		if (!enter.current) return; //выходим если без ввода | только добавление
		enter.current = false;// сбрасываем триггер
		if (inputValue !== value || create) { //отправляем данные если был ввод и условия соблюдаются
			handler(inputValue);
			setSaved(true);
			return;
		}
	}

	useEffect(() => { //снимаем эффект ошибки и сохранения
		const timer = setTimeout(() => {
			setSaved(false);
			setError(false);
		}, 100);

		return () => {
			clearTimeout(timer);
		}
	}, [saved, error])

	return (
		<input
			className={[
				styles.input,
				saved ? styles.saved : null,
				error ? styles.error : null
			].join(' ')}
			type="text"
			placeholder={placeholder}
			onChange={e => setInputValue(e.target.value)}
			onBlur={lostFocusHandler}
			onKeyPress={keyPressHandler}
			value={inputValue} />
	)
};

export default EditableCaption;

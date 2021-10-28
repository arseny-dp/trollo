import { useEffect, useRef, useState } from "react";
import styles from './editable-caption.module.scss';

const EditableCaption = (props) => {
	const { value, handler, placeholder = '' } = props;
	const edit = !!value;

	const [inputValue, setInputValue] = useState(value);
	const [isSaved, setIsSaved] = useState(false);
	const [isError, setIsError] = useState(false);
	const enter = useRef(false);

	const keyPressHandler = (e) => {
		if (e.key !== 'Enter') return;

		if (inputValue === '' && edit) {
			setIsError(true);
			return;
		};

		enter.current = true;
		edit ? e.currentTarget.blur() : lostFocusHandler();
	}

	const lostFocusHandler = () => {
		if (!enter.current) {
			if (edit) setInputValue(value);
			// setError(true);
			return;
		};

		enter.current = false;

		if (inputValue !== value || !edit) {
			handler(inputValue);
			setIsSaved(true);
			if (!edit) setInputValue('');
			return;
		}
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsSaved(false);
			setIsError(false);
		}, 100);

		return () => {
			clearTimeout(timer);
		}
	}, [isSaved, isError])

	return (
		<input
			className={[
				styles.input,
				isSaved ? styles.saved : null,
				isError ? styles.error : null
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

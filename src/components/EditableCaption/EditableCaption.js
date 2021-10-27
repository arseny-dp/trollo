import { useEffect, useRef, useState } from "react";
import styles from './editable-caption.module.scss';

const EditableCaption = (props) => {
	const { value = '', handler, placeholder = '' } = props;

	const [inputValue, setInputValue] = useState(value);
	const [saved, setSaved] = useState(false);
	const [error, setError] = useState(false);

	const input = useRef();

	const enterHandler = () => {
		if (inputValue === value) {
			return;
		};
		if (inputValue === '') {
			setError(true);
			return;
		};
		setSaved(true);
	}

	const lostFocusHandler = () => {
		if (inputValue === value) return;
		if (saved) {
			handler(inputValue);
			return
		}
		setInputValue(value);
		setError(true);
	}

	useEffect(() => input.current.blur(), [saved])

	useEffect(() => setInputValue(value), [value])

	useEffect(() => {
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
				error ? styles.canceled : null
			].join(' ')}
			ref={input}
			type="text"
			placeholder={placeholder}
			onChange={e => setInputValue(e.target.value)}
			onBlur={() => lostFocusHandler()}
			onKeyPress={e => e.key === 'Enter' && enterHandler()}
			value={inputValue} />
	)
};

export default EditableCaption;

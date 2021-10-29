import { useEffect, useRef, useState } from "react";
import cn from "utils/bindedClassNames";
import styles from './EditableCaption.module.scss';

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
		e.currentTarget.blur();
	}

	const lostFocusHandler = () => {
		if (!enter.current) {
			if (edit) setInputValue(value);
			// setError(true);
			return;
		};

		enter.current = false;

		setIsSaved(true);
		if (inputValue !== value || !edit) {
			handler(inputValue);
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
			className={cn(styles)({
				input: true,
				saved: isSaved,
				error: isError
			})}
			type="text"
			placeholder={placeholder}
			onChange={e => setInputValue(e.target.value)}
			onBlur={lostFocusHandler}
			onKeyPress={keyPressHandler}
			value={inputValue} />
	)
};

export default EditableCaption;

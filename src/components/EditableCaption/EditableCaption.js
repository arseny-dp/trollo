import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styles from './editable-caption.module.scss';

const EditableCaption = (props) => {
	const { item, handler, defaultValue } = props;

	const [value, setValue] = useState(item.name);
	const [saved, setSaved] = useState(false);
	const [canceled, setCanceled] = useState(false);

	const input = useRef();
	const dispatch = useDispatch();

	const enterHandler = () => {
		if (value === item.name) return
		setSaved(true);
	}

	const lostFocusHandler = () => {
		if (value === item.name) return
		if (saved) {
			dispatch(handler(item.id, value));
		} else {
			setValue(item.name);
			setCanceled(true);
		}
	}

	useEffect(() => input.current.blur(), [saved])

	useEffect(() => {
		const timer = setTimeout(() => {
			setSaved(false);
			setCanceled(false);
		}, 100);

		return () => {
			clearTimeout(timer);
		}
	}, [saved, canceled])

	useEffect(() => setValue(item.name), [item])

	return (
		<input
			className={[
				styles.input,
				saved ? styles.saved : null,
				canceled ? styles.canceled : null
			].join(' ')}
			ref={input}
			type="text"
			placeholder={`${defaultValue} #`}
			onChange={e => setValue(e.target.value)}
			onBlur={() => lostFocusHandler()}
			onKeyPress={e => e.key === 'Enter' && enterHandler()}
			value={value} />
	)
};

export default EditableCaption;

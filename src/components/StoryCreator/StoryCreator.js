import { addStory } from "actions";
import { DEFAULT_STORY_NAME } from "constants/defaultNames";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './story-creator.module.scss';

const StoryCreator = ({ boardId: parentId }) => {
	const dispatch = useDispatch();

	const [value, setValue] = useState('');
	const clearInput = () => setValue('');
	const handler = () => {
		dispatch(addStory({ name: value, parentId }));
		clearInput();
	}
	return (
		<div className={styles.body}>
			<input
				type='text'
				placeholder={`${DEFAULT_STORY_NAME} #`}
				onChange={e => setValue(e.target.value)}
				onKeyPress={e => e.key === 'Enter' && handler()}
				value={value} />
		</div>
	)
}

export default StoryCreator;

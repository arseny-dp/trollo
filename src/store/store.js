import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './boardsSlice';
import storiesReducer from './storiesSlice';
import tasksReducer from './tasksSlice';

const store = configureStore({
	reducer: {
		boards: boardsReducer,
		stories: storiesReducer,
		tasks: tasksReducer
	}
});

export default store;
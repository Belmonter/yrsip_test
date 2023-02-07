import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const articlesSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
	},
});

export const articlesReducer = articlesSlice.reducer;
export const {} = articlesSlice.actions;

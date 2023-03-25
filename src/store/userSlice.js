import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		increment: state => state + 1,
		decrement: state => state - 1
	}
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer;

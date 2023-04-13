import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

export const registerUser = formData => async dispatch => {
	try {
		const response = await fetch('/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});
		const data = await response.json();

		dispatch(registerUserMessage(data));
	} catch (err) {
		console.error(err);
		dispatch(registerUserMessage({ message: 'Registration failed', error: err }));
	}
};

const initialState = {
	message: null,
	error: null,
	user: {
		email: '',
		password: ''
	}
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user.email = action.payload.email;
			state.user.password = action.payload.password;
		},
		removeUser: (state, action) => {
			state.user.email = '';
			state.user.password = '';
		},
		registerUserMessage: (state, action) => {
			// Use Immer to update state immutably
			return produce(state, draft => {
				draft.message = action.payload.message;
				draft.error = action.payload.error;
			});
		}
	}
});

export const { setUser, removeUser, registerUserMessage } = userSlice.actions;
export default userSlice.reducer;

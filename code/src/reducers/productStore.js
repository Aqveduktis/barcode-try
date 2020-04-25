import { createSlice } from '@reduxjs/toolkit';
// Inital state
const myInitialState = {
	scannedProducts: [
		{
			code: 7311070347272
		}
	]
};

export const productStore = createSlice({
	name: 'productStore',
	initialState: myInitialState,
	reducers: {
		// Possible actione
		// New Task
		addProduct: (state, action) => {
			// add new product to list
		}
	}
});

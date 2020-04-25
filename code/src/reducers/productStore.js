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
      const arr = state.scannedProducts
      const object = action.payload
      if (!arr.includes(object)){
        state.scannedProducts.push(object)
      }
      
      //carBrands.includes(car1) // -> true
      
			// add new product to list
		}
	}
});

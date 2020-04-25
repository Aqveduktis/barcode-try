import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';
import { productStore } from 'reducers/productStore';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { ScanBarcode } from './components/Home';
import {Result} from './components/Result'

const onDetected = (code) => {
	console.log(`Code: ${code}`);
	fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`).then((data) => data.json()).then((json) => {
		console.log(json);
	});
};

const reducer = combineReducers({
	productStore: productStore.reducer
});

const store = configureStore({ reducer });
export const App = () => {
  
	return (
		<Provider store={store}>
			<div>
      <Result />
				<label>
					{' '}
					Test codes here: <input type="text" onChange={(e) => onDetected(e.target.value)} />
				</label>
				<p>
					{' '}
					Use the field above to test barcodes manually and keep an eye on your console in the browser. i.e.
					Type 7311070347272 - Pågen Gifflar. Yum
				</p>
				<ScanBarcode />
			</div>
		</Provider>
	);
};

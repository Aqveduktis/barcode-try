import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { BarcodeScanner } from './BarcodeScanner'
import {productStore} from '../reducers/productStore'




export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)

  const dispatch = useDispatch()
const onDetected = (code) => {
	console.log(`Code: ${code}`);
	fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`).then((data) => data.json()).then((json) => {
		console.log(json);
    if (json.status == 1) {setShowScanner(false); dispatch(productStore.actions.addProduct(json))}
    
	});
};



  return (
    <>
    
    
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          onDetected(code)
          
        }} />
      )}
    </>
  )
}
import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { BarcodeScanner } from './BarcodeScanner'




export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const codes = useSelector((state) => state.productStore.scannedProducts);

const onDetected = (code) => {
	console.log(`Code: ${code}`);
	fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`).then((data) => data.json()).then((json) => {
		console.log(json);
    if (json.status == 1) {setShowScanner(false)}
    
	});
};



  return (
    <>
    <p>{codes[0].code}</p>
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
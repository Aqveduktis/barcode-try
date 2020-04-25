import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { BarcodeScanner } from './BarcodeScanner'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const codes = useSelector((state) => state.productStore.scannedProducts);

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
          setShowScanner(false)
        }} />
      )}
    </>
  )
}
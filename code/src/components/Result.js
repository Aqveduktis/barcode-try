import React from 'react'
import {useSelector} from 'react-redux'
import { $CombinedState } from '@reduxjs/toolkit'


export const Result = () => {
const codes = useSelector((state) => state.productStore.scannedProducts);
  return (
    <div>
    {codes.map((code)=>(<p>{code.code}</p>))}
    </div>
  )
}
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AfterSimulationRikinTsumitate(props) {
  return (
    <>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className='px-2'>
          単価
        </td>
        <td className='text-xs'>{props.interestDay}</td>
        <td className='text-xs'>購入数量</td>
        <td className='text-xs'>購入金額</td>
      </tr>
    </>
  )
}

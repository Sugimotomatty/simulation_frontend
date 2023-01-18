import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AfterSimulationPortFolio(props) {
  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.issuer}</td>
        <td>{props.currency}</td>
        <td>{props.type}</td>
        <td>{props.rank}</td>
        <td>{props.call}</td>
        <td>{props.returnDay}</td>
        <td>{props.cp}</td>
        <td className='px-2'>
          単価
          {/* onChange={e => setInputValue(rimawari_calculate(e.target.value))} 上の行に入れてる*/}
        </td>
        <td className='text-xs'>{props.interestDay}</td>
        <td className='text-xs'>購入数量</td>
        <td className='text-xs'>購入金額</td>
        <td className='px-2'>参考利回り</td>
      </tr>
    </>
  )
}

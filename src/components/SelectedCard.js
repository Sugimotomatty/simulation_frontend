import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function SelectedCard(props) {
  const [data_rimawari, setData_rimawari] = React.useState('利回りを計算する')
  const [inputValue, setInputValue] = useState('利回りを計算する')
  const [inputValue2, setInputValue2] = useState('おお')

  useEffect(() => {
    const timer = setTimeout(() => {}, 500)

    return clearTimeout(timer)
  }, [inputValue, inputValue2])

  return (
    <>
      <tr className='text-sm'>
        <td >{props.id}</td>
        <td >{props.issuer}</td>
        <td >{props.currency}</td>
        <td >{props.type}</td>
        <td >{props.rank}</td>
        <td >{props.call}</td>
        <td >{props.returnDay}</td>
        <td >{props.cp}%</td>
        <td className='px-2'>
          <input
            type='number'
            placeholder='数値を入力してください'
            className='p-1'
          ></input>
          {/* onChange={e => setInputValue(rimawari_calculate(e.target.value))} 上の行に入れてる*/}
        </td>
        <td className='text-xs'>{props.interestDay}</td>
        <td className='px-2'>
          <input
            type='number'
            placeholder='数値を入力してください'
            className='p-1'
            onChange={(e) => setInputValue2(e.target.value)}
          ></input>
        </td>
        <td className='text-xs'>{props.enkansan}円</td>
        <td className='text-xs'>{props.rimawari}%</td>
      </tr>
    </>
  )
}

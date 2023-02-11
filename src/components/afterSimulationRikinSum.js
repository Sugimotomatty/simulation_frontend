import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AfterSimulationRikinSum(props) {
  return (
    <>
      <tr className='bg-slate-400 font-bold'>
        <td className='p-1'>{props.name}</td>
        <td className='p-1'>{props.oneyear}</td>
        <td className='p-1'>{props.twoyear}</td>
        <td className='p-1'>{props.threeyear}</td>
        <td className='p-1'>{props.fouryear}</td>
        <td className='p-1'>{props.fiveyear}</td>
        <td className='p-1'>{props.sixyear}</td>
        <td className='p-1'>{props.sevenyear}</td>
        <td className='p-1'>{props.eightyear}</td>
        <td className='p-1'>{props.nineyear}</td>
        <td className='p-1'>{props.tenyear}</td>
        <td rowSpan="2" className='bg-white'>{props.sum}</td>
      </tr>
    </>
  )
}

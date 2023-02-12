import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AfterSimulationRikinSum(props) {
  return (
    <>
      <tr className='bg-slate-400 font-bold'>
        <td className='p-1 text-sm '>{props.name}</td>
        <td className='p-1 text-sm '>{props.oneyear}</td>
        <td className='p-1 text-sm '>{props.twoyear}</td>
        <td className='p-1 text-sm '>{props.threeyear}</td>
        <td className='p-1 text-sm '>{props.fouryear}</td>
        <td className='p-1 text-sm '>{props.fiveyear}</td>
        <td className='p-1 text-sm '>{props.sixyear}</td>
        <td className='p-1 text-sm '>{props.sevenyear}</td>
        <td className='p-1 text-sm '>{props.eightyear}</td>
        <td className='p-1 text-sm '>{props.nineyear}</td>
        <td className='p-1 text-sm '>{props.tenyear}</td>
        <td rowSpan="2" className='bg-white'>{props.sum}</td>
      </tr>
    </>
  )
}

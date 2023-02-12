import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AfterSimulationRikinCulm(props) {
  return (
    <>
      <tr className='bg-zinc-300'>
        <td colSpan='2' className='p-1'>{props.name}</td>
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
        <td className='p-1 bg-white font-bold'>{props.tenyear}</td>
      </tr>
    </>
  )
}

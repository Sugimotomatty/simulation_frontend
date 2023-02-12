import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AfterSimulationRikinTsumitate(props) {
  return (
    <>
      <tr>
        <td className='p-2 text-sm '>{props.name}</td>
        <td className='p-2 text-sm '>{props.oneyear}</td>
        <td className='p-2 text-sm '>{props.twoyear}</td>
        <td className='p-2 text-sm '>{props.threeyear}</td>
        <td className='p-2 text-sm '>{props.fouryear}</td>
        <td className='p-2 text-sm '>{props.fiveyear}</td>
        <td className='p-2 text-sm '>{props.sixyear}</td>
        <td className='p-2 text-sm '>{props.sevenyear}</td>
        <td className='p-2 text-sm '>{props.eightyear}</td>
        <td className='p-2 text-sm '>{props.nineyear}</td>
        <td className='p-2 text-sm '>{props.tenyear}</td>
        <td className='p-2 text-sm '>{props.sum}</td>
      </tr>
    </>
  )
}

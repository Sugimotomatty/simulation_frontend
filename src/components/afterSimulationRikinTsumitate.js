import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AfterSimulationRikinTsumitate(props) {
  return (
    <>
      <tr>
        <td className='p-2'>{props.name}</td>
        <td className='p-2'>{props.oneyear}</td>
        <td className='p-2'>{props.twoyear}</td>
        <td className='p-2'>{props.threeyear}</td>
        <td className='p-2'>{props.fouryear}</td>
        <td className='p-2'>{props.fiveyear}</td>
        <td className='p-2'>{props.sixyear}</td>
        <td className='p-2'>{props.sevenyear}</td>
        <td className='p-2'>{props.eightyear}</td>
        <td className='p-2'>{props.nineyear}</td>
        <td className='p-2'>{props.tenyear}</td>
        <td className='p-2'>{props.sum}</td>
      </tr>
    </>
  )
}

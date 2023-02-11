import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AfterSimulationRikinCulm(props) {
  return (
    <>
      <tr className='bg-zinc-300'>
        <td colSpan='2' className='p-1'>{props.name}</td>
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
      </tr>
    </>
  )
}

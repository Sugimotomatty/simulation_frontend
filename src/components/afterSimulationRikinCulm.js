import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AfterSimulationRikinCulm(props) {
  return (
    <>
      <tr className='bg-zinc-300'>
        <td colSpan='2'>{props.name}</td>
        <td>{props.oneyear}</td>
        <td>{props.twoyear}</td>
        <td>{props.threeyear}</td>
        <td>{props.fouryear}</td>
        <td>{props.fiveyear}</td>
        <td>{props.sixyear}</td>
        <td>{props.sevenyear}</td>
        <td>{props.eightyear}</td>
        <td>{props.nineyear}</td>
        <td>{props.tenyear}</td>
      </tr>
    </>
  )
}

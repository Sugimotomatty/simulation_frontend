import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { format } from 'date-fns-tz'


export default function AfterSimulationPortFolio(props) {
  console.log(String(props.returnDay))
  return (
    <>
      <tr className='font-normal'>
        <td>{props.number }</td>
        <td>{props.issuer}</td>
        <td>{props.currency}</td>
        <td>{props.type}</td>
        <td>{props.rank}</td>
        <td>{props.call}</td>
        <td>{props.returnDay}</td>
        <td>{props.coupon_rimawari}%</td>
        <td className='px-2'>
          {props.monoprice }
         
        </td>
        <td className='px-2'>{props.sanko_rimawari }%</td>
        <td className='text-xs'>{props.interest_day}</td>
        
        <td className='text-xs'>{props.amount}</td>
        <td className='text-xs'>{props.yen}</td>
        
      </tr>
    </>
  )
}
//     number         
//     issuer         
//     currency       
//     type           
//     rank           
//     call           
//     returnDay      
//     coupon_rimawari
//     monoprice      
//     sanko_rimawari 
//     interest_day   
//     amount         
//     yen            
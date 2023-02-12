import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { format } from 'date-fns-tz'


export default function AfterSimulationPortFolio(props) {
  return (
    <>
      <tr className='font-normal text-sm'>
        <td className='w-14 p-2'>{props.number }</td>
        <td className='w-28 p-2'>{props.issuer}</td>
        <td className='w-12 p-2'>{props.currency}</td>
        <td className='w-16 p-2'>{props.type}</td>
        <td className='w-24 p-2'>{props.rank}</td>
        <td className='w-28 p-2'>{props.call}</td>
        <td className='w-28 p-2'>{props.returnDay}</td>
        <td className='w-28 p-2'>{props.coupon_rimawari}%</td>
        <td className='px-2 p-2'>
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
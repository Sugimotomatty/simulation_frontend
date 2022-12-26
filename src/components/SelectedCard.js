
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function SelectedCard(props) {

  const [data_rimawari, setData_rimawari] = React.useState("利回りを計算する");
  
  // function rimawari_calculate(suuji){
  //   axios.get("http://127.0.0.1:8000/rimawari_quants").then((res) => {
	// 		setData_rimawari(res.data.rimawari);
	// 	});
  //   return data_rimawari

  // }
  const [inputValue, setInputValue] = useState('利回りを計算する')
  const [inputValue2, setInputValue2] = useState('おお')

  useEffect(() => {
    const timer = setTimeout(() => {
     
    }, 500)

    return clearTimeout(timer)
  }, [inputValue,inputValue2])

  
  // const selectors = '#root > main > table > tbody > tr:nth-child(3) > td:nth-child(11) > input'

  // const element = document.querySelector(selectors);



  // console.log(element)

  
  // if (element !== "null"){
  //   if (element){
  //     console.log(element[0].value)
  //     element_value = element[0].value
  //     console.log('頑張れ')

  //   }

  // }


  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.issuer}</td>
        <td>{props.currency}</td>
        <td>{props.type}</td>
        <td>{props.rank}</td>
        <td>{props.call}</td>
        <td>{props.returnDay}</td>
        <td>{props.cp}</td>
        <td className="px-2">
          <input type="number" placeholder="数値を入力してください" className="p-1" ></input>
          {/* onChange={e => setInputValue(rimawari_calculate(e.target.value))} 上の行に入れてる*/}
        </td>
        <td className="text-xs">{props.interestDay}</td>
        <td className="px-2">
          <input type="number" placeholder="数値を入力してください" className="p-1" onChange={e => setInputValue2(e.target.value)}></input>
        </td>
        <td className="text-xs">{data_rimawari}%</td>
      </tr>
    </>
  );
  }

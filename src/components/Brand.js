import React from 'react'
import data from './Data'
import AddModal from './AddModal'
import Alert from './Alert'
import Card from './Card'
import { useNavigate, Navigate } from 'react-router-dom'
//スギモトのimport
import axios from 'axios'

export default function Brand() {
  const [isShow, setIsShow] = React.useState(false)
  const [isAlert, setIsAlert] = React.useState(false)
  const navigate = useNavigate()

  const cards = data.map((item, index) => {
    return (
      <Card
        key={index}
        id={item.id}
        issuer={item.issuer}
        currency={item.currency}
        type={item.type}
        rank={item.rank}
        call={item.call.slice(0,10)}
        returnDay={item.returnDay.slice(0,10)}
        cp={Number(item.cp.slice(0,-1)).toFixed(2)}
        interestDay={item.interestDay}
      />
    )
  })

  function getValues() {
    // const tableElement = document.getElementById("targetTable");
    // const rowElements = tableElement.rows;
    const checks = document.getElementsByClassName('checks')
    let selectedNum = []

    for (let i = 0; i < checks.length; i++) {
      if (checks[i].checked === true) {
        selectedNum.push(parseInt(i) + 1)
        
      }
    }
    // console.log(selectedNum);

    // //以下スギモトが書いた
    // axios.get(`http://127.0.0.1:8000/reset/`)

    let selectNum_str = ''
    for (let i = 0; i < selectedNum.length; i++) {
      selectNum_str += String(selectedNum[i])
      selectNum_str += ','
    }
    selectNum_str = selectNum_str.slice(0, -1)
    console.log(selectNum_str)

    // for (let i =0;i <selectedNum.length;i++){
    axios
      .get(
        `https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/input/${selectNum_str}`,
      )
      .then((res) => {
        // console.log(res);
        // APIがうまく動作していない時のエラー
        if (res.status !== 200) {
          throw new Error('APIがうまく動作していないようです')
        }
      })

    // };

    //ここまでスギモトが書いた
  }

  return (
    <main>
      <div className='flex flex-row-reverse my-8 w-full'></div>
      <div className='flex flex-row-reverse my-8 w-full justify-between'></div>

      <div className='flex justify-between '>
        <button
          onClick={() => {
            navigate('/SelectedBrand')
            getValues()
          }}
          className='bg-orange-400 text-white px-6 py-1 rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition'
        >
          条件入力画面へ
        </button>

        <div className='flex gap-5'>
          <button
            onClick={() => setIsShow(true)}
            className='bg-gray-400 text-white px-6 py-1 rounded hover:bg-deepBlue'
          >
            銘柄追加
          </button>
          <button
            onClick={() => setIsAlert(true)}
            className='bg-gray-400 text-white px-6 py-1 rounded hover:bg-deepBlue'
          >
            銘柄削除
          </button>
        </div>
      </div>

      <table className='my-8 w-full'>
        <thead>
          <tr className='bg-blue-900 text-white border-black border-solid border'>
            <th className='border-black border-solid border'>選択</th>
            <th className='border-black border-solid border'>番号</th>
            <th className='border-black border-solid border'>発行体</th>
            <th className='border-black border-solid border'>通貨</th>
            <th className='border-black border-solid border'>商品種類</th>
            <th className='border-black border-solid border'>債券格付け</th>
            <th className='border-black border-solid border'>ファーストコール</th>
            <th className='border-black border-solid border'>償還日</th>
            <th className='border-black border-solid border'>CP</th>
            <th className='border-black border-solid border'>利払い日</th>
          </tr>
        </thead>
        <tbody id='targetTable'>{cards}</tbody>
      </table>
      <AddModal isShow={isShow} setIsShow={setIsShow} />
      <Alert
        isAlert={isAlert}
        setIsAlert={setIsAlert}
        message='＊本当に削除しますか？＊'
      />
    </main>
  )
}

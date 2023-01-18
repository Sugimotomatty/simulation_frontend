import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import AfterSimulationPortFolio from './afterSimulationPortFolio'
import AfterSimulationRikinTsumitate from './afterSimulationRikinTsumitate'
import Data from './Data.js'
import simulation from '../images/simulation.pdf'
import { useEffect, useState } from 'react'

import { useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'

export default function Simulation() {
  const timestamp = new Date().toLocaleString()

  const navigate = useNavigate()
  const oresengraph4 = `https://lambda-upload-test-0227.s3.ap-northeast-1.amazonaws.com/oresen.jpg?${timestamp}`
  const scatteroresengraph3 = `https://lambda-upload-test-0227.s3.ap-northeast-1.amazonaws.com/scatter_oresen.jpg?${timestamp}`
  const tumitate_bougraph2 = `https://lambda-upload-test-0227.s3.ap-northeast-1.amazonaws.com/tumitate_bou.jpg?${timestamp}`
  const tumitate_wariaigraph5 = `https://lambda-upload-test-0227.s3.ap-northeast-1.amazonaws.com/tumitate_wariai.jpg?${timestamp}`
  const scatterline = `https://lambda-upload-test-0227.s3.ap-northeast-1.amazonaws.com/scatterline.jpg?${timestamp}`
  const [data, setData] = React.useState('')
  const [rikindata,setrikinData] =React.useState('')
  const incheck_array = []
  const url_api = 'https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/api'
  const url_rikin = 'https://script.google.com/macros/s/AKfycbyOV5V7KfkWxIOoJxOLAf_u2pn_befMmpVt786LwHXBPh4VvvSA8sscO9i9HiU-xShq/exec'
  React.useEffect(() => {
    axios.get(url_api).then((res) => {
      if (res.status !== 200) {
        throw new Error('APIがうまく動作していないようです')
      } else {
        setData(res.data)
      }
    })
  }, [])

  React.useEffect(() => {
    axios.get(url_rikin).then((res) => {
      if (res.status !== 200) {
        throw new Error('APIがうまく動作していないようです')
      } else {
        setrikinData(res.data.afterRikin)
      }
    })
  }, [])


  

  const afterSimulationPortFolios = Data.map((item, index) => {
    if (typeof data.message === 'object') {
      for (let i = 0; i < data.message.length; i++) {
        if (index + 1 === data.message[i]) {
          if (incheck_array.includes(data.message[i]) === false) {
            incheck_array.push(data.message[i])
            //ここまで

            return (
              <AfterSimulationPortFolio
                key={index}
                id={item.id}
                issuer={item.issuer}
                currency={item.currency}
                type={item.type}
                rank={item.rank}
                call={item.call}
                returnDay={item.returnDay}
                cp={item.cp}
                interestDay={item.interestDay}
              />
            )
          }

          //ここから下スギモト
        }
      }
    }
    
  })

  if (rikindata.length!=0){
   var afterSimulationRikin = rikindata.map((item, index) => {


       

      return (
        <AfterSimulationRikinTsumitate
       index    = {item.oneyear}
       name     = {item.oneyear}
       oneyear  = {item.oneyear}
       twoyear  = {item.twoyear}
       threeyear= {item.threeyear}
       fouryear = {item.fouryear}
       fiveyear = {item.fiveyear}
       sixyear  = {item.sixyear}
       sevenyear= {item.sevenyear}
       eightyear= {item.eightyear}
       nineyear = {item.nineyear}
       tenyear  = {item.tenyear}
       />
      )
      
    })
  

  }else{var afterSimulationRikin=""}

      


  return (
    <>
      <div className='flex flex-row-reverse my-8 w-full'></div>
      <div className='flex justify-between items-center my-4'>
        <button
          onClick={() => navigate('/SelectedBrand')}
          className='border rounded bg-gray-400 text-white px-6 py-2 mx-4 hover:bg-deepBlue'
        >
          戻る
        </button>
        <a
          href={simulation}
          download='simulation.pdf'
          className='bg-orange-400 text-lg text-white px-8 py-1 mx-4 rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition'
        >
          PDF出力
        </a>
      </div>
      <Tabs>
        <TabList>
          <Tab>キャッシュフローシュミレーション</Tab>
          <Tab>利金積立シュミレーション</Tab>
          <Tab>利金受取金額</Tab>
        </TabList>

        <TabPanel>
          <img
            name='tumitate_bougraph2'
            src={tumitate_bougraph2}
            className='my-12'
            alt='画像の2'
          />
          <img
            name='scatteroresengraph3'
            src={scatteroresengraph3}
            className='my-12'
            alt='画像の3'
          />
        </TabPanel>
        <TabPanel>
          <div>
            <div className='bg-gray-200 px-4 py-2 text-xs'>
              <p>
                ※運用シュミレーションは、税金(20.315%)控除後のデータです(譲渡益税は考慮しておりません)。年1回の福利計算をしています。
              </p>
              <p>
                ※本シュミレーションのいかなる内容も、将来の運用成果を予測し、保証するものではありません。
              </p>
              <p>
                ※情報の正確性には万全を期しておりますが、その内容の正確性、完全性、信頼性を保証するものではありません。本シュミレーション及び記載された情報を利用することで生じるいかなる損害(直接的、間接的を問わず)についても、当社は一切の責任を負うものではありません。実際の資産運用や投資判断に当たっては、必ずご自身の責任において最終的に判断してください。
              </p>
            </div>
            <div className='px-4 my-4 flex flex-col gap-1'>
              <h2 className='text-deepBlue'>積立投資先</h2>
              <div className='flex gap-4'>
                <span className='border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue'>
                  S&P500
                </span>
                <span className='border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue'>
                  ACWI
                </span>
                <span className='border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue'>
                  LowRisk
                </span>
                <span className='border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue'>
                  MiddleRisk
                </span>
                <span className='border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue'>
                  HighRisk
                </span>
                <span className='border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue'>
                  個別指定
                </span>
              </div>
            </div>
            <img name='oresengraph4' src={oresengraph4} alt='画像の4' />
            <img
              name='tumitate_wariaigraph5'
              src={tumitate_wariaigraph5}
              alt='画像の5'
            />
            <img name='scatterline' src={scatterline} alt='画像の6' />
          </div>
        </TabPanel>
        <TabPanel>
          <div className='flex flex-row-reverse '>
            <div className='bg-gray-200 px-4 py-2 text-xs'>
              <p>
                ※運用シュミレーションは、税金(20.315%)控除後のデータです(譲渡益税は考慮しておりません)。年1回の福利計算をしています。
              </p>
              <p>
                ※本シュミレーションのいかなる内容も、将来の運用成果を予測し、保証するものではありません。
              </p>
              <p>
                ※情報の正確性には万全を期しておりますが、その内容の正確性、完全性、信頼性を保証するものではありません。本シュミレーション及び記載された情報を利用することで生じるいかなる損害(直接的、間接的を問わず)についても、当社は一切の責任を負うものではありません。実際の資産運用や投資判断に当たっては、必ずご自身の責任において最終的に判断してください。
              </p>
            </div>
            {/* <img name="stock_img_3" src={StockImg_3} className="my-12" /> */}
          </div>

          <table className='my-8 w-full divide-solid'>
            <thead>
              <tr className='bg-blue-100'>
                <th>参考利回り</th>
                <th
                  rowSpan='2'
                  className='text-red-500 bg-white border border-black'
                >
                  計算結果表示
                </th>
              </tr>
              <tr>
                <th>(加重平均)</th>
              </tr>
              <tr>
                <th rowSpan='2'>番号</th>
                <th rowSpan='2'>発行体</th>
                <th rowSpan='2'>通貨</th>
                <th rowSpan='2'>商品種類</th>
                <th rowSpan='2'>債券格付け</th>
                <th rowSpan='2'>ファーストコール</th>
                <th rowSpan='2'>償還日</th>
                <th rowSpan='2'>クーポン利回り</th>
                <th rowSpan='2'>単価</th>
                <th rowSpan='2'>利払い日</th>
                <th rowSpan='1'>購入数量</th>
                <th rowSpan='1'>購入金額</th>
                <th rowSpan='2'>参考利回り</th>
              </tr>
              <tr>
                <th>(ドル相当額)</th>
                <th>(円相当額)</th>
              </tr>
            </thead>
            <tbody>{afterSimulationPortFolios}</tbody>
          </table>

          <table className='my-8 w-full divide-solid'>
            <thead></thead>
            <tbody>
              <tr>
                <td>数字</td>
                <td>銘柄</td>
                <td>初年度</td>
                <td>2年目</td>
                <td>3年目</td>
                <td>4年目</td>
                <td>5年目</td>
                <td>6年目</td>
                <td>7年目</td>
                <td>8年目</td>
                <td>9年目</td>
                <td>10年目</td>
                
              </tr>
            
              
              {afterSimulationRikin}
            </tbody>
          </table>
        </TabPanel>
      </Tabs>
    </>
  )
}

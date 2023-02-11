import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import AfterSimulationMain from './afterSimulationMain'
import AfterSimulationRikinTsumitate from './afterSimulationRikinTsumitate'
import AfterSimulationRikinCulm from './afterSimulationRikinCulm'
import AfterSimulationRikinSum from './afterSimulationRikinSum'
import Data from './Data.js'
import simulation from '../images/simulation.pdf'
import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
import html2canvas from 'html2canvas';

export default function Simulation() {
  const timestamp = new Date().toLocaleString()

  const navigate = useNavigate()
  const oresengraph4 = `https://lambda-upload-test-0227.s3.ap-northeast-1.amazonaws.com/oresengraph4.jpg?${timestamp}`
  const scatteroresengraph3 = `https://lambda-upload-test-0227.s3.ap-northeast-1.amazonaws.com/scatteroresengraph3.jpg?${timestamp}`
  const tumitate_bougraph2 = `https://lambda-upload-test-0227.s3.ap-northeast-1.amazonaws.com/tumitate_bougraph2.jpg?${timestamp}`
  const tumitate_wariaigraph5 = `https://lambda-upload-test-0227.s3.ap-northeast-1.amazonaws.com/tumitate_wariaigraph5.jpg?${timestamp}`
  const scatterline = `https://lambda-upload-test-0227.s3.ap-northeast-1.amazonaws.com/scatterline.jpg?${timestamp}`
  const simulation_pdf = `https://lambda-upload-test-0227.s3.ap-northeast-1.amazonaws.com/simulation.pdf?${timestamp}`
  const url_input_str = "https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/catchinputstr"
  const [maindata, setmainData] = React.useState('')
  const [rikindata, setrikinData] = React.useState('')
  const [rikinSumdata, setrikinSumData] = React.useState('')
  const [rikinCulmdata, setrikinCulmData] = React.useState('')
  const [seletedNumdata, setseletedNumData] = React.useState('')
  const [doruen,setDoruen] = React.useState('')
  const incheck_array = []
  //https://script.google.com/macros/s/AKfycbzTc5D39cP2pck36w2RGArQjLS0t2WEWYgoscMerQ7NcnITlXAB61S_OV5qL_2Rl0pdsQ/exec
  //https://script.google.com/macros/s/AKfycbz9efLxG7IsQpmvwNCt_OjqnQTOL-LvHZDCGw5KPTYQrzJulnflkRo5vmV2zBxRGf_GvQ/exec
  const url_main =
    'https://script.google.com/macros/s/AKfycbz9efLxG7IsQpmvwNCt_OjqnQTOL-LvHZDCGw5KPTYQrzJulnflkRo5vmV2zBxRGf_GvQ/exec'
  const url_rikin =
    'https://script.google.com/macros/s/AKfycbymDeDmQd7H2Bs7gstahIXu2Faf8Ylf2FNluCexQ-gOGOW6p36ZB_lK8rIw3VTqXMp3/exec'
  const url_rikin_sum = 
  'https://script.google.com/macros/s/AKfycbxKB03z-VCWwgAJsUPpDNSzrKKj90qiNxqfPFA_p_UF3E0FxxopMZLbAZVxleYQ_EmEoQ/exec'  
  const url_rikin_Culm =
    'https://script.google.com/macros/s/AKfycbyaqU_oiTf5FRu5BypsBGs4LHJ7W0Obc6KmkA5g3CTInUTNJLjoRDRhzYv4lFULq5JQsg/exec'
  const url_selected_Num = 'https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/api'
  const url_create_pdf = 'https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/create-pdf'
  

  React.useEffect(() => {
    axios.get(url_main).then((res) => {
      if (res.status !== 200) {
        throw new Error('APIがうまく動作していないようです')
      } else {
        setmainData(res.data.MainData)
      }
    })
  }, [])

  React.useEffect(() => {
    axios.get(url_input_str).then((res) => {
      if (res.status !== 200) {
        throw new Error('APIがうまく動作していないようです')
      } else {
        setDoruen(res.data.message.split(',')[2])
      }
    })
  }, [])

  React.useEffect(() => {
    axios.get(url_create_pdf).then((res) => {
      if (res.status !== 200) {
        throw new Error('APIがうまく動作していないようです')
      } 
    })
  }, [])


  React.useEffect(() => {
    axios.get(url_selected_Num).then((res) => {
      if (res.status !== 200) {
        throw new Error('APIがうまく動作していないようです')
      } else {
        setseletedNumData(res.data.message.length)
        console.log(seletedNumdata)
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


  React.useEffect(() => {
    axios.get(url_rikin_sum).then((res) => {
      if (res.status !== 200) {
        throw new Error('APIがうまく動作していないようです')
      } else {
        setrikinSumData(res.data.afterRikinSum)
      }
    })
  }, [])

  React.useEffect(() => {
    axios.get(url_rikin_Culm).then((res) => {
      if (res.status !== 200) {
        throw new Error('APIがうまく動作していないようです')
      } else {
        setrikinCulmData(res.data.afterRikinCulm)  
      }
    })
  }, [])


  const saveAsImage = uri => {
    const downloadLink = document.createElement("a");
  
    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri;
  
      // ファイル名
      downloadLink.download = "graph.png";
  
      // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
      document.body.appendChild(downloadLink);
  
      // ダウンロードリンクが設定された a タグをクリック
      downloadLink.click();
  
      // Firefox 対策で追加したリンクを削除しておく
      document.body.removeChild(downloadLink);
    } else {
      window.open(uri);
    }
  }



async function htmltoCanvas(){
    let dataURI = ""
    await html2canvas(document.getElementById("capture1")).then(canvas => {
      document.body.appendChild(canvas)
      const dataURL = canvas.toDataURL("img/png");
      // saveAsImage(dataURL)
      // console.log(dataURL)
      dataURI += dataURL
  });

  const url = `https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/send_input_data_uri/${dataURI.slice(22)}`
  await axios.get(url).then((res) => {
    if (res.status !== 200) {
      throw new Error('APIがうまく動作していないようです')
    } else {
      console.log(dataURI)
      console.log("正常に送信されています。")
    }
  })

  }

  if (maindata.length != 0) {
    var afterSimulationmain = maindata.map((item, index) => {

            return (
              <AfterSimulationMain
                number={item.number}
                issuer={item.issuer}
                currency={item.currency}
                type={item.type}
                rank={item.rank}
                call={item.call.slice(0, 10)}
                returnDay={item.returnDay.slice(0, 10)}
                coupon_rimawari={(item.coupon_rimawari*100).toFixed(2)}
                monoprice={item.monoprice}
                sanko_rimawari={(item.sanko_rimawari*100).toFixed(2)}
                interest_day={item.interest_day}
                amount={item.amount.toLocaleString()}
                yen={(item.yen).toFixed(0)}
              />
            )
    })
  }else{var afterSimulationmain = ""}
          

  //ここから下スギモト
       

  if (rikindata.length != 0) {
    var afterSimulationRikin = rikindata.map((item, index) => {
      return (
        <AfterSimulationRikinTsumitate
          name={item.name}
          oneyear={item.oneyear.toLocaleString()}
          twoyear={item.twoyear.toLocaleString()}
          threeyear={item.threeyear.toLocaleString()}
          fouryear={item.fouryear.toLocaleString()}
          fiveyear={item.fiveyear.toLocaleString()}
          sixyear={item.sixyear.toLocaleString()}
          sevenyear={item.sevenyear.toLocaleString()}
          eightyear={item.eightyear.toLocaleString()}
          nineyear={item.nineyear.toLocaleString()}
          tenyear={item.tenyear.toLocaleString()}
          sum = {item.sum.toLocaleString()}
        />
      )
    })
  } else {
    var afterSimulationRikin = ''
  }

  if (rikinCulmdata.length != 0) {
    var afterSimulationRikinCulm = rikinCulmdata.map((item) => {
      return (
       <AfterSimulationRikinCulm 
          name={item.name}
          oneyear={item.oneyear.toLocaleString()}
          twoyear={item.twoyear.toLocaleString()}
          threeyear={item.threeyear.toLocaleString()}
          fouryear={item.fouryear.toLocaleString()}
          fiveyear={item.fiveyear.toLocaleString()}
          sixyear={item.sixyear.toLocaleString()}
          sevenyear={item.sevenyear.toLocaleString()}
          eightyear={item.eightyear.toLocaleString()}
          nineyear={item.nineyear.toLocaleString()}
          tenyear={item.tenyear.toLocaleString()}
          />
      )
    })
  }else{
    var afterSimulationRikinCulm = ''
  }


  if (rikinSumdata.length != 0) {
  var afterSimulationRikinSum = rikinSumdata.map((item) => {
    return (
     <AfterSimulationRikinSum 
        name     ={item.name}
        oneyear  = {item.oneyear.toLocaleString()}
        twoyear  = {item.twoyear.toLocaleString()}
        threeyear= {item.threeyear.toLocaleString()}
        fouryear = {item.fouryear.toLocaleString()}
        fiveyear = {item.fiveyear.toLocaleString()}
        sixyear  = {item.sixyear.toLocaleString()}
        sevenyear= {item.sevenyear.toLocaleString()}
        eightyear= {item.eightyear.toLocaleString()}
        nineyear = {item.nineyear.toLocaleString()}
        tenyear  = {item.tenyear.toLocaleString()}
        sum      = {item.sum.toLocaleString()}
        />
    )
  })
}else{
  var afterSimulationRikinSum = ''
}

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
        <div>
        <a
          href={simulation_pdf}
          download='simulation.pdf'
          className='bg-orange-400 text-lg text-white px-8 py-1 mx-4 rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition'
        >
          PDF出力
        </a>
        <a
          // href={simulation_pdf}
          onClick={()=>htmltoCanvas()}   
          // download='simulation.pdf'
          className='bg-orange-400 text-lg text-white px-8 py-1 mx-4 rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition'
        >
          canvasを作成
        </a>
        </div>
      
      </div>
      <Tabs>
        <TabList>
          <Tab>キャッシュフローシュミレーション</Tab>
          <Tab>利金積立シュミレーション</Tab>
          <Tab>利金受取金額</Tab>
        </TabList>

        <TabPanel>
          <div className='bg-gray-200 px-4 py-2 text-xs'>
              <p>
              ※運用シミュレーションは、税金（20.315%）控除後のデータです（譲渡益税は考慮しておりません）。年一回の福利計算をしています。

              </p>
              <p>
              ※本シミュレーションのいかなる内容も、将来の運用成果を予測し、保証するものではありません。
              </p>
              <p>
              ※情報の正確性には万全を期しておりますが、その内容の正確性、完全性、信頼性等を保証するものではありません。本シミュレーション及び掲載された情報を利用することで生じるいかなる損害（直接的、間接的を問わず）についても、当社は一切の責任を負うものではありません。実際の資産運用や投資判断に当たっては、必ずご自身の責任において最終的に判断してください。
              </p>
            </div>
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
            {/* <img name='scatterline' src={scatterline} alt='画像の6' /> */}
          </div>
        </TabPanel>
        <TabPanel >
         
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
          <div  id="capture1">

          <div className='text-blue-700 font-bold text-1xl'>
              円建:利金シミュレーション（{doruen}円/ドル円換算、税引き前）
            </div>

          <table className='my-8 w-full divide-solid text-xs' id="capture2">
            <thead>
              <tr>
                <th className='bg-blue-900 text-white border-black border-solid border text-sm p-2'>参考利回り</th>
                <th
                  rowSpan='2'
                  className='text-black bg-white border border-black text-sm'
                >
                  {maindata ?  (maindata[0].kaju_average*100).toFixed(3) : ""}%
                  {/* {maindata[0].kaju_average.toFixed(4)*100}% */}
                </th>
              </tr>
              <tr>
                <th className='bg-blue-900 text-white border-black border-solid border text-sm p-2'>(加重平均)</th>
              </tr>
              <tr className='bg-blue-900 text-white border-black border-solid border'>
                <th rowSpan='2' className='border-black border-solid border text-sm p-2'>番号</th>
                <th rowSpan='2' className='border-black border-solid border text-sm p-2'>発行体</th>
                <th rowSpan='2' className='border-black border-solid border text-sm p-2'>通貨</th>
                <th rowSpan='2' className='border-black border-solid border text-sm p-2'>商品種類</th>
                <th rowSpan='2' className='border-black border-solid border text-sm p-2'>債券格付け</th>
                <th rowSpan='2' className='border-black border-solid border text-sm p-2'>ファーストコール</th>
                <th rowSpan='2' className='border-black border-solid border text-sm p-2'>償還日</th>
                <th rowSpan='2' className='border-black border-solid border text-sm p-2'>クーポン利回り</th>
                <th rowSpan='2' className='border-black border-solid border text-sm p-2'>単価</th>
                <th rowSpan='2' className='border-black border-solid border text-sm p-2'>参考利回り</th>
                <th rowSpan='2' className='border-black border-solid border text-sm p-2'>利払い日</th>
                <th rowSpan='1' className='border-black border-solid border text-sm p-2'>購入数量(ドル相当額)</th>
                <th rowSpan='1' className='border-black border-solid border text-sm p-2'>購入金額(円相当額)</th>
               
              </tr>
              
            </thead>
            <tbody>{afterSimulationmain}</tbody>
          </table>

          <table className='my-8 w-full divide-solid'id="capture3">
            <thead></thead>
            <tbody>
              <tr>
                <td rowSpan={seletedNumdata+2} className='bg-blue-900 text-white [writing-mode:vertical-rl] p-3'>
                  収入
                </td>
                <td className='p-3'>銘柄</td>
                <td className='p-3'>初年度</td>
                <td className='p-3'>2年目</td>
                <td className='p-3'>3年目</td>
                <td className='p-3'>4年目</td>
                <td className='p-3'>5年目</td>
                <td className='p-3'>6年目</td>
                <td className='p-3'>7年目</td>
                <td className='p-3'>8年目</td>
                <td className='p-3'>9年目</td>
                <td className='p-3'>10年目</td>
                <td className='p-3'>合計</td>
              </tr>

              {afterSimulationRikin}
              {afterSimulationRikinSum}
              {afterSimulationRikinCulm}
            </tbody>
          </table>
          </div>
        </TabPanel>
      </Tabs>
    </>
  )
}

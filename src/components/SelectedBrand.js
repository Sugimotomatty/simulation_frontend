import React from "react";
import { useNavigate ,Navigate} from "react-router-dom";
import Data from "./Data.js";
import SelectedCard from "./SelectedCard.js";
import Alert from "./Alert";
import SingleBrandModal from "./SingleBrandModal";
import axios from 'axios'




export default function SelectedBrand() {
  const [isShow, setIsShow] = React.useState(false);
  const [isAlert, setIsAlert] = React.useState(false);
  const [isKobetu, setIsKobetu] = React.useState(false);
  const [isHandleDrop, setIsHandleDrop] = React.useState("");
  // ここから下スギモト
  const [data, setData] = React.useState("");
  
  const navigate = useNavigate();

//message
  const incheck_array = [];

  
  
	const url = "https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/api";

  React.useEffect(() => {
    axios.get(url).then((res) => {
      if (res.status !== 200) {
        throw new Error("APIがうまく動作していないようです");
      }else{
        setData(res.data);
      }
			
		});
   
  }, []);

// ここまで

  // const [isActive, setIsActive] = React.useState(true);

  // function showSingleBrandButton() {
  //   if (isHandleDrop === "6") {
  //     setIsActive((prevActive) => prevActive = true);
  //   } else {
  //     setIsActive((prevActive) => prevActive = false);
  //   }
  // }

  function showSingleBrandButton() {
    if (isHandleDrop === "k") {
      setIsShow((prevShow) => (prevShow = true));
    } else {
      
      alert("個別銘柄を選択してください。");
    }
  }

  
 


  let input_str = ""

  function get_input_value(){
    const input_value_tanka_suuryou = document.getElementsByClassName("p-1");
  
    let input_values_obj = []
    
    for (let i=0 ; i<input_value_tanka_suuryou.length ; i++){

      if (input_value_tanka_suuryou[i]){
        input_values_obj.push(input_value_tanka_suuryou[i].value);
      }

    }

    const input_value_ukewatasi_doruen = document.getElementsByClassName("border border-black rounded  mt-2 px-5 py-2");

    let ukewatasi = input_value_ukewatasi_doruen[0].value //受け渡しの日付
    let doruen = input_value_ukewatasi_doruen[1].value //ドル円

    input_str+= ","
    input_str += ukewatasi

    input_str+= ","
    input_str += doruen
 

    for (let i =0;i <input_values_obj.length;i++){
      
      input_str+= ","
      input_str = input_str + String(input_values_obj[i])
    };


    //kobetuを選択したらこれ
    if(isHandleDrop === "k"){
      axios.get("https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/api/kobetu").then((res) => {

        console.log(res.data.kobetu)

        if (res.data.kobetu.length===0){
          setIsAlert(false);
          
          alert('個別選択詳細が未入力です。')
          
        }else{
          input_str+=res.data.kobetu
        console.log(input_str);
  
        axios
        .get(`https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/sendinputstr/${input_str}`)
        .then((res) => {
          // console.log(res);
          // APIがうまく動作していない時のエラー
          if (res.status !== 200) {
            throw new Error("APIがうまく動作していないようです");
          }
        })

        }   
        
    })

    }
   
  
  }


  const selectedCards = Data.map((item, index) => {
    // ここから下スギモト
    if (typeof data.message ==="object"){
      
      for (let i=0;i<data.message.length;i++){
        if (index+1=== data.message[i]) {
         
         
          if (incheck_array.includes( data.message[i])===false){
           

            incheck_array.push( data.message[i]);
           //ここまで
           
   
           return ( 
               <SelectedCard
              
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
            
           );

          }
         

         //ここから下スギモト
         }
     
      }

       
      }
     //ここまでスギモト
    }
    

    
       );
  
      
    
       




  return (
    <>
    <main >

      <div className="flex flex-row-reverse ">
       
        
      </div>
        
        <div className="flex gap-4" >
          <div className="flex flex-col mb-6">

            <label className="mb-2">積み立て投資先</label>
            
           
            <select
              id="pet-select"
              onChange={(e) => {
                setIsHandleDrop(e.target.value);
              }}
              className="rounded border border-black w-52 px-4 py-2"
            >
              <option value="">--選択してください--</option>
              <option value="1">S&P500</option>
              <option value="2">ACWI</option>
              <option value="3">LowRisk</option>
              <option value="4">MiddleRisk</option>
              <option value="5">HighRisk</option>
              <option value="k">個別銘柄</option>
            </select>
          </div>
          <button
            onClick={() => showSingleBrandButton()}
            className={`mt-8 h-10 bg-gray-400 text-white mx-8 px-8 rounded hover:bg-deepBlue`}
          >
            個別選択詳細
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <div>受渡日</div>
            <input
              type="date"
              placeholder="YYYY/MM/DD"
              className="border border-black rounded mr-8 mt-2 px-5 py-2"
            ></input>
          </div>
          <div className="mr-auto">
            <div>為替レート</div>
            <input
              type="number"
              placeholder="円/ドル"
              className="border border-black rounded  mt-2 px-5 py-2"
            ></input>
          </div>
          {/* <button
            onClick={
              () => {
                axios.get(`http://127.0.0.1:8000/reset/`)
                navigate("/Brand")}}
            className="h-10 bg-gray-400 text-white mx-8 px-8 rounded hover:bg-deepBlue"
          >
            戻る
          </button> */}
          <button
            onClick={() =>{

              get_input_value();
              console.log(input_str)
              if(input_str.indexOf(',,')===-1 &&input_str.slice(-1)!==','&&isHandleDrop!==""){
                setIsAlert(true);

                }else{
                
                alert('空欄があるため正常に送信されませんでした。');

              }
             
             
              
              
            }}
            className="h-10 bg-gray-400 text-white px-8 rounded hover:bg-deepBlue"
          >
            シュミレーション
          </button>
        </div>
        <table className="my-8 w-full">
          <thead>
            <tr>
              <th>参考利回り</th>
              <th
                rowSpan="2"
                className="text-red-500 bg-white border border-black"
              >
                計算結果表示
              </th>
            </tr>
            <tr>
              <th>(加重平均)</th>
            </tr>
            <tr>
              <th rowSpan="2">番号</th>
              <th rowSpan="2">発行体</th>
              <th rowSpan="2">通貨</th>
              <th rowSpan="2">商品種類</th>
              <th rowSpan="2">債券格付け</th>
              <th rowSpan="2">ファーストコール</th>
              <th rowSpan="2">償還日</th>
              <th rowSpan="2">クーポン利回り</th>
              <th rowSpan="2">単価</th>
              <th rowSpan="2">利払い日</th>
              <th rowSpan="1">購入数量</th>
              <th rowSpan="2">参考利回り</th>
            </tr>
            <tr>
              <th>(円相当額)</th>
            </tr>
          </thead>
          <tbody >
           
            {selectedCards}
            </tbody>
        </table>
        <SingleBrandModal isShow={isShow} setIsShow={setIsShow}/>
        <Alert
          isAlert={isAlert}
          setIsAlert={setIsAlert}
          message="シュミレーションを行いますか？"
          alert="*結果の出力には15秒ほどかかります*"
        />

      </main>
    </>
  );
}

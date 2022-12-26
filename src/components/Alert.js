import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Alert(props) {
  const navigate = useNavigate();
  const [isClickShow, setIsClickShow] = React.useState(false);
  function simulation_start(){
    axios.get("https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/api").then((res) => {
      console.log(res.data.message)
    }
			
		);
    
    axios
      .get(`https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/simulation`)
      .then((res) => {
        // console.log(res.data.input_str);
        // APIがうまく動作していない時のエラー
        if (res.status !== 200) {
          throw new Error("APIがうまく動作していないようです");
        }
      })
  }


  if (props.isAlert) {
    return (
      <>
        <div onClick={() => props.isAlert(false)} className="overlay">
          <div onClick={(e) => e.stopPropagation()} className="content rounded-3xl flex flex-col justify-center gap-9 px-28">
            <h1 className="text-2xl flex justify-center text-red-600 mb-12">{props.message}</h1>
            <h2 className="text-xl flex justify-center mb-4">{props.alert}</h2>
            <div className="flex justify-around">
            {isClickShow ? <p className="bg-gray-400 text-white px-16 py-1 rounded-3xl ">15秒お待ちください</p>:
            <>
              <button onClick={() => props.setIsAlert(false)}
              className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue"
              >戻る</button>
              
              <button 
              onClick=
              {()=>{
                setIsClickShow(true);
                simulation_start();
                setTimeout(function(){navigate("/Simulation")},15*1000);
                }
              } className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue">実行</button>
            </>}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
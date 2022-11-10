import React from "react";
import { useNavigate } from "react-router-dom";

export default function Alert(props) {
  const navigate = useNavigate();
  if (props.isAlert) {
    return (
      <>
        <div onClick={() => props.isAlert(false)} className="overlay">
          <div onClick={(e) => e.stopPropagation()} className="content rounded-3xl flex flex-col justify-center gap-9 px-28">
            <h1 className="text-2xl flex justify-center text-red-600 mb-12">{props.message}</h1>
            <h2 className="text-xl flex justify-center mb-4">{props.alert}</h2>
            <div className="flex justify-around">
              <button onClick={() => props.setIsAlert(false)}
              className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue"
              >戻る</button>
              <button 
              onClick={()=>
              {navigate("/Simulation");
              }} className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue">実行</button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
import React from "react";

export default function Alert(props) {
  if (props.isAlert) {
    return (
      <>
        <div onClick={() => props.isAlert(false)} className="overlay">
          <div onClick={(e) => e.stopPropagation()} className="content rounded-3xl flex flex-col justify-center gap-9 px-28">
            <h1 className="text-2xl text-red-600 flex justify-center mb-16">＊本当に削除しますか？＊</h1>
            <div className="flex justify-around">
              <button onClick={() => props.setIsAlert(false)}
              className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue"
              >戻る</button>
              <button className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue">実行</button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
import React from "react";

export default function Modal(props) {
  if (props.isShow) {
    return (
      <>
        <div onClick={() => props.setIsShow(false)} className="overlay">
          <div onClick={(e) => e.stopPropagation()} className="content rounded-3xl flex flex-col justify-center gap-9 px-28">
            <div className="flex gap-6">
              <span>発行体</span>
              <span>
                <input type="text" className="rounded border border-black"></input>
              </span>
            </div>
            <div className="flex gap-6">
              <span>商品種類</span>
              <span>
                <input type="text" className="rounded border border-black"></input>
              </span>
              <span>格付け</span>
              <span>
                <input type="text" className="rounded border border-black"></input>
              </span>
            </div>
            <div className="flex gap-6">
              <span>ファーストコール</span>
              <span>
                <input type="text" className="rounded border border-black"></input>
              </span>
              <span>償還日</span>
              <span>
                <input type="text" className="rounded border border-black"></input>
              </span>
            </div>
            <div className="flex gap-6">
              <span>クーポン</span>
              <span>
                <input type="text" className="rounded border border-black"></input>
              </span>
            </div>
            <div className="flex gap-6">
              <span>利払い日</span>
              <span>
                <input type="text" className="rounded border border-black"></input>
              </span>
              <span>
                <input type="text" className="rounded border border-black"></input>
              </span>
            </div>
            <div className="flex justify-around">
              <button onClick={() => props.setIsShow(false)}
              className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue"
              >戻る</button>
              <button className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue">登録</button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

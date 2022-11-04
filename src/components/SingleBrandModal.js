import React from "react";

export default function Modal(props) {
  if (props.isShow) {
    return (
      <>
        <div onClick={() => props.setIsShow(false)} className="overlay">
          <div
            onClick={(e) => e.stopPropagation()}
            className="content rounded-3xl flex flex-col justify-center gap-7 px-28"
          >
            <div className="flex gap-6">
              <span>equity</span>
              <span>
                <input
                  type="number"
                  placeholder="数値(%)で入力"
                  className="px-4 py-1 rounded border border-black"
                ></input>
              </span>
            </div>
            <div className="flex gap-6">
              <span>bond</span>
              <span>
                <input
                  type="number"
                  placeholder="数値(%)で入力"
                  className="px-4 py-1 rounded border border-black"
                ></input>
              </span>
            </div>
            <div className="flex gap-6">
              <span>Alts&cash</span>
              <span>
                <input
                  type="number"
                  placeholder="数値(%)で入力"
                  className="px-4 py-1 rounded border border-black"
                ></input>
              </span>
            </div>
            <div className="flex gap-6">
              <span>期待リターン</span>
              <span>
                <input
                  type="text"
                  className="px-2 py-1 rounded border border-black"
                ></input>
              </span>
              <span>想定リスク</span>
              <span>
                <input
                  type="text"
                  className="px-2 py-1 rounded border border-black"
                ></input>
              </span>
            </div>
            <div className="flex justify-around">
              <button
                onClick={() => props.setIsShow(false)}
                className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue"
              >
                戻る
              </button>
              <button className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue">
                登録
              </button>
            </div>
            <div>
              <p className="flex justify-center text-red-600">
                *個別銘柄を選んでいないときは空欄のままにしておいて下さい*
              </p>
              <p className="flex justify-center text-red-600">
                *登録を押すと変更はできません(確認はできます)*
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

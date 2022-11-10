import React from "react";
import Data from "./Data";

export default function Modal(props) {
  const [addData, setAddData] = React.useState({
    id: `${Data.length + 1}`,
    issuer: "",
    type: "",
    rank: "",
    call: "",
    returnDay: "",
    cp: "",
    interestDay: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData({
      ...addData,
      [name]: value,
    });
  };
  const submit = () => {
    Data.push(addData);
    alert("正常に送信されました！");
  };
  if (props.isShow) {
    return (
      <>
        <div onClick={() => props.setIsShow(false)} className="overlay">
          <div
            onClick={(e) => e.stopPropagation()}
            className="content rounded-3xl flex flex-col justify-center gap-9 px-28"
          >
            <div className="flex gap-6">
              <span>発行体</span>
              <span>
                <input
                  name="issuer"
                  type="text"
                  className="rounded border border-black px-2"
                  onChange={handleChange}
                  value={addData.issuer}
                ></input>
              </span>
            </div>
            <div className="flex gap-6">
              <span>商品種類</span>
              <span>
                <input
                  name="type"
                  type="text"
                  className="rounded border border-black px-2"
                  onChange={handleChange}
                  value={addData.type}
                ></input>
              </span>
              <span>格付け</span>
              <span>
                <input
                  name="rank"
                  type="text"
                  className="rounded border border-black px-2"
                  onChange={handleChange}
                  value={addData.rank}
                ></input>
              </span>
            </div>
            <div className="flex gap-6">
              <span>ファーストコール</span>
              <span>
                <input
                  name="call"
                  type="text"
                  className="rounded border border-black px-2"
                  onChange={handleChange}
                  value={addData.call}
                ></input>
              </span>
              <span>償還日</span>
              <span>
                <input
                  name="returnDay"
                  type="text"
                  className="rounded border border-black px-2"
                  onChange={handleChange}
                  value={addData.returnDay}
                ></input>
              </span>
            </div>
            <div className="flex gap-6">
              <span>クーポン</span>
              <span>
                <input
                  name="cp"
                  type="text"
                  className="rounded border border-black px-2"
                  onChange={handleChange}
                  value={addData.cp}
                ></input>
              </span>
            </div>
            <div className="flex gap-6">
              <span>利払い日</span>
              <span>
                <input
                  name="interestDay"
                  type="text"
                  className="rounded border border-black px-2"
                  onChange={handleChange}
                  value={addData.interestDay}
                ></input>
              </span>
              {/* <span>
                <input
                  type="text"
                  className="rounded border border-black"
                ></input>
              </span> */}
            </div>
            <div className="flex justify-around">
              <button
                onClick={() => props.setIsShow(false)}
                className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue"
              >
                戻る
              </button>
              <button className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue"
              onClick={submit}>
                登録
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
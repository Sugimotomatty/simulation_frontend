import React from "react";
import { useNavigate } from "react-router-dom";
import CheckedData from "./SelectedData.js";
import SelectedCard from "./SelectedCard.js";
import Alert from "./Alert";
import SingleBrandModal from "./SingleBrandModal";

export default function SelectedBrand() {
  const navigate = useNavigate();
  const [isShow, setIsShow] = React.useState(false);
  const [isAlert, setIsAlert] = React.useState(false);
  const [isHandleDrop, setIsHandleDrop] = React.useState("");
  // const [isActive, setIsActive] = React.useState(true);

  // function showSingleBrandButton() {
  //   if (isHandleDrop === "6") {
  //     setIsActive((prevActive) => prevActive = true);
  //   } else {
  //     setIsActive((prevActive) => prevActive = false);
  //   }
  // }

  function showFunc() {
    console.log(isHandleDrop);
  }

  const selectedCards = CheckedData.map((item, index) => {
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
  });
  return (
    <>
      <main>
        <div className="flex gap-4">
          <div className="flex flex-col mb-6">
            <label className="mb-2">積み立て投資先</label>
            <select
              id="pet-select"
              onChange={(e) => {
                setIsHandleDrop(e.target.value);
                // showSingleBrandButton();
              }}
              className="rounded border border-black w-52 px-4 py-2"
            >
              <option value="">--選択してください--</option>
              <option value="1">S&P500</option>
              <option value="2">ACWI</option>
              <option value="3">LowRisk</option>
              <option value="4">MiddleRisk</option>
              <option value="5">HighRisk</option>
              <option value="">個別銘柄</option>
            </select>
          </div>
          <button
            onClick={() => setIsShow(true)}
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
          <button
            onClick={() => navigate("/Brand")}
            className="h-10 bg-gray-400 text-white mx-8 px-8 rounded hover:bg-deepBlue"
          >
            戻る
          </button>
          <button
            onClick={() => {
              setIsAlert(true);
              showFunc();
              navigate("/Simulation");
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
          <tbody>{selectedCards}</tbody>
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

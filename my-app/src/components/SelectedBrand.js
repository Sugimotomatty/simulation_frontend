import React from "react";
import { useNavigate } from "react-router-dom";
import CheckedData from "./CheckedData.js"

export default function SelectedBrand() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className="flex justify-between items-center">
          <div className="">
            <div>受渡日</div>
            <input
              type="text"
              placeholder="YYYY/MM/DD"
              className="border border-black rounded mr-8 mt-2 px-5 py-2"
            ></input>
          </div>
          <div className="mr-auto">
            <div>為替レート</div>
            <input
              type="text"
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
          <button className="h-10 bg-gray-400 text-white px-8 rounded hover:bg-deepBlue">
            シュミレーション
          </button>
        </div>
        <table className="my-8 w-full">
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
            <th rowSpan="2">参考利回り</th>
            <th rowSpan="2">利払い日</th>
            <th>購入数量</th>
          </tr>
          <tr>
            <th>(円相当額)</th>
          </tr>
        </table>
      </main>
    </>
  );
}

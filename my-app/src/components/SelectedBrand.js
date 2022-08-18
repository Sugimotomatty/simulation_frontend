import React from "react";

export default function SelectedBrand() {
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
          <button className="h-10 bg-gray-400 text-white px-8 rounded hover:bg-deepBlue">
            シュミレーション
          </button>
        </div>
        <table className="my-8 w-full">
          <tr>
            <th>参考利回り</th>
            <th rowspan="2" className="text-red-500 bg-white border border-black">計算結果表示</th>
          </tr>
          <tr>
            <th>(加重平均)</th>
          </tr>
          <tr>
            <th rowspan="2">番号</th>
            <th rowspan="2">発行体</th>
            <th rowspan="2">通貨</th>
            <th rowspan="2">商品種類</th>
            <th rowspan="2">債券格付け</th>
            <th rowspan="2">ファーストコール</th>
            <th rowspan="2">償還日</th>
            <th rowspan="2">クーポン利回り</th>
            <th rowspan="2">単価</th>
            <th rowspan="2">参考利回り</th>
            <th rowspan="2">利払い日</th>
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

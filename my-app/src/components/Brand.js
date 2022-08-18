import React from "react";
import Card from "./Card";
import data from "./Data";
import Modal from "./Modal";

export default function Brand() {
  const [isShow, setIsShow] = React.useState(false);

  const cards = data.map((item, index) => {
    return (
      <Card
        key={index}
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
    <main>
      <div className="flex justify-between">
        <button className="bg-orange-400 text-white px-6 py-1 rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition">
          条件入力画面へ
        </button>
        <div className="flex gap-5">
          <button
            onClick={() => setIsShow(true)}
            className="bg-gray-400 text-white px-6 py-1 rounded hover:bg-deepBlue"
          >
            銘柄追加
          </button>
          <button className="bg-gray-400 text-white px-6 py-1 rounded hover:bg-deepBlue">
            銘柄削除
          </button>
        </div>
      </div>
      <table className="my-8 w-full">
        <tr>
          <th>選択</th>
          <th>発行体</th>
          <th>通貨</th>
          <th>商品種類</th>
          <th>債券格付け</th>
          <th>ファーストコール</th>
          <th>償還日</th>
          <th>CP</th>
          <th>利払い日</th>
        </tr>
        {cards}
      </table>
      <Modal 
        isShow = {isShow}
        setIsShow = {setIsShow}
      />
    </main>
  );
}

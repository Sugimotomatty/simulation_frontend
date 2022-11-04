import React from "react";
import data from "./Data";
import Modal from "./AddModal";
import Alert from "./Alert";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

export default function Brand() {
  const [isShow, setIsShow] = React.useState(false);
  const [isAlert, setIsAlert] = React.useState(false);
  const navigate = useNavigate();

  const cards = data.map((item, index) => {
    return (
      <Card
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

  function getValues() {
    // const tableElement = document.getElementById("targetTable");
    // const rowElements = tableElement.rows;
    const checks = document.getElementsByClassName("checks");
    let selectedNum = [];

    for (let i = 0; i < checks.length; i++) {
      if (checks[i].checked === true) {
        selectedNum.push(parseInt(i) + 1);
        // newData["issuer"] = rowElements[i].cells[2]
        // newData["currency"] = rowElements[i].cells[3]
        // newData["type"] = rowElements[i].cells[4]
        // newData["rank"] = rowElements[i].cells[5]
        // newData["call"] = rowElements[i].cells[6]
        // newData["returnDay"] = rowElements[i].cells[7]
        // newData["cp"] = rowElements[i].cells[8]
        // newData["interestDay"] = rowElements[i].cells[9]
        // selectedData.push(newData);
      }
    }
    console.log(selectedNum);
  }

  return (
    <main>
      <div className="flex justify-between">
        <button
          onClick={() => {
            navigate("/SelectedBrand");
            getValues();
          }}
          className="bg-orange-400 text-white px-6 py-1 rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition"
        >
          条件入力画面へ
        </button>

        <div className="flex gap-5">
          <button
            onClick={() => setIsShow(true)}
            className="bg-gray-400 text-white px-6 py-1 rounded hover:bg-deepBlue"
          >
            銘柄追加
          </button>
          <button
            onClick={() => setIsAlert(true)}
            className="bg-gray-400 text-white px-6 py-1 rounded hover:bg-deepBlue"
          >
            銘柄削除
          </button>
        </div>
      </div>
      <table className="my-8 w-full">
        <thead>
          <tr>
            <th>選択</th>
            <th>番号</th>
            <th>発行体</th>
            <th>通貨</th>
            <th>商品種類</th>
            <th>債券格付け</th>
            <th>ファーストコール</th>
            <th>償還日</th>
            <th>CP</th>
            <th>利払い日</th>
          </tr>
        </thead>
        <tbody id="targetTable">{cards}</tbody>
      </table>
      <Modal isShow={isShow} setIsShow={setIsShow} />
      <Alert
        isAlert={isAlert}
        setIsAlert={setIsAlert}
        message="＊本当に削除しますか？＊"
      />
    </main>
  );
}

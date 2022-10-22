import React from "react";

export default function SelectedCard(props) {
  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.issuer}</td>
        <td>{props.currency}</td>
        <td>{props.type}</td>
        <td>{props.rank}</td>
        <td>{props.call}</td>
        <td>{props.returnDay}</td>
        <td>{props.cp}</td>
        <td className="px-2">
          <input type="number" placeholder="数値を入力してください" className="p-1"></input>
        </td>
        <td className="text-xs">{props.interestDay}</td>
        <td className="px-2">
          <input type="number" placeholder="数値を入力してください" className="p-1"></input>
        </td>
        <td className="text-xs">計算結果を表示</td>
      </tr>
    </>
  );
}

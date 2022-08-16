import React from "react";

export default function Card(props) {
  return (
    <>
      <tr>
        <td className="bg-gray-400">
          <input type="checkbox"></input>
        </td>
        <td>{props.issuer}</td>
        <td>{props.currency}</td>
        <td>{props.type}</td>
        <td>{props.rank}</td>
        <td>{props.call}</td>
        <td>{props.returnDay}</td>
        <td>{props.cp}</td>
        <td>{props.interestDay}</td>
      </tr>
    </>
  );
}

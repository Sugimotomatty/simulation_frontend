import React from "react";

export default function Card(props) {
  // const [isChecked, setIsChecked] = React.useState(false);
  // function handleClick() {
  //   setIsChecked((prevIsChecked) => {
  //     return prevIsChecked ? false : true;
  //   });
  //   console.log(isChecked);
  // }
  return (
    <>
      <tr>
        <td className="bg-gray-400">
          <input
            type="checkbox"
            className="checks"
            value="aaaa"
            // checked={isChecked}
            // onChange={handleClick}
          ></input>
        </td>
        <td>{props.id}</td>
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

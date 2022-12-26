import React from "react";
import axios from 'axios'

export default function Modal(props) {
  const [formData, setFormData] = React.useState({
    equity: "",
    bond: "",
    altsCash: "",
    return: "",
    risk: "",
  });



const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let input_str_kobetu = ""

  const submit = () => {
    if (formData.equity === "" || formData.bond === "" || formData.altsCash === "" || formData.return === "" || formData.risk === "") {
      alert("空欄があるため正常に送信されませんでした。")
    } else {
      for (let i=0 ; i<Object.keys(formData).length ; i++){
        input_str_kobetu+=","
        input_str_kobetu+=Object.values(formData)[i]
      }
      console.log(input_str_kobetu)

     
      axios
      .get(`https://765rrgmzf2.execute-api.ap-northeast-1.amazonaws.com/kobetu/${input_str_kobetu}`)
      .then((res) => {
        // console.log(res);
        // APIがうまく動作していない時のエラー
        if (res.status !== 200) {
          throw new Error("APIがうまく動作していないようです");
        }
      })
      alert("正常に送信されました。")
      props.setIsShow(false);
      
    }
  };

  if (props.isShow) {
    return (
      <>
        <div onClick={() => props.setIsShow(false)} className="overlay">
          <div
            onClick={(e) => e.stopPropagation()}
            className="content rounded-3xl flex flex-col justify-center gap-12 px-28"
          >
            <div className="flex gap-6 items-center">
              <span>equity</span>
              <span>
                <input
                  name="equity"
                  type="number"
                  placeholder="数値(%)で入力"
                  className="px-4 py-1 rounded border border-black"
                  onChange={handleChange}
                  value={formData.equity}
                ></input>
              </span>
            </div>
            <div className="flex gap-6 items-center">
              <span>bond</span>
              <span>
                <input
                  name="bond"
                  type="number"
                  placeholder="数値(%)で入力"
                  className="px-4 py-1 rounded border border-black"
                  onChange={handleChange}
                  value={formData.bond}
                ></input>
              </span>
            </div>
            <div className="flex gap-6 items-center">
              <span>Alts&cash</span>
              <span>
                <input
                  name="altsCash"
                  type="number"
                  placeholder="数値(%)で入力"
                  className="px-4 py-1 rounded border border-black"
                  onChange={handleChange}
                  value={formData.altsCash}
                ></input>
              </span>
            </div>
            <div className="flex gap-6 items-center">
              <span>期待リターン</span>
              <span>
                <input
                  name="return"
                  type="text"
                  className="px-2 py-1 rounded border border-black"
                  onChange={handleChange}
                  value={formData.return}
                ></input>
              </span>
              <span>想定リスク</span>
              <span>
                <input
                  name="risk"
                  type="text"
                  className="px-2 py-1 rounded border border-black"
                  onChange={handleChange}
                  value={formData.risk}
                ></input>
              </span>
            </div>
            <div className="flex justify-around items-center">
              <button
                onClick={() => 
                  props.setIsShow(false)
                }
                className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue"
              >
                戻る
              </button>
              <button
                className="bg-gray-400 text-white px-16 py-1 rounded-3xl hover:bg-deepBlue"
                onClick={submit}
              >
                送信
              </button>
            </div>
            {/* <div>
              <p className="flex justify-center text-red-600">
                *個別銘柄を選んでいないときは空欄のままにしておいて下さい*
              </p>
            </div> */}
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
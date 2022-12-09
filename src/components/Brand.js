import React from "react";
import data from "./Data";
import AddModal from "./AddModal";
import Alert from "./Alert";
import Card from "./Card";
import { useNavigate , Navigate} from "react-router-dom";
//スギモトのimport 
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';
import { auth } from '../firebase';


export default function Brand() {
  const [isShow, setIsShow] = React.useState(false);
  const [isAlert, setIsAlert] = React.useState(false);
  const navigate = useNavigate();

  
  const { user } = useAuthContext();
  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };


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
    // console.log(selectedNum);


    //以下スギモトが書いた
    axios.get(`http://127.0.0.1:8000/reset/`)
    

      for (let i =0;i <selectedNum.length;i++){
        axios
      .get(`http://127.0.0.1:8000/test/${selectedNum[i]}`)
      .then((res) => {
        // console.log(res);
        // APIがうまく動作していない時のエラー
        if (res.status !== 200) {
          throw new Error("APIがうまく動作していないようです");
        }
      })
  
      };

    
    //ここまでスギモトが書いた
  
  }


  if (!user) {
    return <Navigate to="/" />;
    
  }else{
    console.log(user.email);

  return (
    <main>
       <div className="flex flex-row-reverse my-8 w-full">
          <p className="text-2xl">こんにちは{user.email}さん</p>
        </div>
       <div className="flex flex-row-reverse my-8 w-full justify-between">
          <button onClick={handleLogout} className="bg-gray-400 text-white  px-6 py-1 rounded hover:bg-deepBlue">ログアウト</button>

          { user.email === "contact@japan-am.info" ?<button
                onClick={() => navigate("/SignUp")}
                className="bg-gray-600 bg-opacity-50 text-white px-10 py-1 rounded hover:bg-deepBlue"
               
              >  
                sign up
              </button> : <p></p> }

          
        </div>
        
        <div className="flex justify-between ">
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
      <AddModal isShow={isShow} setIsShow={setIsShow} />
      <Alert
        isAlert={isAlert}
        setIsAlert={setIsAlert}
        message="＊本当に削除しますか？＊"
      />
    </main>
  );
}
}
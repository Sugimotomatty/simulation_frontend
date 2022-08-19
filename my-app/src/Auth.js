import React, { useState } from "react";
// import { auth } from "./firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const Register = (event) => {
  //   event.preventDefault();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //       navigate("/Brand"); // 登録成功後のリダイレクトページを設定してください。
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       console.error(error);
  //     });
  // };

  // const handleChangeEmail = (event) => {
  //   setEmail(event.currentTarget.value);
  // };
  // const handleChangePassword = (event) => {
  //   setPassword(event.currentTarget.value);
  // };

  return (
    <>
        <div className="flex justify-center">
          <form className="flex justify-center flex-col gap-3 max-w-xs">
            <p>メールアドレス</p>
            <input
              type="text"
              placeholder="user@example.com"
              name="email"
              label="E-mail"
              value={email}
              // onChange={(event) => {
              //   handleChangeEmail(event);
              // }}
              className="border-indigo-900 border-2 rounded px-4 py-2"
            ></input>
            <p>パスワード</p>
            <input
              type="password"
              label="Password"
              value={password}
              // onChange={(event) => {
              //   handleChangePassword(event);
              // }}
              className="border-indigo-900 border-2 rounded px-4 py-2"
            ></input>
            <div className="flex justify-between my-5 gap-4">
              <button
                // onClick={Register}
                onClick={() => navigate("/Brand")}
                className="bg-gray-600 bg-opacity-50 text-white px-10 py-1 rounded hover:bg-deepBlue"
              >
                sign up
              </button>
              <button 
              onClick={() => navigate("/Brand")}
              className="bg-gray-600 bg-opacity-50 text-white px-10 py-1 rounded hover:bg-deepBlue">
                login
              </button>
            </div>
          </form>
        </div>
    </>
  );
}

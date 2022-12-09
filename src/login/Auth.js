import React, { useState } from "react";
import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate,Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from '../context/AuthContext';

const Auth=()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth,email, password);
    navigate("/Brand")
  // const loginWithEmailHandler=()=> {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user.email, user.displayName);
  //       // navigate("/Brand");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  }

  const user = useAuthContext()
 
   
  
  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };



// if (user) {
//     return <Navigate to="/Brand" />;
    
//   }else{


  return (
    
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="flex justify-center flex-col gap-3 max-w-xs">
            <p>メールアドレス</p>
            <input
             onChange={(event) => handleChangeEmail(event)}
              type="text"
              placeholder="user@example.com"
              name="email"
              label="E-mail"
              // value={email}
              // onChange={(event) => {
              //   handleChangeEmail(event);
              // }}
              className="border-indigo-900 border-2 rounded px-4 py-2"
            />
            <p>パスワード</p>
            <input
             onChange={(event) => handleChangePassword(event)}
              type="password"
              label="Password"
              // value={password}
              // onChange={(event) => {
              //   handleChangePassword(event);
              // }}
              className="border-indigo-900 border-2 rounded px-4 py-2"
            />
            <div className="flex justify-between my-5 gap-4">
              
              <button 
              // onClick={() => navigate("/Brand")}
              className="bg-gray-600 bg-opacity-50 text-white px-10 py-1 rounded hover:bg-deepBlue">
                login
              </button>

             
            </div>
          </form>
        </div>
    
  );
}
// }

export default Auth;
import { useRef } from 'react';
import { useNavigate,Navigate } from "react-router-dom";
import {useState} from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from '../context/AuthContext';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useAuthContext();
  
  const handleSubmit = (event) => {
   
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);
    if(password.value.length >5){
      createUserWithEmailAndPassword(auth,email.value, password.value);

    }
    else if (password.value.length <5){
      alert('パスワードは6文字以上にしてください。')
    }
    else{
      alert('既にこのアカウントは存在しています。')
    }


  };

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  
  const navigate = useNavigate();





if (user.email !== "contact@japan-am.info") {
    return <Navigate to="/" />;
    
  }else{


  return (
    <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="flex justify-center flex-col gap-3 max-w-xs">
            <p>メールアドレス</p>
          <input onChange={(event) => handleChangeEmail(event)} name="email" type="email" placeholder="email"  className="border-indigo-900 border-2 rounded px-4 py-2" />
       
        <div>
            <p>パスワード</p>
          <input
            onChange={(event) => handleChangePassword(event)}
            name="password"
            type="password"
            placeholder="password"
            className="border-indigo-900 border-2 rounded px-4 py-2"
            
            
          />
        </div>
        <div className="flex justify-between my-5 gap-4">
          <button className="bg-gray-600 bg-opacity-50 text-white px-10 py-1 rounded hover:bg-deepBlue">
            登録
          </button>

          <button 
              onClick={() => navigate("/")}
              className="bg-gray-600 bg-opacity-50 text-white px-10 py-1 rounded hover:bg-deepBlue">
                戻る
              </button>
        </div>
      </form>
    </div>
  );
};
}

export default SignUp;
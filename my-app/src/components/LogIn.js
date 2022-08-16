import React from "react";

export default function LogIn() {
  return (
    <div className="flex justify-center">
      <form className="flex justify-center flex-col gap-3 max-w-xs">
        <p>メールアドレス</p>
        <input
          type="text"
          placeholder="user@example.com"
          className="border-indigo-900 border-2 rounded px-4 py-2"
        ></input>
        <p>パスワード</p>
        <input
          type="text"
          className="border-indigo-900 border-2 rounded px-4 py-2"
        ></input>
        <div className="flex justify-between my-5 gap-4">
          <button className="bg-gray-600 bg-opacity-50 text-white px-10 py-1 rounded">
            sign up
          </button>
          <button className="bg-gray-600 bg-opacity-50 text-white px-10 py-1 rounded">
            login
          </button>
        </div>
      </form>
    </div>
  );
}

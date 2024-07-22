// import { useState } from 'react';
// import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda';

// import { fetchAuthSession } from 'aws-amplify/auth';
// import outputs from "../amplify_outputs.json";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from './Routes';

import './App.css';

function App() {
  const navigate = useNavigate()

  const handleUser = () => {
    navigate('/user')
  }
  const handleProduct = () => {
    navigate('/productMenu')
  }
  const handleSignin = () => {
    navigate('/signin')
  }
  
  return (
    <div className="flex flex-col h-screen">
        <div className="text-2xl font-bold bg-green-500 text-white text-center p-2">
            <h1 className="bg-teal-200">ヘッド領域</h1>
            <div className="flex justify-center items-center gap-4 w-100 h-20">
              <div className="border border-blue-400">
                <button onClick={handleUser}>ユーザー画面へ</button>
              </div>
              <div className="border border-blue-400">
                <button onClick={handleSignin}>login画面へ</button>
              </div>
              <div className="border border-blue-400">
                <button onClick={handleProduct}>商品画面へ</button>
              </div>
            </div>
        </div>
        <div className="mx-auto my-3 w-9/12 bg-white border border-green-600 border-2 text-center p-2">
          <AppRoutes />
        </div>
        <div className="bg-green-500 text-white text-center p-2 mt-auto">
            フッター
        </div>
    </div>
)}

export default App

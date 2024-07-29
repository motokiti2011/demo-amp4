import { useState } from 'react';
// import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda';

// import { fetchAuthSession } from 'aws-amplify/auth';
// import outputs from "../amplify_outputs.json";
import { Authenticator } from '@aws-amplify/ui-react';
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from './Routes';

import './App.css';

function App() {
  const navigate = useNavigate()

  /**
   * 画面遷移
   */
  const handleUser = () => {
    navigate('/user')
  }
  const handleProduct = () => {
    navigate('/productMenu')
  }
  // const handleSignin = () => {
  //   navigate('/signin')
  // }


  const [modal, setModal] = useState(false);

  const openModal = () => {
      setModal(true);
  };
  const closeModal = () => {
      setModal(false);
  };



  
  return (
    <div className="flex flex-col h-screen">

        <div className="text-2xl font-bold bg-green-500 text-white text-center p-2">
            <h1 className="bg-teal-200">ヘッド領域</h1>
            <div className="flex justify-center items-center gap-4 w-100 h-20">
              <div className="border border-blue-400">
                <button onClick={handleUser}>ユーザー画面へ</button>
              </div>
              <div className="border border-blue-400">
                <button onClick={handleProduct}>商品画面へ</button>
              </div>

              <div className="border border-blue-400">
                <button onClick={openModal}>login画面へ</button>
                
                <Modal isOpen={modal}>
                  <div className="aspect-square w-100 bg-white">
                      <button onClick={closeModal}>閉じこ</button>

                      <Authenticator>
                      {({ signOut, user }) => (
                      <>
                      <div>
                          <h1>Hello {user?.username}</h1>
                          <button onClick={signOut}>Sign out</button>
                          {/* <Component {...pageProps} /> */}
                      </div>
                      </>
                      )}
                      </Authenticator>
                  </div>
              </Modal>

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

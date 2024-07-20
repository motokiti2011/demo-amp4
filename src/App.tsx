import { useState } from 'react';
import './App.css';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';


import { useNavigate } from "react-router-dom";

// import { Authenticator } from '@aws-amplify/ui-react';
import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda';

import { fetchAuthSession } from 'aws-amplify/auth';
import outputs from "../amplify_outputs.json";

function App() {
  // const [count, setCount] = useState(0)
  const [text, setText] = useState("")



async function invokeHelloWorld() {
  
  const { credentials } = await fetchAuthSession()
  const awsRegion = outputs.auth.aws_region
  const functionName = outputs.custom.helloWorldFunctionName

  const labmda = new LambdaClient({ credentials: credentials, region: awsRegion })
  const command = new InvokeCommand({
    FunctionName: functionName,
  });
  const apiResponse = await labmda.send(command);
  if (apiResponse.Payload) {
  const payload = JSON.parse(new TextDecoder().decode(apiResponse.Payload))
    setText(payload.message)
  }
}

  const navigate = useNavigate()
  const handleUser = () => {
    navigate('/user')
  }
  const handleProductMenu = () => {
    navigate('/productMenu')
  }
  const handleSignin = () => {
    navigate('/signin')
  }

  
  /* <div>
    <button onClick={handleUser}>ユーザー画面へ</button>
    <br />
    <button onClick={handleProductMenu}>商品メニュー画面へ</button>
  </div> */

  return (
    <div>
      <h1 className="bg-teal-400">Vite + React</h1>
      <div>
        <h1>test</h1>
        <button onClick={handleUser}>ユーザー画面へ</button>
        <br />
        <button onClick={handleProductMenu}>商品メニュー画面へ</button>
        <br />
        <button onClick={handleSignin}>login画面へ</button>
        <h1>test----end</h1>
      </div>

      <p>
        <button onClick={invokeHelloWorld}>invokeHelloWorld</button>
        <div>{text}</div>
      </p>

    </div>
)}

export default App

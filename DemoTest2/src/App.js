import React,{useState} from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/DemoOutput';

import './App.css';

function App() {
  const [showPragraph,setShowParagraph]=useState(false);
  const paragraphHandler = () =>{
    setShowParagraph(privShowParagraph=>!privShowParagraph);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPragraph} />
      <Button onClick={paragraphHandler}>Toggle button</Button>
    </div>
  );
}

export default App;

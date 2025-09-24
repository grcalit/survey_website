import logo from './logo.svg';
import './App.css';
import Question from './Questions.js';
import TopBar from './TopBar.js';
import NextButton from './NextButton.js';
import { useState } from 'react';
import BackFunction from './BackButton.js';

function App() {
  const [qNumber, setQNumber] = useState(0);
  return (
    <div>
        <TopBar/>
        <Question qNumber={qNumber}/>
        <BackFunction/>
        <NextButton/>
    </div>
  );
}

export default App;

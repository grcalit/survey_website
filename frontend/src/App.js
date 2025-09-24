import './App.css';
import Question from './Questions.js';
import TopBar from './TopBar.js';
import NextButton from './NextButton.js';
import { useState } from 'react';
import BackFunction from './BackButton.js';
import SubmitButton from './SubmitButton.js';

function App() {
  const [qNumber, setQNumber] = useState(0);
  return (
    <div>
        <TopBar>
          <Question qNumber={qNumber}/>
        </TopBar>
        <BackFunction appear={qNumber != 0}/>
        <SubmitButton finished={qNumber == 4}/>
        <NextButton appear={qNumber != 4}/>
    </div>
  );
}

export default App;

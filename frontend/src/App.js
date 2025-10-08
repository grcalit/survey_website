import { useState } from 'react';
import './App.css';
import BeginSurvey from './BeginSurvey.js';
import Login from './Login.js';
import SignIn from './SignIn.js';

function App() {
  const [pageNum, setPageNum] = useState(0);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [id, setId] = useState(0);

  function back() {
    if (isLoggedIn && (pageNum===1 || pageNum===4)) {
      setPageNum(pageNum===1? 4:0);
    } else if(pageNum==4) {
      setPageNum(0);
    } else {
      setPageNum(pageNum-1);
    }
  }
  return (
    <div>
      {pageNum===0 && <BeginSurvey pageSetter={setPageNum} idFunc={setId}/>}
      {pageNum===4 && <Login pageSetter={setPageNum} logFunc={setLoggedIn} idFunc={setId}/>}
      {pageNum===3 && <SignIn pageSetter={setPageNum} accountId={id}/>}
      {pageNum===2 && <Questions pageSetter={setPageNum} accountId={id}/>}
      {pageNum!==0 && <button onClick={back}>Back</button>}
    </div>
  )
}

// {pageNum===3 && <Charts pageSetter={setPageNum}/>}
export default App;
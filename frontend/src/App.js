import { useState } from 'react';
import './App.css';
import BeginSurvey from './BeginSurvey.js';
import Login from './Login.js';
import SignIn from './SignIn.js';
import Questions from './Questions.js';
import topics from './questionInfo.js';

function App() {
  const [pageNum, setPageNum] = useState(0);
  const [id, setId] = useState(0);
  const [isLoggedIn, setLogIn] = useState(false);
  const [data, setData] = useState(() => {
        const initial = { id: id };
        topics.forEach((_, idx) => (initial[idx] = {}));
        return initial;
    });

  return (
    <div>
      {pageNum===0 && <BeginSurvey pageSetter={setPageNum} idFunc={setId}/>}
      {pageNum===4 && <Login pageSetter={setPageNum} idFunc={setId} dataFunc={setData} logFunc={setLogIn}/>}
      {pageNum===3 && <SignIn pageSetter={setPageNum} accountId={id} logFunc={setLogIn}/>}
      
      {pageNum===1 && <Questions pageSetter={setPageNum} accountId={id} data={data} dataFunc={setData}/>}
    </div>
  )
}

// {pageNum===2 && <Charts pageSetter={setPageNum}/>}
export default App;
import './App.css';
import BeginSurvey from './BeginSurvey.js';
import Login from './Login.js';
import { useState } from 'react';

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
      {pageNum===0 && <BeginSurvey pageSetter={setPageNum}/>}
      {pageNum===4 && <Login pageSetter={setPageNum} logFunc={setLoggedIn} idFunc={setId}/>}
      
      {pageNum!==0 && <button onClick={back}>Back</button>}
    </div>
  )
}
  // const [isCompleted, setComplete] = useState(false);

// function next() {
//     if (isLoggedIn && pageNum===0 | pageNum===4) {
//       setPageNum(pageNum===0? 4:1);
//     } else {
//       setPageNum(pageNum+1);
//     }
//     setNextText(testMap[pageNum]);
//   }
// {((isLoggedIn && pageNum!==2) | !isLoggedIn) && <button onClick={next}>{nextText}</button>}

// {pageNum===2 && <Questions pageSetter={setPageNum} completeFunc={setComplete}/>}
// {pageNum===3 && <Charts pageSetter={setPageNum}/>}
// {pageNum===4 && <SignIn pageSetter={setPageNum}/>}
export default App;

// const [index, setIndex] = useState(1);

//   function handlerClick(id) {
//     setIndex(id)
//   }

//   function handlerNext() {
//     setIndex(index + 1)
//   }

//   function handlerBack() {
//     setIndex(index - 1)
//   }


//   return (
//     <div>
//       {topics.map((topic) => (
//         <button key={topic.id} onClick={() => {handlerClick(topic.id)}}>
//           {topic.id + '. ' + topic.title}
//         </button>
//       ))}
//       <Question topicId={index}/>
//       {index !== 1 && <button onClick={handlerBack}>Back</button>}
//       {index !== topics.length && <button onClick={handlerNext}>Next</button>}
//     </div>
//   );
import './App.css';
import Question from './Questions.js';
import { useState } from 'react';
import {topics} from './questionInfo.js';


function App() {
  [pageNum, setPageNum] = useState(0);
  [isLoggedIn, setLoggedIn] = useState(false);
  [nextText, setNextText] = useState("Begin Survey");
  [isCompleted, setComplete] = useState(false);
  const testMap = {0: "Begin", 1: "View Results", 2: "Sign Up", 3: "Enter", 4: "Enter"};

  function back() {
    if (isLoggedIn && (pageNum==1 | pageNum==4)) {
      setPageNum(pageNum==1? 4:0);
    } else {
      setPageNum(pageNum-1);
    }
    setNextText(testMap[pageNum]);
  }
  function next() {
    if (isLoggedIn && pageNum==0 | pageNum==4) {
      setPageNum(pageNum==0? 4:1);
    } else {
      setPageNum(pageNum+1);
    }
    setNextText(testMap[pageNum]);
  }

  {pageNum==0 && <BeginSurvey pageSetter={setPageNum}/>}
  {pageNum==1 && <Login pageSetter={setPageNum} logFunc={setLoggedIn}/>}
  {pageNum==2 && <Questions pageSetter={setPageNum}/>}
  {pageNum==3 && <Charts pageSetter={setPageNum}/>}
  {pageNum==4 && <SignIn pageSetter={setPageNum}/>}
  {pageNum!=0 && <button onClick={back}>Back</button>}
  {((isLoggedIn && pageNum!==2) | !isLoggedIn) && <button onClick={next}>{nextText}</button>}
}

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
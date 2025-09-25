import './App.css';
import Question from './Questions.js';
import { useState } from 'react';
import {topics} from './questionInfo.js';


function App() {
  const [index, setIndex] = useState(1);

  function handlerClick(id) {
    setIndex(id)
  }

  function handlerNext() {
    setIndex(index + 1)
  }

  function handlerBack() {
    setIndex(index - 1)
  }


  return (
    <div>
    {topics.map((topic) => (
      <button onClick={() => {handlerClick(topic.id)}}>
        {topic.id + '. ' + topic.title}
      </button>
    ))}
    <Question topicId={index}/>
    {index !== 1 && <button onClick={handlerBack}>Back</button>}
    {index !== topics.length && <button onClick={handlerNext}>Next</button>}
    </div>
  );
}

export default App;
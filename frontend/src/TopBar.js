import { useState } from 'react';
import questionInfo from './questionInfo.js';

export default function TopBar({children}) {
    const [index, setIndex] = useState(0);

    function handlerBack() {
        setIndex(index - 1)
    }

    function handlerNext() {
        setIndex(index + 1)
    }

    function handlerSet({tNumber}) {
        setIndex(tNumber)
    }

    return (
        <div>
            {q_topics.map(topic => <button>{topic.id + ". " + topic.question}</button>)}
            <children qNumber={index}/>
            {qNumber != 0} && <button onClick={handlerBack}>Back</button>
            {qNumber != 4} && <button onClick={handlerNext}>Next</button>
        </div>
    )
}


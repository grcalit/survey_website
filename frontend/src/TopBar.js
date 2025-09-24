import { useState } from 'react';
import questionInfo from './questionInfo.js';

export default function TopBar() {
    

    return (
        <div>
            {q_topics.map(topic => 
                <button onClick={() => handlerClick(topic.id)}>
                    {topic.id + ". " + topic.title}
                </button>)}
        </div>
    )
}


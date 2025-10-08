import { useState } from 'react';
import questionInfo from './questionInfo.js';

export default function TopBar({topicFunc}) {
    

    return (
        <div>
            {q_topics.map(topic => 
                <button onClick={() => topicFunc(topic.id)}>
                    {topic.id + ". " + topic.title}
                </button>)}
        </div>
    )
}


import {topics} from './questionInfo';
import {useState, useEffect} from 'react';

export default function Question({topicId}) {
    const qList = topics[topicId-1].questions;
    const [ans, setAns] = useState(() => {
        let data = {};
        for (let i = 0; i < qList.length; i++) {
        data[qList[i].id] = "";
        }
        return data;
    });

    function changeValue(id, value) {
        setAns(prev => ({
        ...prev,
        [id]: value
        }));
    }

    useEffect(() => {
        if (!ans) return;

        fetch(`http://localhost:8080/api/topic${topicId}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ans)
        })
        .then(res => res.text())
        .then(data => console.log("Saved: ", data))
        .catch(err => console.error("Error: ", err));
    }, [ans])

    return (
        qList.map(question => (
            <div key={question.id}>
                <p>{question.id + '. ' + question.text}</p>
                <select value={ans[question.id] || ""} onChange={(e) => changeValue(question.id, e.target.value)}>
                    <option value=" ">Select an option</option>
                    {question.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
            </div>
        ))
    )
}




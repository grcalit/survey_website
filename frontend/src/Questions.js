import {topics} from './questionInfo';
import {useState, useEffect} from 'react';

export default function Question({topicId}) {
    const qList = topics[topicId-1].questions;
    const [ans, setAns] = useState(" ");
    const [ansID, setAnsId] = useState("");


    useEffect(() => {
        if (!ans) return;

        const formData = {
            id: ansID,
            answer: ans};

        fetch(`http://localhost:8080/api/topic${topicId}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(res => res.text())
        .then(data => console.log("Saved: ", data))
        .catch(err => console.error("Error: ", err));
    }, [ans, ansID])

    return (
        qList.map(question => (
            <div key={question.id}>
                <p>{question.id + '. ' + question.text}</p>
                <select value={ans} onChange={e => {setAns(e.target.value); setAnsId(question.id);}}>
                    <option value=" ">Select an option</option>
                    {question.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
            </div>
        ))
    )
}


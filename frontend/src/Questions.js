import {useState} from 'react';
import topics from './questionInfo.js';
import Survey from './Survey.js';
import TopBar from './TopBar.js';

export default function Questions({pageSetter, accountId, data, dataFunc}) {
    const [topicNum, setTopicNum] = useState(0);
    const [nextText, setNextText] = useState("Next");
    const topicNames = ["Sleeping", "Exercise"];

    const handleSubmission = async() => {
        try {
            await fetch(`http://localhost:8080/api/topic${topicNum+1}/${accountId}`, {
                method:"POST",
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify(data[topicNames[topicNum]])
            });            
        } catch (error) {
            console.log("ERROR SENDING ACCOUNT DATA", error);
        }
    }
    const lastTopic = topics.length - 1;
    async function next() {
        await handleSubmission();
        if (topicNum === lastTopic) {
            pageSetter(2);
        } else {
            setTopicNum(topicNum + 1);
            setNextText(topicNum + 1 === lastTopic ? "Finish" : "Next");
        }
    }
    async function back() {
        await handleSubmission();
        if (topicNum !== 0) {
            setNextText("Next");
            setTopicNum(topicNum-1);
        } else {
            pageSetter(0);
        }
    }

    return (
        <div>
            <TopBar topicFunc={setTopicNum} topics={topics}/>
            <Survey topicNum={topicNum} data={data} dataFunc={dataFunc}/>
            <button onClick={back}>Back</button>
            <button onClick={next}>{nextText}</button>
        </div>
    )    
}
import {useState} from 'react';
import topics from "./questionInfo.js";

export default function Questions({pageSetter, accountId}) {
    const [topicNum, setTopicNum] = useState(0);
    const [data, setData] = useState({"id": accountId});
    const [nextText, setNextText] = useState("Next");


    const handleSubmission = async() => {
        try {
            const res = await fetch(`http://localhost:8080/api/topic${topicNum}/${accountId}`, {
                method:"PUT",
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify(data[topicNum])
            });            
        } catch (error) {
            console.log("ERROR SENDING ACCOUNT DATA");
        }
    }
    function next() {
        handleSubmission();
        if (topicNum===3 ) {
            setNextText("Finish");
            pageSetter(2);
        } else {
            setTopicNum(topicNum+1);
            setNextText("Next");
        }
    }
    function back() {
        handleSubmission();
        setTopicNum(topicNum-1);
    }

    return (
        <div>
            <TopBar topicFunc={setTopicNum}/>
            <Survey questions={topics[topicNum]} data={data} dataFunc={setData}/>
            {topicNum!==0 && <button onClick={back}>Back</button>}
            <button onClick={next}>{nextText}</button>
        </div>
    )    


}




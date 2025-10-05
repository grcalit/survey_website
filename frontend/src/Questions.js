import {useState} from 'react';

export default function Questions({pageSetter, accountId, isLoggedIn}) {
    const [topicNum, setTopicNum] = useState(0);
    const [data, setData] = useState({"id": accountId});
    const [nextText, setNextText] = useState("Next");
    const [isCompleted, setComplete] = useState(false);


    const handleSubmission = async() => {
        try {
            const res = await fetch(`http://localhost:8080/api/topic${topicNum}`, {
                method:"POST",
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify(data)
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
        }
    }
    function back() {
        handleSubmission();
        setTopicNum(topicNum-1);
    }

    return (
        <div>
            <Survey topicNum={topicNum} data={data} dataFunc={setData}/>
            {topicNum!==0 && <button onClick={back}>Back</button>}
            <button onClick={next}>{nextText}</button>
        </div>
    )    


}
//     return (
//         qList.map(question => (
//             <div key={question.id}>
//                 <p>{question.id + '. ' + question.text}</p>
//                 <select value={ans[question.id] || ""} onChange={(e) => changeValue(question.id, e.target.value)}>
//                     <option value=" ">Select an option</option>
//                     {question.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//                 </select>
//             </div>
//         ))
//     )



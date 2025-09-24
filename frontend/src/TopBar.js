export default function TopBar({children}) {
    const q_topics = [
        {id: 1, text: "Sleep", event: {evtHandler1}}, 
        {id: 2, text: "Exercise", event: {evtHandler2}}, 
        {id: 3, text: "Work", event: {evtHandler3}}, 
        {id: 4, text: "Hobby", event: {evtHandler4}}];
    return (
        <div>
            {q_topics.map(topic => <button onClick={topic.event()}>{topic.id + ". " + topic.text}</button>)}
            <children qNumber={topic.id}/>
        </div>
    )
}

export default function TopBar() {
    const q_topics = [
        {id: 1, text: "Sleep"}, 
        {id: 2, text: "Exercise"}, 
        {id: 3, text: "Work"}, 
        {id: 4, text: "Hobby"}];
    return (
        <div>
            {q_topics.map(topic => <button>{topic.id + ". " + topic.text}</button>)}
        </div>
    )
}

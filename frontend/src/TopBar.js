export default function TopBar({topicFunc, topics}) {
    return (
        <div>
            {topics.map(topic => 
                <button key={topic.id} onClick={() => topicFunc(topic.id)}>
                    {topic.id + ". " + topic.title}
                </button>)}
        </div>
    )
}


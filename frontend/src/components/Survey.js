import topics from "../questionInfo.js";

export default function Survey({topicNum, data, dataFunc}) {
    const topicName = topics[topicNum].title;
    const questions = topics[topicNum].questions;
    const handleChange = (id, value) => {
        dataFunc((prev) => ({
            ...prev,
            [topicName]: {
                ...(prev[topicName] || {}),
                [id]: value
            }
        }));
    };

    return (
        <div>
            {questions.map((q) => (
                <div key={q.id}>
                    <h3>{q.question}</h3>

                    {q.type === "select" ? (
                        <select value={data[topicName]?.[q.id] || ""}
                        onChange={(e) => handleChange(q.id, e.target.value)}>
                            <option value="">Select an option</option>
                            {q.options.map((opt, idx) => (
                                <option key={idx} value={opt}>{opt}</option>
                            ))}
                        </select>
                    ) : (
                        <input type="text" value={data[topicName]?.[q.id] || ""}
                        onChange={(e) => handleChange(q.id, e.target.value)}
                        placeholder="Type your answer..."/>
                    )}
                </div>
            ))}
        </div>
    )
}
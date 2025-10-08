import topics from "./questionInfo.js";

export default function Survey({topicNum, data, dataFunc}) {
    const questions = topics[topicNum];
    const handleChange = (id, value) => {
        dataFunc((prev) => ({
            ...prev,
            [topicNum]: {
                ...(prev[topicNum] || {}),
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
                        <select value={data[q.id] || ""}
                        onChange={(e) => handleChange(q.id, e.target.value)}>
                            <option value="">Select an option</option>
                            {q.options.map((opt, idx) => (
                                <option key={idx} value={opt}>{opt}</option>
                            ))}
                        </select>
                    ) : (
                        <input type="text" value={answers[q.id] || ""}
                        onChange={(e) => handleChange(q.id, e.target.value)}
                        placeholder="Type your answer..."/>
                    )}
                </div>
            ))}
        </div>
    )
}
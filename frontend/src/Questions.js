import {topics} from './questionInfo';

export default function Question({topicId}) {
    const qList = topics[topicId-1].questions;

    function formulateQuestion(questions) {
        return questions.map(question => (
        <div>
            <p>{question.id + '. ' + question.text}</p>
            <select>{question.options.map(select_options => <option>{select_options}</option>)}</select>
        </div>))
    }
    
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        for (let ans in e) {
            formData[ans] = e.ans;
        }

        const response = await fetch(`https://localhost:3000/topic${topicId}`, {
            method: "POST",
            body: JSON.stringify(formData)
        });

        console.log(response);
    }

    return (
        <form onSubmit={handleSubmit}>
            {formulateQuestion(qList)}
        </form>
    )
}


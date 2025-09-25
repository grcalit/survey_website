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
    
    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
            {formulateQuestion(qList)}
        </form>
    )
}


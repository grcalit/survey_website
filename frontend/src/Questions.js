import {topics} from './questionInfo.js';

export default function Question({topicNumber}) {
    const topic = topics[topicNumber];
    return (
        <div>
            <p>{topic.question}</p>
            (topic.selections ? selectQuestion({topic.selections}):
            <input {...topic.attributes}></input>)
        </div>
    )
}

function selectQuestion({selections}) {
    return (
        selections.map((text) => <option>text</option>)
    )
}

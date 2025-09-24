export default function Question({qNumber}) {
    return (
        <div>
            <p>{questions[qNumber]}</p>
        </div>
    )
}

const button_questions = [];

const drop_down_questions = [];

const time_questions = [1, 2];

const questions = [
    "What is your gender?",
    "What time do you typically go to sleep?",
    "What time do you typically wake up?"
];

const gender_answers = ["Female", "Male", "Unbinary", "Other"];
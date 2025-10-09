const topics = 
[
    {"id": 0, "title": "Sleeping", "questions": 
        [{"id": "q1",
        "question": "how do you feel?",
        "type": "text"},

        {"id": "q2",
        "question": "what is your age?",
        "type": "select",
        "options": ["0-18", "19-30", "30+"]},

        {"id": "q3",
        "question": "what is your gender?",
        "type": "select",
        "options": ["other", "female", "male"]
        }
        ]}, 
    {"id": 1, "title": "Exercise", "questions": [
        {"id": "q1",
        "question": "how is your age?",
        "type": "select",
        "options": ["0-18", "19-30", "30+"]},

        {"id": "q2",
        "question": "what is your gender?",
        "type": "select",
        "options": ["other", "female", "male"]},

        {"id": "q3",
        "question": "how do you feel?",
        "type": "text"
        }
    ]}
];

export default topics;
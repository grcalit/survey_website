const topics = 
[
    {"id": 0, "title": "Sleeping", "questions": 
        [{"id": 0.0,
        "question": "how do you feel?",
        "type": "text"},

        {"id": 0.1,
        "question": "what is your age?",
        "type": "select",
        "options": ["0-18", "19-30", "30+"]},

        {"id": 0.2,
        "question": "what is your gender?",
        "type": "select",
        "options": ["other", "female", "male"]
        }
        ]}, 
    {"id": 1, "title": "Exercise", "questions": [
        {"id": 1.0,
        "question": "how is your age?",
        "type": "select",
        "options": ["0-18", "19-30", "30+"]},

        {"id": 1.1,
        "question": "what is your gender?",
        "type": "select",
        "options": ["other", "female", "male"]},

        {"id": 1.2,
        "question": "how do you feel?",
        "type": "text"
        }
    ]}
];

export default topics;
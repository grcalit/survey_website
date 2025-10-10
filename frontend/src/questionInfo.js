const topics = 
[
    {"id": 0, "title": "Sleeping", "questions": 
        [{"id": "q1",
        "question": "How many hours of sleep do you get on average per night?",
        "type": "text"},

        {"id": "q2",
        "question": "How many nights per week do you sleep at least 7 hours?",
        "type": "text"},

        {"id": "q3",
        "question": "What time do you usually go to bed?",
        "type": "select",
        "options": ["Before 9 pm", "9-10 pm", "10-11 pm", "11 pm-12 am", "After midnight"]
        },

        {"id": "q4",
        "question": "How often do you wake up feeling rested?",
        "type": "select",
        "options": ["Always", "Often", "Sometimes", "Rareky", "Never"]
        }, 

        {"id": "q5",
        "question": "How would you rate your sleep quality?",
        "type": "select",
        "options": ["Very poor", "Poor", "Fair", "Good", "Excellent"]
        }
        ]}, 
    {"id": 1, "title": "Exercise", "questions": [
        {"id": "q1",
        "question": "How many days per week do you exercise?",
        "type": "text"},

        {"id": "q2",
        "question": "How many minutes do you usually exercise per session?",
        "type": "text"},

        {"id": "q3",
        "question": "What type of exercise do you do most often?",
        "type": "select",
        "options": ["Cardio", "Strength training", "Flexibility/mobility", "Sports/recreational", "None"]},

        {"id": "q4",
        "question": "How would you describe your workout intensity?",
        "type": "select",
        "options": ["Low", "Moderate", "High"]
        }, 

        {"id": "q5",
        "question": "How long have you maintained your current exercise routine?",
        "type": "select",
        "options": ["Less than 3 months", "3-6 months", "6-12 months", "Over 1 year"]
        }, 

        {"id": "q6",
        "question": "How many steps do you typically take per day?",
        "type": "select",
        "options": ["<3,000", "3,000-6,000", "6,000-9,000", "9,000-12,000", "12,000+"]
        }
    ]},
    {"id": 2, "title": "Work", "questions": [
        {"id": "q1",
        "question": "How many hours per day do you spend working or studying?",
        "type": "text"
        },

        {"id": "q2",
        "question": "How many breaks do you take during a typical workday?",
        "type": "text"
        },

        {"id": "q3",
        "question": "What is your primary work environment?",
        "type": "select",
        "options": ["In-person", "Remote", "Hybrid", "Other"]
        }, 

        {"id": "q4",
        "question": "How would you rate your daily stress level?",
        "type": "select",
        "options": ["Very low", "Low", "Moderate", "High", "Very High"]
        }, 

        {"id": "q5",
        "question": "How satisfied are you with your work-life balance?",
        "type": "select",
        "options": ["Very dissatisfied", "Neutral", "Satisfied", "Very satisfied"]
        }, 

        {"id": "q6",
        "question": "How many hours per week do you work overtime?",
        "type": "select",
        "options": ["None", "1-5 hours", "6-10 hours", "11-15 hours", "15+ hours"]
        }
    ]}, 
    {"id": 3, "title": "Hobby/Leisure", "questions": [
        {"id": "q1",
        "question": "How many hours per week do you spend on hobbies or leisure?",
        "type": "text"
        },

        {"id": "q2",
        "question": "How many hobbies do you regularly engage in?",
        "type": "text"
        },

        {"id": "q3",
        "question": "Which of the following best describes your main hobby?",
        "type": "select",
        "options": ["Creative (art, writing, music)", "Active (sports, hiking, dance)", "Social (clubs, games, gathering)", "Passive (reading, watching shows)", "Other"]
        }, 

        {"id": "q4",
        "question": "How often do you spend time on your hobbies?",
        "type": "select",
        "options": ["Daily", "A few times a week", "Once a week", "A few times a month", "Rarely"]
        }, 

        {"id": "q5",
        "question": "How much do your hobbies help you relax?",
        "type": "select",
        "options": ["Not at all", "A little", "Moderately", "A lot"]
        }
    ]}
];

export default topics;
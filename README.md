# survey_website
## What is this project about?
This project is a Lifestyle Survey and Analysis Website. It takes in user answers to multiple questions pertaining to different topic of lifestyle such as sleep, work, exercise, and hobby/leisure. In return the user gets a comparative analysis of their answers compared to other people's answers in the forms of graphs. There is also an option to sign in and log in, to see their answers and charts at another time. 

## Process of making the project:
Let me preface by saying, before this git repo even started I had another repo for this project but I mistakely made the frontend a nested repo. Took me some time before finding out that was the problem, then made this repo. 

At first I was playing around with making components in React, not having a clear layout of what the project looks like, but I knew I wanted a survey that turns the data into interesting charts. I then built the spring boot backend. As I learned more about Reactjs, I started to get a better idea of what I want my project to look like. From there I built APIs in the backend, tested with Postman. Then tested it with the frontend. I built the basic components like BeginSurvey, Login, and SignIn first and the Questions and Charts components last. There were some areas I wanted to fixed before getting to the Charts component first like retaining the answers in the input elements even as the user goes to a different topic and making sure that when a user logs in, their answers are already displayed in the Questions component. I also implented the same styling as Reactjs does to all my components. For the Charts component, I installed a charting dependency called Recharts. I plan to do more with the Charts component, make the project more secure, and deploy the project in the future.

## Here is a list of what I did:
- Built Spring Boot backend with Spring Web, and Spring JPA
- Implemented a Postgres database
- Built a React Frontend
- Used Maven and Github

## What did I learn?
I learned that there is a CORS policy and that it restricts a server from communicating with other servers unless the server allows that kind of request. I learned a lot about Reactjs and learned enough about Rechart to make a histogram. I learned that I like it when I guess why there is an error, fix it, and it actually solves the error.

## What was my experience like creating this project?
It was fun. I enjoyed making the components, the APIs with all the supporting functions, seeing the data on my database, and seeing the data appear on the screen. My biggest challenge was finding a way for the answers to persist as you go from topic to topic and back, but I was able to figure that out. I would give this project experience an 8/10.




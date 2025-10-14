import {useState} from "react";
import './Login.css'

export default function Login({pageSetter, idFunc, dataFunc, logFunc}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            const res1 = await fetch('http://localhost:8080/api/login', {
                method:"POST",
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify({email, password})
            });
            const id = await res1.json();
            console.log(id);
            idFunc(id);
            logFunc(true);
            const res2 = await fetch(`http://localhost:8080/api/loginAnswers/${id}`, {
                method:"GET",
                headers:{ "Content-Type": "application/json" }
            });
            const responseData2 = await res2.json();
            dataFunc((prev) => ({
                ...prev,
                ...responseData2,
                id: id
            }));

        } catch (error) {
            console.log("ERROR SENDING ACCOUNT DATA: ", error);
        }
        pageSetter(1);
    }

    return (
        <div className="login-container">
            <p>Login</p>
            <p name="email">Email:</p>
            <input name="email" value={email} type="text" placeholder="Enter Email" onChange={((e) => setEmail(e.target.value))}></input>
            <p name="password">Password:</p>
            <p className="password-rules">The password must have at least 1 number, 1 special character, and be at least 9 characters. </p>
            <input name="password" value={password} type="password" minLength="9" maxLength="20" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}></input>
            <br/>
            <button onClick={() => pageSetter(0)}>Back</button>
            <button onClick={handleSubmit}>Enter</button>
        </div>
    )
}
import {useState} from "react";

export default function Login({pageSetter, logFunc, idFunc}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const data = {email, password};

        try {
            const res = await fetch('http://localhost:8080/api/account', {
                method:"POST",
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify(data)
            });
            const responseData = await res.json();
            idFunc(responseData.id);
        } catch (error) {
            console.log("ERROR SENDING ACCOUNT DATA");
        }
        logFunc(true);
        pageSetter(1);
    }

    return (
        <div>
            <p>Login</p>
            <p name="email">Email:</p>
            <input name="email" value={email} type="text" placeholder="Enter Email" onChange={((e) => setEmail(e.target.value))}></input>
            <p name="password">Password:</p>
            <p>The password must have at least 1 number, 1 special character, and be at least 9 characters. </p>
            <input name="password" value={password} type="password" minLength="9" maxLength="20" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}></input>
            <br/>
            <button onClick={handleSubmit}>Enter</button>
        </div>
        
    )
}
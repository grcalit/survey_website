export default function BeginSurvey({pageSetter, idFunc}) {

    const setId = async() => {
        const data = {"email": "", "password": ""};
        try {
            const res = await fetch('http://localhost:8080/api/account', {
                method: "POST", 
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify(data)
            });
            const responseData = await res.json();
            console.log(responseData.id);
            idFunc(responseData.id);
        } catch (error) {
            console.log("ERROR SENDING EMPTY ACCOUNT DATA IN BEGIN SURVEY");
        }
    }

    return (
    <div>
        <button onClick={() => pageSetter(4)}>Login</button>
        <p>Welcome to the Lifestyle Survey</p>
        <p>Press the button to begin!</p>
        <button onClick={() => {setId(); pageSetter(1);}}>Begin</button>
    </div>
    )
}
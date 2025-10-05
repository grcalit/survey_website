export default function BeginSurvey({pageSetter}) {
    return (
    <div>
        <button onClick={() => pageSetter(4)}>Login</button>
        <p>Welcome to the Lifestyle Survey</p>
        <p>Press the button to begin!</p>
        <button onClick={() => pageSetter(1)}>Begin</button>
    </div>
    )
}
export default function SubmitButton({finished}) {
    return (finished && <button onClick={submitEvent}>Submit</button>)

}
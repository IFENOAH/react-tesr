import { useState } from "react"
import Output from "./Output"

const Greeting = () => {

    const [changedText, setChangedText] = useState(false)

    const changeTextHandler = () => {
        setChangedText(prev => !prev)
    }
    return <div>
        <h2>Hello World!</h2>
        { !changedText && <Output>Nice to meet you!</Output> }
        { changedText && <Output>Changed</Output> }
        <button onClick={changeTextHandler}>change Text</button>
    </div>
}

export default Greeting
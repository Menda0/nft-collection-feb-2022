import React, {useState, useEffect} from "react";

type ComponentProps = {
    message: string
}

// Component class old definition
// type ComponentState = {}

// export class Component4 extends React.Component<ComponentProps, ComponentState> {

//     render() {
//         return <h1>{this.props.message}</h1>
//     }
// }

const useMessage = (props:ComponentProps) => {
    const [message,setMessage] = useState<String>(props.message)

    // ComponentDidMout <=> []
    useEffect(() => {
        console.log("Component did mount hook")
    },[])

    // ComponentDidUpdate <=> [message]
    useEffect(() => {
        console.log("Fetch data from backend ...")
    },[message])

    return {message, setMessage}
}

// Functional Component
export const Component9 = (props:ComponentProps) => {

    // this.state.message <=> message
    // this.setState({message:"..."}) <=> setMessage
    // this.state = {message:"..."} <=> useState("This is a default message")

    // const [message,setMessage] = useState<String>(props.message)

    // // ComponentDidMout <=> []
    // useEffect(() => {
    //     console.log("Component did mount hook")
    // },[])

    // // ComponentDidUpdate <=> [message]
    // useEffect(() => {
    //     console.log("Fetch data from backend ...")
    // },[message])

    // console.log('Render functional component ...')


    const {message, setMessage} = useMessage(props)

    console.log('Render functional component ...')
    return (
        <>
            <input type="text" onChange={e => setMessage(e.target.value)}/>
            <h1>{message}</h1>
        </>
    )
}

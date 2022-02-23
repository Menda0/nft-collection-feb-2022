import React from "react";
import {useParams} from "react-router-dom"

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

type RouterParams = {
    defaultMessage:string
}

// Functional Component
export const Component8 = (props:ComponentProps) => {

    const {defaultMessage} = useParams<RouterParams>()

    //return <h1>{props.message}</h1>
    return <h1>{defaultMessage}</h1>
}

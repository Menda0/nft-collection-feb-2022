import React from "react";

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

// Functional Component
export const Component8 = (props:ComponentProps) => {
    return <h1>{props.message}</h1>
}

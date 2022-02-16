import React from "react";

type ChildComponentProps = {
    onMessageChange: (message:string) => void
}

type ChildComponentState = {}

class ChildComponent extends React.Component<ChildComponentProps, ChildComponentState>{
    render(){
        return (
            <>
                <h1>Child Component</h1>
                <input type="text" onChange={e => this.props.onMessageChange(e.target.value)} />
            </>
        )
    }
}

type ParentComponentState = {
    message: string
}

type ParentComponentProps = {}

export default class ParentComponent extends React.Component<ParentComponentProps, ParentComponentState>{
    
    constructor(props: ParentComponentProps) {
        super(props);
        
        this.state = {
            message: "Initial parent message"
        }
    }

    changeMessage = (message: string) => {
        this.setState({message})
    }
    
    render() {
        return (
            <>
                <h1>Parent Component: {this.state.message}</h1>
                <ChildComponent onMessageChange={this.changeMessage}/>
            </>
        )
    }
}
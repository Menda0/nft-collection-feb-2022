import React from "react";

type ChildComponentProps = {
    message: string
}

class ChildComponent extends React.Component<ChildComponentProps>{

    componentDidUpdate(){
        console.log("Child updated ...")
    }

    render(){
        return (
            <h1>Child Component: {this.props.message}</h1>
        )
    }
}

type ParentComponentProps = {}
type ParentComponentState = {
    parentMessage: string
}

export default class ParentComponent extends React.Component<ParentComponentProps,ParentComponentState>{
    
    constructor(props: ParentComponentProps) {
        super(props);
        
        this.state = {
            parentMessage: "Parent default message"
        }
    }

    componentDidUpdate(){
        console.log("Parent updated ...")
    }
    
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            parentMessage: e.target.value
        })
    }

    render() {
        return (
            <>
                <h1>Parent Component</h1>
                <input type="text" onChange={this.onChange}/>
                <ChildComponent message={this.state.parentMessage} />
            </>
        )
    }
}
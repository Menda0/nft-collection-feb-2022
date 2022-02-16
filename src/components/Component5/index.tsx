import { type } from "os";
import React, { Component } from "react";

type ComponentProps = {

}

type ComponentState = {
    message: string
}


export class Component5 extends React.Component<ComponentProps,ComponentState> {

    // Investigate more
    // state = {
    //     message: "Another test"
    // }

    // CTOR create constructor using visual studio code
    constructor(props: ComponentProps){
        super(props)

        this.state = {
            message: "This is a default message"
        }
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        // Only used on constructor
        // Changes on state must respect component lifecycle
        // Use setState instead
        // this.state = {
        //     message: e.target.value
        // }
        this.setState({
            message: e.target.value
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <input type="text" placeholder="changeMessage" onChange={this.onChange}/>
            </>
        )
    }
}
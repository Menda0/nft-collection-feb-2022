import React from "react"
import { RootState } from "../../store"
import {useSelector, useDispatch} from "react-redux"
import * as example from "../../store/example.duck"

export const Component10 = () => {

    const dispatch = useDispatch()

    const message = useSelector((state:RootState) => {
        return state.example.message
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const payload = {
            message: e.target.value
        }
        dispatch(example.actions.setMessage(payload))
    }

    return <>
        <input type="text" onChange={e => dispatch(example.actions.setMessage({message: e.target.value}))} />
        <h1>{message}</h1>
    </>
}
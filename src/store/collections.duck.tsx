import Collection from "../models/Collection";
import {createReducer, createAction, PayloadAction} from "@reduxjs/toolkit"

type CollectionsState = {
    listCollections?: Array<Collection>
    selectedCollection?: Collection,
    search?: string
}

const initialState:CollectionsState = {
    listCollections: [],
    selectedCollection: undefined,
    search: undefined
}

type SetSelectedCollectionActionType = {
    selectedCollection?: Collection
}

export const actions = {
    setSelectedCollection: createAction<SetSelectedCollectionActionType>('SET_SELECTED_COLLECTION')
}

export const reducer = createReducer(initialState, {
    [actions.setSelectedCollection.type]: (
        state:CollectionsState, action: PayloadAction<SetSelectedCollectionActionType>) => {
            return {...state, selectedCollection: action.payload.selectedCollection}
    }
})



import React, {useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import * as collections from "../store/collections.duck"
import { RootState } from "../store"
import NFTCollectionItem from "../components/NFTCollectionItem"

const useSelectCollection = () => {
    // Get route parameter
    const {collectionId} = useParams()
    const dispatch = useDispatch()

    // Bound component state to store => useSelector
    const selectedCollection = useSelector(
        (state: RootState) => state.collections.selectedCollection
    )

    useEffect(() => {
        const payload = {
            selectedCollection: undefined
        }
        dispatch(collections.actions.setSelectedCollection(payload))
    }, [])

    useEffect(() => {
        // GET https://api.opensea.io/api/v1/collection/<collectionId>
        axios.get(`https://api.opensea.io/api/v1/collection/${collectionId}`)
            .then(response =>{

                // Change component state dispatching an action
                // dispatch(setSelectedCollection)
                const payload = {
                    selectedCollection: response.data.collection
                }
                dispatch(collections.actions.setSelectedCollection(payload))
            })
    }, [collectionId])

    return selectedCollection
}

export const CollectionDetailPage = () => {

    const selectedCollection = useSelectCollection()

    return <NFTCollectionItem collection={selectedCollection} />
}
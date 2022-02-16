import React from "react"
import Collection from "../../models/Collection"

type NFTCollectionItemState = {

}

type NFTCollectionItemProps = {
    collection: Collection
}

export default class NFTCollectionItem extends React.Component{
    render(){
        return (
            <h1>NFT Collection List</h1>
        )
    }
}
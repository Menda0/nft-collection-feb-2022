import React from "react"
import Collection from "../../models/Collection"

type NFTCollectionItemState = {

}

type NFTCollectionItemProps = {
    collection?: Collection
}

export default class NFTCollectionItem 
    extends React.Component<NFTCollectionItemProps, NFTCollectionItemState>{
    render(){
        return (
            <>
            <p><b>Name:</b> {this.props.collection?.name} </p>
            <p><b>Description:</b> {this.props.collection?.description}</p>
        </>
        )
    }
}
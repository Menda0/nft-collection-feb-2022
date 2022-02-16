import React from "react"
import Collection from "../../models/Collection"

type NFTCollectionListProps = {
    listCollections: Array<Collection>
}

type NFTCollectionListState = {}

export default class NFTCollectionList extends React.Component<NFTCollectionListProps, NFTCollectionListState>{

    render() {
        return(
            <>
                {this.props.listCollections.map(collection => {return <></>})}
            </>
        )
    }
}
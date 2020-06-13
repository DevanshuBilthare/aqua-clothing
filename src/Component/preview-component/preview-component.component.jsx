import React from 'react';
import CollectionItem from '../CollectionItem/Collection-item.component'

import './preview-component.styles.scss'

const PreviewComponent =({items,title }) => (
    <div className="collection-preview">
            <h1 className = "title"> {title}</h1>
            <div className = 'preview'>
            {
                 items.filter((items,idx)=> idx<4).map(({id, ...otherItemsProps}) => (
                    <CollectionItem key={id} {...otherItemsProps} />
                ))
            }
            </div>
         
    </div>
)

export default PreviewComponent;
import React from 'react';
import SHOP_DATA from './ShopData'

import './ShopPage.styles.scss'
import PreviewComponent from '../preview-component/preview-component.component';

class ShopPage extends React.Component {
    constructor(){
        super()

        this.state ={
            collections: SHOP_DATA
        }
    }

    render(){
        const { collections}  = this.state;
        return (
            <div>
                {
                    collections.map(({id, ...allOtherProps}) => (
                        // <PreviewComponent id={id} items= {items} title= {title} />
                        <PreviewComponent key={id} {...allOtherProps} />

                    ))
                }
            </div>
        )
    }
}

export default ShopPage;
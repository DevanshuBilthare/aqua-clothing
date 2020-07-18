import React from 'react'

import './CartItem.styles.scss'

const cartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt=""/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span>{quantity} ✖ ${price}</span>
        </div>
    </div>
)

export default cartItem;
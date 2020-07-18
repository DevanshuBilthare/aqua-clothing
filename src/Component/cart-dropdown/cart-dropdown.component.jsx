import React from 'react'
import { connect } from 'react-redux'

import ButtonInput from '../Buttoninput/button-input.component'
import CartItem from '../CartItem/CartItem.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        {
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
        }
        
        <ButtonInput>GO TO CHECKOUT</ButtonInput>
    </div>
)

const mapStateToProps =({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)
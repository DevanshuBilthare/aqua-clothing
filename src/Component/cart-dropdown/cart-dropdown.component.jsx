import React from 'react'

import ButtonInput from '../Buttoninput/button-input.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <ButtonInput>GO TO CHECKOUT</ButtonInput>
    </div>
)

export default CartDropdown
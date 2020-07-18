import React from 'react'

import './button-input.styles.scss'

const ButtonInput =({children, isGoogleSignIn, inverted, ...otherButtonProps}) => (
    <div >

        <button 
        className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
        {...otherButtonProps}>
            {children}
        </button>
    </div>
)

export default ButtonInput ;

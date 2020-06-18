import React from 'react'

import './button-input.styles.scss'

const ButtonInput =({children, isGoogleSignIn, ...otherButtonProps}) => (
    <div >

        <button 
        className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
        {...otherButtonProps}>
            {children}
        </button>
    </div>
)

export default ButtonInput ;

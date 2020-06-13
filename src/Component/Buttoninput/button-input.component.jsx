import React from 'react'

import './button-input.styles.scss'

const ButtonInput =({children, ...otherButtonProps}) => (
    <div >
        <button className='custom-button' {...otherButtonProps}>
            {children}
        </button>
    </div>
)

export default ButtonInput ;

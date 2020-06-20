import React from 'react'

import './form-input.styles.scss'

const FormInput = ({onChange, label, ...otherInputProps }) => (
    <div className='group'>
        <input className= "form-input" {...otherInputProps} onChange={onChange} />
        {
                label ?
                (<label className={ `${otherInputProps.value.length ? 'shrink' : ''} form-input-label`} >
                    {label}
                </label>)
                : null
        }
    </div>
)

export default FormInput;
import React from 'react'
import FormInput from '../FormInput/form-input.component'
import ButtonInput from '../Buttoninput/button-input.component'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {

        event.preventDefault()

        this.setState = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState = {
            [name]: value
        }
    }


    render() {
        return (
            <div className = 'signin'>
                <h1 className='title'>I already have an account</h1>
                <h3 style={{ color: 'grey' }}>Sign in with your email and password </h3>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    label="email"
                    onChange={this.handleChange} />
                    <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    label='password'
                    onChange={this.handleChange} />
                    <ButtonInput
                    type='submit' 
                    value="Submit Form" >Sign in</ButtonInput>
                </form>
            </div>
        )
    }

}

export default SignIn;
import React from 'react'
import FormInput from '../FormInput/form-input.component'
import ButtonInput from '../Buttoninput/button-input.component'
import { auth,signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {

        event.preventDefault()

        const{ email,password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch(error) {
            console.log(error)
        }

    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div className='signin'>
                <h1 className='title'>I already have an account</h1>
                <h3 style={{ color: 'grey' }}>Sign in with your email and password </h3>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        label="Email"
                        onChange={this.handleChange} 
                        required/>
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        label='Password'
                        onChange={this.handleChange} 
                        required />
                    <div className = 'buttons'>
                        <ButtonInput type='submit'>Sign in</ButtonInput>
                        <ButtonInput onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with google
                        </ButtonInput>   
                    </div>
                    
                </form>
            </div>
        )
    }

}

export default SignIn;
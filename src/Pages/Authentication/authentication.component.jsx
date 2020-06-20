import React from 'react'
import SignIn from '../../Component/SignIn/sign-in.component'
import SignUp from '../../Component/sign-up/SignUp.component'

import './authentication.styles.scss';

const AuthenticationPage = () => (
    <div className = "authentication">
        <SignIn />
        <SignUp />
    </div>
)

export default AuthenticationPage;
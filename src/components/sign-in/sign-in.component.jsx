import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { authentication } from '../../firebase/firebase.utils';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider);
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'

                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'

                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={this.signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
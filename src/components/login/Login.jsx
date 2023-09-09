import React from 'react'
import styles from './Login.module.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Login() {
    return (
        <div className={styles.login}>

            <div className={styles.box1}>
                <div className={styles.container1}>
                    LOGO

                </div>
                <div className={styles.container2}>
                    <div className={styles.inner1}>
                                            Board.

                    </div>
                    <div className={styles.inner2}>

                    </div>
                </div>
                <div className={styles.container3}>

                </div>
            </div>
            <div className={styles.box2}>
                <div className={styles.inputBox}>
                    <p>Sign In</p>
                    <p>Sign in to your account</p>
                    <div className={styles.buttons}>
                        <GoogleOAuthProvider clientId="591379587683-14p7j0c54rojkhtd037692gfai4hapor.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    console.log(credentialResponse);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </GoogleOAuthProvider>

                        <button>Sign in with Apple</button>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="text" placeholder='Email' />
                        <input type="password" placeholder='password' />
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
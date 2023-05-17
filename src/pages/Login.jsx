import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import '../styles/login.css'

const Login = () => {
    return ( 
        <section class="login-index">
            <div className="container">
                <div className="row">
                    <div className='forms'>
                        <div class="form login">
                            <div class="form-content">
                                <header>Login</header>
                                <form action="#">
                                    <div class="field input-field">
                                        <input type="email" placeholder="Email" class="input"/>
                                    </div>

                                    <div class="field input-field">
                                        <input type="password" placeholder="Password" class="password"/>
                                        <i class='bx bx-hide eye-icon'></i>
                                    </div>

                                    <div class="form-link">
                                        <Link class="forgot-pass">Forgot password?</Link>
                                    </div>

                                    <div class="field button-field">
                                        <button>Login</button>
                                    </div>
                                </form>
                                <div class="form-link-signup">
                                    <span>Don't have an account?
                                        <Link to='/signup' class="link signup-link">Signup</Link>
                                    </span>
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="media-options">
                                <Link className="field facebook">
                                <BsFacebook className="facebook-img"/>
                                    <span>Login with Facebook</span>
                                </Link>
                            </div>
                            <div class="media-options">
                                <a href="#" className="field google">
                                    <FcGoogle className="google-img"/>
                                    <span>Login with Google</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
  )
}

export default Login
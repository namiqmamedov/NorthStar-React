import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import '../styles/register.css'

const Signup = () => {
    return ( 
        <section class="register-index">
            <div className="container">
                <div className="row">
                    <div className='forms'>
                        <div class="form register">
                            <div class="form-content">
                                <header>Signup</header>
                                <form action="#">
                                    <div class="field input-field">
                                        <input type="email" placeholder="Email" class="input"/>
                                    </div>

                                    <div class="field input-field">
                                        <input type="password" placeholder="Create Password" class="password"/>
                                        <i class='bx bx-hide eye-icon'></i>
                                    </div>

                                    <div class="field input-field">
                                        <input type="password" placeholder="Confirm Password" class="password"/>
                                        <i class='bx bx-hide eye-icon'></i>
                                    </div>

                                    <div class="field button-field">
                                        <button>Signup</button>
                                    </div>
                                </form>
                                <div class="form-link-signup">
                                    <span>Already have an account? 
                                        <Link to='/login' class="link signup-link">Login</Link>
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

export default Signup
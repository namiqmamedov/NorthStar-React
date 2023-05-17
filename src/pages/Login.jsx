import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/login.css'

const style = {

};

const Login = () => {
    const [open,
    setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                                        <Link onClick={handleOpen} class="forgot-pass">Forgot password?</Link>
                                        <Modal
                                            aria-labelledby="transition-modal-title"
                                            aria-describedby="transition-modal-description"
                                            open={open}
                                            onClose={handleClose}
                                            closeAfterTransition
                                            slots={{
                                            backdrop: Backdrop
                                        }}
                                            slotProps={{
                                            backdrop: {
                                                timeout: 500
                                            }
                                        }}>
                                            <Fade in={open}>
                                                <Box className="modal-box" sx={style}>
                                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                                        FORGOT YOUR PASSWORD
                                                    </Typography>
                                                    <div className="modal__body">
                                                    <Typography
                                                        id="transition-modal-description"
                                                        sx={{
                                                        mt: 2
                                                    }}>
                                                        Provide your account email address to receive an email to reset your password.
                                                    </Typography>
                                                    <TextField id="standard-basic" label="Email address*" placeholder='Email address' variant="standard" />
                                                        <div className="submit-btn">
                                                        <Button variant="contained">SUBMIT REQUEST</Button>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </Fade>
                                        </Modal>
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
                                <Link className="field google">
                                    <FcGoogle className="google-img"/>
                                    <span>Login with Google</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [disable, setDisable] = useState(true)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6);
    })


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleValidateCapture = e => {
        const user_captcha_value = e.target.value;
        // console.log(value);
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | LogIn</title>
            </Helmet>
            <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                        <span className="label-text">Valid</span>
                                    </label>
                                    <input onBlur={handleValidateCapture} type="text" placeholder="Type here" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p><small>New Here?<Link to='/signUp'>SignUp</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
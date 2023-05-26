import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6); 
    })


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
    }

    const handleValidateCapture = e => {
        const user_captcha_value = captchaRef.current.value;
        // console.log(value);
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        } else {
            setDisable(true); 
        }
    }

    return (
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
                                <input ref={captchaRef} type="text" name='password' placeholder="Type here" className="input input-bordered" />
                                <button onClick={handleValidateCapture} className='btn btn-outline btn-xs mt-2'>valid</button>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
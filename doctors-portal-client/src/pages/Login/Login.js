import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // =============================SIGN IN
    const {signIn} = useContext(AuthContext);

    // =============================HANDLE SHOW ERROR
    const [loginError, setLoginError] = useState('');

    // =============================Private route Navigation to desired destination
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = data => {
        console.log(data);
        setLoginError('');

        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);

            // ================private route login
            navigate(from, {replace:true});
        })
        .catch(error => {
            setLoginError(error.message);
            console.log(error.message);
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='border-2 rounded-20 px-16 py-12 rounded-xl'>
                <h2 className='text-xl text-center mb-4'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", {
                            required:true
                        })}  
                        type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-red-600 label-text'>{errors.email.message}</span>}
                        
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password", {
                            required:true, 
                            minLength: {
                                value:6,
                                message: 'Password at least 6 character long'
                            }, 
                            maxLength: {
                                value:20,
                                message: 'Password length 20 character max'
                            } 
                        })} type="password" className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text-alt">Forgot password?</span></label>
                        {errors.password && <span className='text-red-600 label-text'>{errors.password.message}</span>}
                    </div>

                    {/* <p>{data}</p> */}
                    <input type="submit" className="btn btn-accent w-full max-w-xs mt-4 text-white uppercase" value="Login" />


                    <div>
                        {
                            loginError && <p className='text-red-600 font-bold'>{loginError}</p>
                        }
                    </div>


                </form>
                <p className='text-secondary label-text'>New to Doctors Portal?? <Link to={'/signup'}>Create New Account</Link></p>
                <div className="divider">OR</div>

                <button className='btn btn-outline w-full uppercase'>Continue with google</button>

            </div>
        </div>
    );
};

export default Login;
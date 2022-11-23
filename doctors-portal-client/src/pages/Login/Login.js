import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = data => {
        console.log(data);
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
                        type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span>This field is required</span>}
                        
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password", {
                            required:true
                        })} type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <span>This field is required</span>}
                        <label className="label"><span className="label-text-alt">Forgot password?</span></label>
                    </div>

                    {/* <p>{data}</p> */}
                    <input type="submit" className="btn btn-accent w-full max-w-xs mt-4 text-white uppercase" value="Login" />
                </form>
                <p className='text-secondary label-text'>New to Doctors Portal?? <Link to={'/signup'}>Create New Account</Link></p>
                <div className="divider">OR</div>

                <button className='btn btn-outline w-full uppercase'>Continue with google</button>

            </div>
        </div>
    );
};

export default Login;
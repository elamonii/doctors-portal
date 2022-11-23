import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const SignUp = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();

    const {createUser, updateUser} = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState('');

    const handleSignup = (data) =>{
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);

            toast('User created successfully.');

            const userInfo = {
                displayName: data.name,
                // photoURL: data.photourl
            }

            updateUser(userInfo)
            .then( () => {} )
            .catch( err => console.log(err))


        })
        .catch(error => {
            console.log(error);
            setSignUpError(error.message)
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='border-2 rounded-20 px-16 py-12 w-96 rounded-xl'>
                <h2 className='text-xl text-center mb-4'>Signup</h2>

                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register('name', {
                            required: "Name is required."
                        })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register('email', {
                            required:'Valid email is required.'
                        })} type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register('password', {
                            required:'Password is required',
                            pattern:{
                                value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, 
                                message:'Password must contain uppercase, lowercase, special character and number.'
                            },
                            minLength:{
                                value:6, message:'Password must have minimum 6 characters.'
                            }
                        })} type="password" className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text-alt">Forgot password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>

                    <input type="submit" className="btn btn-accent w-full max-w-xs mt-4 text-white uppercase" value="Signup" />


                    <div>
                        {
                            signUpError && <p className='text-red-600 font-bold'>{signUpError}</p>
                        }
                    </div>



                </form>
                <p className='text-secondary label-text'>Already have an account? <Link to={'/login'}>Please login</Link></p>
                <div className="divider">OR</div>

                <button className='btn btn-outline w-full uppercase'>Continue with google</button>

            </div>
        </div>
    );
};

export default SignUp;
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { push } = useHistory();

    const register = () => {
        axios
            .post('http://localhost:1337/api/auth/local/register', {
                username: name,
                email: email,
                password: password,
            })
            .then((response) => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
                localStorage.setItem('token', response.data.jwt);
                localStorage.setItem('username', response.data.user.username);
                push('/');
            })
            .catch((error) => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
    };
    return (
        <>
            <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
                <div className="container mx-auto">
                    <div className="max-w-md mx-auto my-10">
                        <a href="/login"><img src="/back.png" alt="" className="w-6 h-6 ml-6 mb-6" /></a>
                        <div className="text-center">
                            <h1 className="my-3 text-3xl font-semibold text-black dark:text-black">Sign Up</h1>
                        </div>
                        <div className="m-7">
                            <form action="">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                                    <input type="name" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 font-extralight text-sm"
                                        onChange={(event) => {
                                            setName(event.target.value);
                                        }} />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 font-extralight text-sm"
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }} />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 font-extralight text-sm"
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }} />
                                </div>
                                <div className="mb-12">
                                    <a href="/"><button type="button" className="w-full px-3 py-4 text-white bg-deepgreen rounded-md focus:bg-deepgreen focus:outline-none"
                                        onClick={() => {
                                            register();
                                        }}>Sign Up</button></a>
                                </div>
                                <p className="text-sm text-center text-gray-400">Already have an account? <a href="/login" className="text-deepgreen focus:outline-none focus:underline focus:text-deepgreen dark:focus:border-deepgreen">Login</a>.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="fixed bottom-5 w-full text-center text-gray-400">
                ©knhyun
            </div>
        </>
    )
};

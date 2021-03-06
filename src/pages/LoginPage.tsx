import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useHistory();


  const checkUser = () => {
    if (email == '' || password == '') {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    axios
      .post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: password,
      })
      .then((response) => {
        // Handle susccess.
        console.log('Well done!');
        console.log('User token', response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('username', response.data.user.username);
        push('/');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
        alert('아이디와 비밀번호를 다시 확인해주세요.');
      });
  };

  return (
    <>
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-black dark:text-black">Login</h1>
            </div>
            <div className="m-7">
              <form action="">
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className=" font-extralight text-sm w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}

                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className=" font-extralight text-sm w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }} />
                </div>
                <div className="mb-6">
                  <button type="button"
                    className="w-full px-3 py-4 text-white bg-deepgreen rounded-md focus:bg-deepgreen focus:outline-none"
                    onClick={() => {
                      checkUser();
                    }}> Login</button>
                </div>
                <p className="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="/signup" className="text-deepgreen focus:outline-none focus:underline focus:text-deepgreen dark:focus:border-deepgreen">Sign up</a>.</p>
              </form>
            </div>
          </div>
        </div>
      </div>



      <div className="fixed bottom-5 w-full text-center text-gray-400">
        ©knhyun
      </div>
    </>
  );
};

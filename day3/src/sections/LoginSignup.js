import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { AiFillHome } from 'react-icons/ai';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div id="login-signup" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <div 
        className="absolute top-8 left-8 flex items-center cursor-pointer group"
        onClick={() => navigate('/')}
      >
        <AiFillHome className="text-3xl text-blue-500" />
        <span className="ml-2 text-xl text-blue-500 opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300">
          Home
        </span>
      </div>
      <div className="text-3xl font-bold mb-8">
        {isLogin ? 'Login' : 'Signup'}
      </div>
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        {isLogin ? <Login /> : <Signup />}
        <div className="text-center mt-4">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(false)}>
                Signup
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(true)}>
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

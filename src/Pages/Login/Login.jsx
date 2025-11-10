import React, { use } from 'react';
import { Link } from 'react-router';
import AuthContext from '../../Context/AuthContext';

const Login = () => {
    const {googleSignIn, setUser} = use(AuthContext);

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error =>{
            console.log(error.message);
        })
    };

    return (
         <div className="min-h-screen bg-[#111827] flex flex-col justify-center items-center px-4">
      {/* Logo + Name */}
      <div className="flex items-center mb-8">
        <div className="flex items-center justify-center">
          {/* Logo Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-10 h-10 text-[#F97316]"
            fill="currentColor"
          >
            <path d="M10 40 L50 20 L90 40 L50 60 Z M50 60 V80 L90 60 V40 Z" />
          </svg>
          <h1 className="text-[#F97316] text-2xl font-bold ml-2">StudyMate</h1>
        </div>
      </div>

      {/* Card */}
      <div className="bg-[#1F2937] shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-800">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Login to your account
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered w-full bg-[#111827] border-gray-700 text-white focus:border-[#F97316] focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-[#111827] border-gray-700 text-white focus:border-[#F97316] focus:outline-none"
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className=" text-sm">
            
            <a href="#" className="text-[#F97316] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn w-full mt-3 bg-gradient-to-r from-[#F97316]  to-orange-700  text-white border-none"
          >
            Login
          </button>

          {/* Divider */}
          <div className="divider text-gray-500">OR</div>

          {/* Google Login */}
          <button
          onClick={handleGoogleLogin}
          className="btn w-full bg-[#1F2937] border border-gray-700 text-gray-300 hover:border-[#F97316]">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to='/register' href="#" className="text-[#F97316] hover:underline">
            Register now
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Login;
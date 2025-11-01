import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverurl } from '../main';

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleclick = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post(`${serverurl}/signup`, {
        name,
        username,
        email,
        password
      }, { withCredentials: true });

      console.log(result.config.data);
      setName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setErr("");
  
    } catch (error) {
      console.log(error);
      setErr(error.response?.data?.message );
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-400'>
      <div className='w-[400px] h-[620px] max-w-[500px] bg-white rounded-2xl hover:bg-blue-50 hover:shadow-2xl transition-all'>
        <div className='bg-cyan-300 rounded-xl shadow-md hover:bg-cyan-400 hover:shadow-2xl w-full h-[200px] transition-all duration-300 flex justify-center items-center rounded-b-[60px]'>
          <h2 className='text-2xl font-semibold'>RealTime Chat App</h2>
        </div>

        <form onSubmit={handleclick}>
          <div className='flex flex-col gap-6 p-4'>

            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='w-full p-4 rounded-md border-2 h-10'
              type="text"
              placeholder='Name'
              required
            />

            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className='w-full p-4 rounded-md border-2 h-10'
              type="text"
              placeholder='Username'
              required
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='w-full p-4 rounded-md border-2 h-10'
              type="email"
              placeholder='Email'
              required
            />

            <div className='relative'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className='w-full p-3 rounded-md border-2 h-10 pr-16'
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                required
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-600 font-medium'
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

         
            {err && (
              <p className="text-red-600 text-center text-sm font-medium -mt-3">
                {err}
              </p>
            )}

           
            <button
              type="submit"
              className='w-24 mx-auto mt-4 rounded-md h-11 bg-cyan-300 shadow-md hover:bg-cyan-500 hover:shadow-2xl transition-all'
            >
              SignUp
            </button>
          </div>
        </form>

        <p className='text-center mt-4'>
          <button
            onClick={() => navigate("/login")}
            className="font-medium text-blue-700 hover:underline"
          >
            Already have an account? Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;

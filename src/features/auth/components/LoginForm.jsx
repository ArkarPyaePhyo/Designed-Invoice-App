import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import useCookie from 'react-use-cookie';
import { login as loginUser } from '../../../services/Auth';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const [userToken,setUserToken]= useCookie('my-token');
  const [userInfo,setUserInfo]= useCookie('user-info');

  const navigate = useNavigate();
  const {register,handleSubmit,reset} = useForm();

  const logInSubButton =async(data)=>{

      const res = await loginUser(data);

      const json = await res.json();

      if(res.status === 200){
          toast.success("Login Successful");
          navigate("/dashboard");
          setUserToken(json.token);
          setUserInfo(JSON.stringify(json.user))
      }else{
          toast.error(json.message)
      }
  }
  return (
    <form onSubmit={handleSubmit(logInSubButton)} className="space-y-4 md:space-y-6" action="#">
          
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input {...register('email')} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="company@gmail.com" required />
    </div>
    <div>
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
      <input {...register('password')} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"  />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
        </div>
      </div>
      <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
    </div>
    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
      Don't have an account yet? <Link to={'/register'} className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</Link>
    </p>
  </form>
  )
}

export default LoginForm
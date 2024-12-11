import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { register as registerUser } from '../../../services/Auth';
import toast from 'react-hot-toast';

const RegisterForm = () => {

      
  const navigate = useNavigate();
  const {register,handleSubmit} = useForm();

  const accSubButton =async(data)=>{

      const res = await registerUser(data);

      const json = await res.json();

      if(res.status === 200){
          toast.success(json.message);
          navigate("/login");
      }else{
          toast.error(json.message)
      }
  }

  return (
    <form onSubmit={handleSubmit(accSubButton)} className="space-y-4 md:space-y-6" action="#">
    <div>
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
      <input {...register('name')} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
    </div>
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input {...register('email')} type="email" email="email" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="company@gmail.com" required />
    </div>
    <div>
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
      <input {...register('password')} type="password" name="password" id="password" placeholder="•••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    <div>
      <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
      <input {...register('password_confirmation')} type="password" name="password_confirmation" id="password_confirmation" placeholder="•••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="#">Terms and Conditions</a></label>
      </div>
    </div>
    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
    <div className="text-sm font-light text-gray-500 dark:text-gray-400">
      Already have an account? <Link to={"/login"}  className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</Link> 
    </div>
  </form>
  )
}

export default RegisterForm
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      {/* login container */}
      <div className='bg-cyan-100 flex rounded-2xl w-full h-full shadow-lg max-w-[1200px] mx-auto p-'>
        {/* left */}
        <div className="w-full sm:w-1/2 px-8 flex flex-col items-center justify-center">
          <h1 className='text-3xl font-bold text-blue-900'>Login</h1>
          <p className='text-xs  text-blue-900 mb-3'>If you already a member, easily log in</p>
          <form action='' className='flex flex-col items-center justify-center'>
            <input className='p-2 w-[18rem] my-2 class rounded-xl border' type='Gmail' name='email' placeholder='Email' />
            <input className='p-2 my-2 w-[18rem] class rounded-xl border' type='password' name='password' placeholder='password' />
            <button className='p-2 my-2 w-[18rem] rounded-xl bg-black text-white hover:bg-white hover:text-blue-900'>Login</button>
          </form>
          <div className='flex flex-row items-center justify-center w-[18rem]'>
            <div className='bg-black w-2/3 h-1 mt-3 border border-black'></div>
            <div className='text-xs ml-2'><a href=''><span>Forget password</span></a></div>
            <div></div>
          </div>
          <div className='sm:hidden flex items-center flex-col justify-center'>
            <p className='mt-4'>If you dont have account Register</p>
            <Link to='/register'>
              <button className='p-2 my-2 w-[18rem] rounded-xl border border-black text-blue-950 hover:bg-black hover:text-white'>Register</button>
            </Link>
          </div>
        </div>
        {/* right */}
        <div className='hidden sm:w-1/2 sm:flex items-center justify-center'>
          <div className='hidden sm:flex flex-col items-center justify-center border border-blue-300 w-full h-full p-5 rounded-2xl bg-blue-100'>
            <h1 className='text-2xl p-2 text-blue-950 my font-bold'>Welcome to CEA!</h1>
            <p className='mb-6'>Lorem ipsum, dolor sit amet consec</p>
            <p>Lore tempore ma quibusdam earum blanditiis, repellat voluptatem ipsum?</p>
            <p className='mt-4'>If you dont have account Register</p>
            <Link to='/register'>
              <button className='p-2 my-2 w-[18rem] rounded-xl border border-black text-blue-950 hover:bg-black hover:text-white'>Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

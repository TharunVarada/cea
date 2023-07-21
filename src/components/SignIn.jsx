import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Phone, setPhone] = useState();
  const [BirthDate, setBirthDate] = useState();
  const [Institute, setInstitute] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/register', { FirstName, LastName, Phone, BirthDate, Institute, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-cyan-100 border border-blue-200 flex flex-col items-center justify-center rounded-2xl w-full h-full shadow-lg max-w-[1200px] mx-auto p-6'>
        <h1 className='text-3xl font-bold'>Register</h1>
        <p className='text-xs mt-1'>Greetings for Cea! Participate and win!</p>
        <form onSubmit={handleSubmit}>
          <div className='input flex w-full flex-col border border-blue-200 mt-2 p-3 items-center justify-center'>
            <div className='my-2 grid grid-cols-2 gap-5'>
              <input type='text' className='p-2' placeholder='First Name' name='First Name' onChange={(e) => setFirstName(e.target.value)} />
              <input type='text' className='p-2' placeholder='Last Name' name='Last Name' onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='my-2 w-full'>
              <input className='w-full p-2' type='email' placeholder='Gmail' name='Email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='my-2 grid grid-cols-2 gap-5 w-full'>
              <input type='tel' className='p-2' placeholder='Phone Number' name='Phone Number' onChange={(e) => setPhone(e.target.value)} />
              <input type='date' className='p-2' placeholder='Birth Date' name='Birth Date' onChange={(e) => setBirthDate(e.target.value)} />
            </div>
            <div className='my-2 w-full'>
              <select className='w-full p-2' id='cars' name='cars' onChange={(e) => setInstitute(e.target.value)}>
                <option value='' disabled selected>
                  Insti name
                </option>
                <option value='volvo'>IIT M</option>
                <option value='saab'>IIT kgp</option>
                <option value='fiat'>IIT Bhu</option>
                <option value='audi'>IIT R</option>
              </select>
            </div>
            <div className='my-2 w-full grid grid-cols-2 gap-5'>
              <input type='password' className='p-2' placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)} />
              <input
                type='password'
                className='p-2'
                placeholder='Confirm Password'
                name='confirmPassword'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className='p-2 w-5/6 mt-3 border rounded-2xl shadow-lg border-black bg-slate-600 text-white' type='submit'>
              Register
            </button>
          </div>
        </form>
        <div className='border h-1 bg-black w-5/6'></div>
        <p className='mt-2'>If you already have an account, login</p>
        <Link to='/login'>
          <button className='p-2 w-[20rem] border rounded-2xl shadow-lg border-black hover:bg-slate-600 hover:text-white' type='submit'>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;

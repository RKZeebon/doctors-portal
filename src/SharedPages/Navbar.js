import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 text-accent lg:w-5/6 mx-auto">

            <div class="navbar-start">
                <div class="avatar px-3 lg:hidden">
                    <div tabindex="0" class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" alt='Avater' />
                    </div>

                </div>
                <Link to='/' class="text-2xl font-bold whitespace-nowrap hidden lg:block">Doctors Portal</Link>
            </div>
            <Link to='/' class="text-2xl font-bold whitespace-nowrap lg:hidden">Doctors Portal</Link>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li className='mx-1'><NavLink to='/'>Home</NavLink></li>
                    <li className='mx-1'><NavLink to='/about'>About</NavLink></li>
                    <li className='mx-1'><NavLink to='/appointment'>Appointment</NavLink></li>
                    <li className='mx-1'><NavLink to='/reviews'>Reviews</NavLink></li>
                    <li className='mx-1'><NavLink to='/contact'>Contact Us</NavLink></li>
                    <li className='mx-1'><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </div>
            <div class="navbar-end">
                <div class="avatar px-3 hidden lg:block">
                    <div tabindex="0" class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" alt='Avater' />
                    </div>

                </div>
            </div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content dropdown-end mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li className='my-1'><NavLink to='/'>Home</NavLink></li>
                    <li className='my-1'><NavLink to='/about'>About</NavLink></li>
                    <li className='my-1'><NavLink to='/appointment'>Appointment</NavLink></li>
                    <li className='my-1'><NavLink to='/reviews'>Reviews</NavLink></li>
                    <li className='my-1'><NavLink to='/contact'>Contact Us</NavLink></li>
                    <li className='my-1'><NavLink to='/login'>Login</NavLink></li>
                    <li className='my-1'><NavLink to='/logout'>Log Out</NavLink></li>
                </ul>
            </div>


        </div>
    );
};

export default Navbar;
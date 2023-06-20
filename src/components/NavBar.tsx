// import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='bg-black h-24'>
            <div className='flex justify-center items-center h-full'>
            <ul className='flex items-center gap-[3vw]'>
                <li><Link to='/' type='button' className='bg-black font-bebas hover:underline text-3xl text-white hover:text-FitYellow'>Home</Link></li>
                <li><Link to='/reviews' type='button' className='bg-black font-bebas hover:underline text-3xl text-white hover:text-FitYellow'>Reviews</Link></li>
                <li><Link to='/used-gear' type='button' className='bg-black font-bebas hover:underline text-3xl text-white hover:text-FitYellow'>Used Gear</Link></li>
                <li><Link to='/login-signup' type='button' className='bg-black font-bebas hover:underline text-3xl text-white hover:text-FitYellow'>Login/Sign-Up</Link></li>
            </ul>
            </div>
        </nav>
    );
}

export default NavBar;
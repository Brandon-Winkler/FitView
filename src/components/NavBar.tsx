// import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='bg-white h-24'>
            <div className='flex justify-center items-center h-full'>
            <ul className='flex items-center gap-[3vw]'>
                <li><Link to='/' type='button' className='bg-white font-bebas hover:underline text-3xl'>Home</Link></li>
                <li><Link to='/reviews' type='button' className='bg-white font-bebas hover:underline text-3xl'>Reviews</Link></li>
                <li><Link to='/used-gear' type='button' className='bg-white font-bebas hover:underline text-3xl'>Used Gear</Link></li>
                <li><Link to='/login-signup' type='button' className='bg-white font-bebas hover:underline text-3xl'>Login/Sign-Up</Link></li>
            </ul>
            </div>
        </nav>
    );
}

export default NavBar;
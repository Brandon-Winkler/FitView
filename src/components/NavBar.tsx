import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='h-24 z-10 sticky top-0'>
            <div className='flex justify-center items-center h-full'>
            <ul className='flex items-center gap-[3vw]'>
                <li><Link to='/' type='button' className='bg-transparent font-bebas hover:underline text-3xl text-white hover:text-FitYellow'>Home</Link></li>
                <li><Link to='/used-gear' type='button' className='bg-transparent font-bebas hover:underline text-3xl text-white hover:text-FitYellow'>Post Used Gear</Link></li>
                <li><Link to='/login-signup' type='button' className='bg-transparent font-bebas hover:underline text-3xl text-white hover:text-FitYellow'>Login/Sign-Up</Link></li>
            </ul>
            </div>
        </nav>
    );
};

export default NavBar;
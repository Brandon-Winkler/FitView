// import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const ReviewsPage = () => {
    return (
        <>
            <div>
                <div className='pl-10 pt-10 flex flex-row'>
                    <h1 className="pt-3 text-xl opacity-50">Home /</h1>
                    <h1 className=" pl-6 text-6xl font-bebas">Reviews</h1>
                </div>
                <SideBar></SideBar>
            </div>
            <div className='absolute top-0 left-0 w-full z-10 bg-black'>
                <NavBar></NavBar>
            </div>
        </>
    );
}

export default ReviewsPage;

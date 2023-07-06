import NavBar from '../components/NavBar';
import UserAuth from '../components/UserAuth';
import authImage from "../assets/authImage.jpg"

const LoginSignupPage = () => {
    return (
        <>
            <div className='top-0 left-0 w-full z-10 bg-black'>
                <NavBar></NavBar>
            </div>
            <div className='relative'>
                <img src={authImage} className='w-full h-full' alt='Authentication' />
                <div className='absolute top-0 left-0 w-full h-full z-20'>
                    <div className="pt-40">
                        <UserAuth></UserAuth>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginSignupPage;

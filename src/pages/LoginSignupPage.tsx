import NavBar from '../components/NavBar';
import UserAuth from '../components/UserAuth';

const LoginSignupPage = () => {
    return (
        <>
            <div className='top-0 left-0 w-full z-10 bg-black'>
                <NavBar></NavBar>
            </div>
            <div className="pt-32">
                <UserAuth></UserAuth>
            </div>
        </>
    );
}

export default LoginSignupPage;

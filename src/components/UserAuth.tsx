const UserAuth = () => {

    return (
        <div className="w-96 h-[32rem] z-20 bg-black m-auto">
            <div className="w-full h-[80px] bg-red-500 flex items-center justify-center relative">
                <div className="absolute top-0 left-0 bg-white w-1/2 h-[80px]"></div>
                <button type="button" className="cursor-pointer font-bebas p-14 text-4xl z-10 ">LogIn</button>
                <button type="button" className="cursor-pointer font-bebas p-14 text-4xl z-10">SignIn</button>
            </div>
            <form action="" className="">
                <label htmlFor="username" className="text-white">Username:</label><br />
                <input type="text" />
                <label htmlFor="password" className="text-white">Password:</label><br />
                <input type="text" />
            </form>
        </div>
    );
}

    export default UserAuth;
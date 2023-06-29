const UserAuth = () => {

    return (
        <div className="w-96 h-[32rem] z-20 bg-black m-auto">
            <div className="w-full h-[80px] bg-black flex items-center justify-center relative">
                <div className="flex justify-center w-1/2 h-full">
                    <button type="button" className="w-full cursor-pointer font-bebas px-8 py-4 text-2xl z-10 bg-black text-white hover:underline hover:invert">
                        LogIn
                    </button>
                </div>
                <div className="flex justify-center w-1/2 h-full">
                    <button type="button" className="w-full cursor-pointer font-bebas px-8 py-4 text-2xl z-10 bg-black text-white hover:underline hover:invert">
                        Sign-up
                    </button>
                </div>
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
const UserAuth = () => {

    return (
        <div className="w-96 h-[32rem] z-20 bg-white border-black border-8 m-auto">
            <div className="w-full h-[80px] bg-black flex items-center justify-center relative">
                <div className="flex justify-center w-1/2 h-full">
                    <button type="button" className="w-full cursor-pointer font-bebas px-8 py-4 text-2xl z-10 bg-black text-white hover:underline hover:invert focus:invert">
                        LogIn
                    </button>
                </div>
                <div className="flex justify-center w-1/2 h-full">
                    <button type="button" className="w-full cursor-pointer font-bebas px-8 py-4 text-2xl z-10 bg-black text-white hover:underline hover:invert focus:invert">
                        Sign-up
                    </button>
                </div>
            </div>
            <div className="flex">
                <form id="login" className="flex flex-col pt-8 ml-[71px]">
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='Username' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='Password' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center pt-8">
                        <button type="submit" className="bg-black text-white px-8 py-2 rounded font-roboto">Log In</button>
                    </div>
                </form>
                <form id="sign_up" className="flex flex-col pt-8 ml-56 overflow-hidden">
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='First Name' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='Last Name' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='Username' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center py-4 pt-4 h-16">
                        <input type="text" placeholder='Password' className="border-b-2 border-black" />
                    </div>
                    <div className="flex justify-center pt-8">
                        <button type="submit" className="bg-black text-white px-8 py-2 rounded font-roboto">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserAuth;
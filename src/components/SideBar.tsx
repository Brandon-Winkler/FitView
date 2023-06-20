import { useState } from "react";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {!isOpen ?
                (
                    <button onClick={() => setIsOpen(!isOpen)}>not open</button>
                ) :
                (
                    <button className="text-white z-50 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>x</button>
                )
            }
            <div
                className={`top-0 left-0 w-[15vw] bg-blue-600 text-white fixed h-full z-40  ease-in-out duration-300 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`} >
                <button
                    className="text-white z-50 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                >
                    x
                </button>
                <h1 className="text-4xl font-semibold text-white">I am a sidebar</h1>
            </div>

        </>


    );
};

export default SideBar;

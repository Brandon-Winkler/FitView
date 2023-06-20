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
                    <button className="text-white" onClick={() => setIsOpen(!isOpen)}>x</button>
                )
            }
            <div
                className={`top-0 left-0 w-[15vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 
                ${isOpen ? "translate-x-0 " : "translate-x-full"}`}
            >
                <h1 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h1>
            </div>

        </>


    );
};

export default SideBar;

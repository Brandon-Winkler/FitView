import { useState } from "react";
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <h1 className="text-xl opacity-50 pl-10 py-5">Home /</h1>
            <h1 className="pl-10 text-6xl font-bebas">Reviews</h1>
            {!isOpen ?
                (
                    <div className="pl-10">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="border-2 border-black rounded-none w-12 h-12"
                        >
                            <FontAwesomeIcon icon={faFilter} className="text-black text-2xl" />
                        </button>
                    </div>
                ) :
                (
                    <button className="text-white z-50 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>x</button>
                )
            }

            <div
                className={`top-0 left-0 w-[20vw] bg-white fixed h-full z-40  ease-in-out duration-300 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`} >
                    <h1 className="text-4xl font-semibold text-black pl-5 pt-5">Filters</h1>
                <button
                    className="text-white z-50 cursor-pointer pl-5 bg-black justify-end"
                    onClick={() => setIsOpen(false)}
                >
                    x
                </button>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 ${
                    isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
            />
        </>


    );
};

export default SideBar;

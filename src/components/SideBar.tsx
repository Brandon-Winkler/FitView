import { useState } from "react";
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
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
                    <div className="border-b-2 border-black">
                        <h1 className="text-4xl font-semibold text-black pl-5 py-5">Filters</h1>
                    </div>
                    <div className="border-b-2 pb-5">
                        <h1 className="text-lg pl-5 py-4 font-medium">Category</h1>
                        <ul className="pl-5">
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Barbells </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Weights </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Benches </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Dumbbells </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Racks </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Machines </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Conditioning </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Strongman </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Crossfit</button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Gymnastics </button>
                        </ul>
                    </div>
                    <div className="border-b-2 pb-5">
                        <h1 className="text-lg pl-5 py-4 font-medium">Brands</h1>
                        <ul className="pl-5">
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Rogue </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Rep </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Sorinex </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Titan </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Peloton </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">EliteFTS </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">NordicTrack </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">LifeFitness </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">Eleiko </button>
                            <button className="transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white hover:invert">TRX </button>
                        </ul>
                    </div>
                    <div className="border-b-2 pb-5">
                        <h1 className="text-lg pl-5 py-4 font-medium">Ratings</h1>
                        <ul className="pl-5 flex flex-col items-start">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <div>
                                <input type="checkbox" />
                            </div>
                            <div>
                                <input type="checkbox" />
                            </div>
                            <div>
                                <input type="checkbox" />
                            </div>
                            <div>
                                <input type="checkbox" />
                            </div>
                            
                        </ul>
                    </div>
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

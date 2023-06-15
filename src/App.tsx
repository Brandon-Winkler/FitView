import { useState } from 'react';
// import { Link } from "react-router-dom";
import './index.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { RxDotFilled } from 'react-icons/rx';
import welcomeImage from './assets/welcome.png';
import weightsImage from './assets/weights.png';
import racksImage from './assets/racks.png';
import machinesImage from './assets/machines.png';
import attatchmentsImage from './assets/attatchments.png';
import NavBar from './components/NavBar';

interface Slide {
  img: string;
}

function App() {
  const slides: Slide[] = [
    {
      img: welcomeImage,
    },
    {
      img: weightsImage,
    },
    {
      img: racksImage,
    },
    {
      img: attatchmentsImage,
    },
    {
      img: machinesImage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <>
      <NavBar></NavBar>
      <div className='max-w h-[700px] relative group'>
        <div style={{ backgroundImage: `url(${slides[currentIndex].img})` }} className='w-full h-full bg-center bg-cover duration-500'></div>
        {/* left arrow */}
        <button className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 cursor-pointer'>
          <FontAwesomeIcon icon={faChevronLeft} className='text-FitYellow' onClick={prevSlide}/>
        </button>
        {/* right arrow */}
        <button className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 cursor-pointer'>
          <FontAwesomeIcon icon={faChevronRight} className='text-FitYellow' onClick={nextSlide}/>
        </button>
        <div className='absolute bottom-0 left-0 right-0 w-full flex justify-center py-2'>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-3xl cursor-pointer rounded-full ${currentIndex === slideIndex ? 'text-FitYellow' : 'text-gray-500/50'}`}
            >
              <RxDotFilled className='hover:text-FitYellow mx-1'/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

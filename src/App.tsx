// import { useState } from 'react';
import './index.css';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
// import { RxDotFilled } from 'react-icons/rx';
// import welcomeImage from './assets/welcome.png';
// import weightsImage from './assets/weights.png';
// import racksImage from './assets/racks.png';
// import machinesImage from './assets/machines.png';
// import attatchmentsImage from './assets/attatchments.png';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import WelcomeVid from './assets/welcome.mp4'

// interface Slide {
//   img: string;
// }

function App() {
  // const slides: Slide[] = [
  //   {
  //     img: welcomeImage,
  //   },
  //   {
  //     img: weightsImage,
  //   },
  //   {
  //     img: racksImage,
  //   },
  //   {
  //     img: attatchmentsImage,
  //   },
  //   {
  //     img: machinesImage,
  //   },
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToSlide = (slideIndex: any) => {
  //   setCurrentIndex(slideIndex);
  // };


  return (
    <>
      {/* <div className='max-w h-[200px] relative group'> */}
        <video className='max-w' autoPlay loop>
          <source src={WelcomeVid} type="video/mp4" />
        </video>
      {/* </div> */}
      <div className='absolute top-0 left-0 w-full z-10 hover:bg-black transition-all duration-300'>
        <NavBar></NavBar>
      </div>
      <h1 className="text-center font-roboto py-10 text-2xl">Recent Activity</h1>
      <SideBar></SideBar>
    </>
  )
}

export default App

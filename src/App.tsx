import './index.css';
import welcomeImage from './assets/welcome.png';
import weightsImage from './assets/weights.png';
import racksImage from './assets/racks.png';
import machinesImage from './assets/machines.png';
import attatchmentsImage from './assets/attatchments.png';



function App() {
  const slides = [
    {
      img: welcomeImage
    },
    {
      img: weightsImage
    },
    {
      img: racksImage
    },
    {
      img: attatchmentsImage
    },
    {
      img: machinesImage
    },
  ];
  
  return (
    <>
      <nav className='bg-white h-24'>
        <div className='flex justify-center items-center h-full'>
          <ul className='flex items-center gap-[3vw]'>
            <li><button type='button' className='bg-white font-bebas hover:underline text-3xl'>Reviews</button></li>
            <li><button type='button' className='bg-white font-bebas hover:underline text-3xl'>Used Gear</button></li>
            <li><button type='button' className='bg-white font-bebas hover:underline text-3xl'>Login/Sign-Up</button></li>
          </ul>
        </div>
      </nav>
      <div className='w-max h-[461px]'>
        <div style={{ backgroundImage: `url(${slides[0].img})` }} className='w-full h-full'>

        </div>
      </div>
    </>
  )
}

export default App

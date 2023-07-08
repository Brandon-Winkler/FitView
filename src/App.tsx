import './index.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import WelcomeVid from './assets/welcome.mp4'

function App() {

  return (
    <>
      <div className='max-w relative'>
        <video className='max-w' autoPlay loop>
          <source src={WelcomeVid} type="video/mp4" />
        </video>
      </div>
      <div className='absolute top-0 left-0 w-full z-10 hover:bg-black transition-all duration-300'>
        <NavBar></NavBar>
      </div>
      <h1 className="text-center font-roboto py-10 text-2xl">Recent Uploads</h1>
      <SideBar></SideBar>

    </>
  )
}

export default App

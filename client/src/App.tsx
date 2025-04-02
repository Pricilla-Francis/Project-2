import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <main className='container pt-5'>
        <Outlet />
      </main>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App

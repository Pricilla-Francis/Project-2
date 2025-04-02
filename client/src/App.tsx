import { Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main className='container pt-5'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App

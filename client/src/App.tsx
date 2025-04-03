import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Motto from './components/Motto.js';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Motto/>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App

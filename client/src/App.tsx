import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Motto from './components/Motto';

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

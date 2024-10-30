import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Auth from './pages/Auth';
import { useAuth } from './context/AuthContext';
import Footer from './components/Footer';

function App() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
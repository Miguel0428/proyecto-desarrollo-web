import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">I.E MANUEL JOSE GOMEZ SERNA</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
            <Link to="/news" className="text-gray-700 hover:text-blue-600">Noticias y Eventos</Link>
            {user ? (
              <>
                <span className="text-gray-700">Bienvenido, {user.name}</span>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-blue-600"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>

        
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/news"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Noticias y Eventos
            </Link>
            {user ? (
              <>
                <span className="block px-3 py-2 text-gray-700">
                  Bienvenido, {user.name}
                </span>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
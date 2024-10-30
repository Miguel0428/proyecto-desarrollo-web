import { Building2, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-bold text-lg">Instituto Moderno</span>
            </div>
            <p className="mt-2 text-sm text-blue-100">
              Comprometidos con la excelencia educativa y el desarrollo integral de nuestros estudiantes.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contacto</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2 text-blue-100">
                <Mail className="h-5 w-5" />
                <span>contacto@institutomoderno.edu</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <Phone className="h-5 w-5" />
                <span>+1 234 567 890</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Enlaces Rápidos</h3>
            <div className="mt-4 space-y-2">
              <p className="text-blue-100 hover:text-white cursor-pointer">Política de Privacidad</p>
              <p className="text-blue-100 hover:text-white cursor-pointer">Términos y Condiciones</p>
              <p className="text-blue-100 hover:text-white cursor-pointer">Mapa del Sitio</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800">
          <p className="text-center text-sm text-blue-100">
            © {new Date().getFullYear()} Instituto Moderno. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
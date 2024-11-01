import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenidos a Nuestra Institución
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Formando líderes del mañana con educación de calidad y valores sólidos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Excelencia Académica",
            description: "Programas educativos de alta calidad con profesores expertos",
            image: "https://media.master2000.net/fotos/300//209459%202.JPG"
          },
          {
            title: "Instalaciones Modernas",
            description: "Espacios diseñados para optimizar el aprendizaje",
            image: "https://media.master2000.net/fotos/300//18301Visita%20autor%20serenata.jpg"
          },
          {
            title: "Desarrollo Integral",
            description: "Actividades deportivas, culturales y tecnológicas",
            image: "https://media.master2000.net/fotos/300//22643TORNEO%2017.jpg"
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-lg shadow-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          ¿Listo para ser parte de nuestra comunidad?
        </h2>
        <p className="text-blue-100 mb-6">
          Únete a nuestra institución y comienza tu camino hacia el éxito
        </p>
        <Link
          to="/auth"
          className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
        >
          Registrarse
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
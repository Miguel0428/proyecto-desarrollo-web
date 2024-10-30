import { useState } from 'react';
import { Calendar, Image as ImageIcon, X } from 'lucide-react';

export default function News() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const news = [
    {
      id: 1,
      title: "Ceremonia de Graduación 2024",
      date: "2024-03-15",
      image: "https://media.master2000.net/fotos/300//25836EXPO%208.jpg",
      content: "Celebramos el éxito de nuestra última generación de graduados..."
    },
    {
      id: 2,
      title: "Feria de Ciencias Anual",
      date: "2024-03-20",
      image: "https://media.master2000.net/fotos/300//208035.jpg",
      content: "Los estudiantes presentaron proyectos innovadores en diversas áreas..."
    },
    {
      id: 3,
      title: "Competencia Deportiva Interescolar",
      date: "2024-03-25",
      image: "https://media.master2000.net/fotos/300//22643TORNEO%2017.jpg",
      content: "Nuestros equipos deportivos destacaron en múltiples disciplinas..."
    }
  ];

  const gallery = [
    "https://media.master2000.net/fotos/300//5909510%c2%ba1.jpg",
    "https://media.master2000.net/fotos/300//5909610%c2%ba2.jpg",
    "https://media.master2000.net/fotos/300//5909711%c2%ba1.jpg",
    "https://media.master2000.net/fotos/300//5909811%c2%ba2.jpg",
    "https://media.master2000.net/fotos/300//590866%c2%ba1.jpg",
    "https://media.master2000.net/fotos/300//590876%c2%ba2.jpg"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* News Section */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Noticias y Eventos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {news.map((item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(item.date).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <ImageIcon className="h-6 w-6 mr-2" />
          Galería de Imágenes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-full object-cover transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected gallery image"
              className="max-h-[90vh] w-auto"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
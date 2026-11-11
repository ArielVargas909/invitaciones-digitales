import { motion } from 'framer-motion';
import { Users, Images, Heart } from 'lucide-react';
import config from '../data/config.json';

export default function Gallery() {
  const { gallery, honorees } = config;

  return (
    <div className="flex flex-col justify-center min-h-full px-5 py-10 max-w-md mx-auto w-full">
      {/* Encabezado */}
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-[0.25em] botanical-accent mb-1">
          Familia & Recuerdos
        </p>
        <h2 className="font-script text-4xl md:text-5xl botanical-accent">
          Padrinos & Galería
        </h2>
      </div>

      {/* Sección 1: Corte de Honor / Padrinos */}
      {honorees && honorees.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="botanical-card rounded-2xl p-5 shadow-sm mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-4 botanical-accent">
            <Users className="w-4 h-4" />
            <h3 className="font-serif text-base md:text-lg uppercase tracking-widest">
              Corte de Honor & Padrinos
            </h3>
          </div>

          <ul className="space-y-3 text-center">
            {honorees.map((person, idx) => {
              const parts = person.includes(':') ? person.split(':') : [null, person];
              return (
                <li
                  key={idx}
                  className="border-b border-current/10 last:border-0 pb-2.5 last:pb-0"
                >
                  {parts[0] && (
                    <span className="block text-[11px] uppercase tracking-widest botanical-accent font-semibold mb-0.5">
                      {parts[0].trim()}
                    </span>
                  )}
                  <span className="font-serif text-sm md:text-base">
                    {parts[1].trim()}
                  </span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}

      {/* Sección 2: Cuadrícula de Fotos (Gallery) */}
      {gallery && gallery.length > 0 && (
        <div>
          <div className="flex items-center justify-center gap-2 mb-3 botanical-accent">
            <Heart className="w-4 h-4" />
            <h3 className="font-serif text-sm uppercase tracking-widest">
              Nuestros Momentos
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {gallery.map((imgUrl, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative overflow-hidden rounded-2xl botanical-card shadow-sm flex items-center justify-center ${
                  idx % 3 === 0 && gallery.length > 2 ? 'col-span-2 h-44' : 'h-40'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Recuerdo ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 pointer-events-none -z-10">
                  <Images className="w-6 h-6 botanical-accent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

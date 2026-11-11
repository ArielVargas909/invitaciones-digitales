import { motion } from 'framer-motion';
import { Clock, Music, PartyPopper } from 'lucide-react';
import config from '../data/config.json';

export default function Itinerary() {
  const { timeline, entertainment } = config;

  return (
    <div className="flex flex-col justify-center min-h-full px-5 py-10 max-w-md mx-auto w-full">
      {/* Encabezado */}
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-[0.25em] botanical-accent mb-1">
          Programa del Día
        </p>
        <h2 className="font-script text-4xl md:text-5xl botanical-accent">
          Itinerario & Fiesta
        </h2>
      </div>

      {/* Línea de Tiempo Vertical (Timeline) */}
      {timeline && timeline.length > 0 && (
        <div className="relative pl-6 border-l-2 border-current/25 space-y-5 mb-7 ml-2">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="relative"
            >
              {/* Nodo circular de la línea de tiempo */}
              <div
                className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: 'var(--theme-accent)' }}
              />

              <div className="botanical-card p-4 rounded-2xl shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider botanical-accent mb-1">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.time}</span>
                </div>
                <h3 className="font-serif font-semibold text-base md:text-lg leading-snug">
                  {item.activity}
                </h3>
                {item.description && (
                  <p className="text-xs opacity-80 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Sección de Entretenimiento (Música y Juegos/Dinámicas) */}
      {entertainment && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="botanical-card rounded-2xl p-5 shadow-sm space-y-4"
        >
          <h3 className="font-serif text-lg text-center uppercase tracking-widest botanical-accent border-b border-current/10 pb-2">
            Entretenimiento
          </h3>

          {/* Música / Bandas */}
          {entertainment.music && entertainment.music.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2 botanical-accent">
                <Music className="w-4 h-4 shrink-0" />
                <span className="font-serif font-semibold text-sm uppercase tracking-wider">
                  Cartelera Musical
                </span>
              </div>
              <ul className="space-y-1.5 pl-6 text-xs md:text-sm opacity-90 list-disc">
                {entertainment.music.map((group, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {group}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dinámicas / Juegos */}
          {entertainment.games && entertainment.games.length > 0 && (
            <div className="pt-2 border-t border-current/10">
              <div className="flex items-center gap-2 mb-2 botanical-accent">
                <PartyPopper className="w-4 h-4 shrink-0" />
                <span className="font-serif font-semibold text-sm uppercase tracking-wider">
                  Momentos Especiales
                </span>
              </div>
              <ul className="space-y-1.5 pl-6 text-xs md:text-sm opacity-90 list-disc">
                {entertainment.games.map((game, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {game}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

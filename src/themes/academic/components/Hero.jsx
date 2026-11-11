import config from '../data/config.json';
import Countdown from './Countdown';

// Birrete dorado sólido idéntico a la imagen de referencia
const GraduationCapSVG = ({ className }) => (
  <svg viewBox="0 0 240 120" fill="currentColor" className={className}>
    {/* Rombo superior del birrete */}
    <polygon points="120,12 225,52 120,86 15,52" />
    {/* Base craneal curvada */}
    <path d="M68,72 L68,94 C68,105 172,105 172,94 L172,72 L120,89 Z" />
    {/* Borla colgante a la derecha */}
    <path d="M182,42 L186,82" stroke="currentColor" strokeWidth="3" fill="none" />
    <polygon points="186,80 176,108 196,108" />
  </svg>
);

export default function Hero() {
  const { event, locations } = config;
  const mainLocation = locations && locations[0];
  const dateObj = new Date(event.date);

  const weekday = dateObj.toLocaleDateString('es-ES', { weekday: 'long' });
  const month = dateObj.toLocaleDateString('es-ES', { month: 'long' });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 py-10 text-center max-w-lg mx-auto w-full">
      {/* Birrete Dorado */}
      <GraduationCapSVG className="w-40 md:w-48 h-24 academic-accent mb-4 drop-shadow" />

      {/* Subtítulo superior */}
      <p className="font-sans text-xs md:text-sm tracking-wide opacity-90 mb-2 max-w-xs leading-relaxed">
        Acompáñanos a celebrar la graduación de
      </p>

      {/* Nombre / Título Principal en Serif Dorado */}
      <h1 className="font-serif text-3xl md:text-5xl academic-accent font-normal tracking-wide mb-6">
        {event.title}
      </h1>

      {/* Bloque de Fecha en 3 Columnas con Líneas Verticales Doradas */}
      <div className="grid grid-cols-3 items-center w-full max-w-sm my-2">
        <div className="text-right pr-4 font-sans text-sm md:text-base capitalize opacity-90">
          {weekday}
        </div>

        <div
          className="flex flex-col items-center justify-center px-4 py-1 border-x"
          style={{ borderColor: 'var(--theme-accent)' }}
        >
          <span className="font-sans text-xs uppercase tracking-widest opacity-90 mb-1 capitalize">
            {month}
          </span>
          <span className="academic-outlined-number text-5xl md:text-6xl font-bold my-0.5">
            {day}
          </span>
          <span className="font-sans text-[11px] tracking-wider opacity-90 mt-1">
            Promoción {year}
          </span>
        </div>

        <div className="text-left pl-4 font-sans text-sm md:text-base opacity-90">
          {mainLocation ? mainLocation.time : '18:00 hrs'}
        </div>
      </div>

      {/* Lugar y Dirección debajo del bloque de fecha */}
      {mainLocation && (
        <div className="font-sans text-xs md:text-sm space-y-1.5 mt-6 mb-6 opacity-90">
          <p className="font-medium text-sm md:text-base">{mainLocation.name}</p>
          <p className="opacity-75">{mainLocation.address}</p>
        </div>
      )}

      {/* Contador compacto */}
      <div className="w-full max-w-sm mt-1">
        <Countdown />
      </div>
    </div>
  );
}

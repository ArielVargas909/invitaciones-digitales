import config from '../data/config.json';
import Countdown from './Countdown';

// Ilustración de los novios con ramillete de flores blancas en la base (inspirado en imagen 2)
const CoupleWithFloralBouquet = ({ photoUrl }) => (
  <div className="relative flex flex-col items-center mb-3">
    <div className="w-44 h-44 md:w-52 md:h-52 rounded-t-full overflow-hidden flex items-center justify-center">
      {photoUrl ? (
        <img src={photoUrl} alt="Novios" className="w-full h-full object-cover" />
      ) : (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Silueta artística de novios de espaldas */}
          <circle cx="82" cy="52" r="18" fill="#3B302A" />
          <path d="M46,165 C46,105 62,82 82,82 C102,82 118,105 118,165 Z" fill="#1F2421" />
          <circle cx="126" cy="64" r="17" fill="#5A4235" />
          <path d="M100,165 C102,115 112,92 128,92 C144,92 154,115 156,165 Z" fill="#F7F5F0" stroke="#D6D3CD" />
        </svg>
      )}
    </div>

    {/* Bouquet central de 3 flores blancas y hojas de olivo sobre la base de los novios */}
    <svg viewBox="0 0 320 90" className="w-64 md:w-72 -mt-12 z-10 drop-shadow-sm">
      {/* Hojas laterales */}
      <path d="M20,30 Q80,65 160,55 Q240,65 300,30" stroke="#6B8E5A" strokeWidth="2.5" fill="none" />
      <ellipse cx="45" cy="42" rx="16" ry="7" transform="rotate(22 45 42)" fill="#789A64" />
      <ellipse cx="75" cy="52" rx="16" ry="7" transform="rotate(15 75 52)" fill="#5C7C4B" />
      <ellipse cx="275" cy="42" rx="16" ry="7" transform="rotate(-22 275 42)" fill="#789A64" />
      <ellipse cx="245" cy="52" rx="16" ry="7" transform="rotate(-15 245 52)" fill="#5C7C4B" />
      {/* Flor izquierda */}
      <g transform="translate(105, 50) scale(0.75)">
        <circle cx="0" cy="-16" r="15" fill="#FAFAF8" stroke="#E5E5DF" />
        <circle cx="16" cy="-5" r="15" fill="#F2F2EE" stroke="#E5E5DF" />
        <circle cx="10" cy="14" r="15" fill="#FAFAF8" stroke="#E5E5DF" />
        <circle cx="-10" cy="14" r="15" fill="#F2F2EE" stroke="#E5E5DF" />
        <circle cx="-16" cy="-5" r="15" fill="#FAFAF8" stroke="#E5E5DF" />
        <circle cx="0" cy="0" r="6" fill="#4A6B3B" />
      </g>
      {/* Flor derecha */}
      <g transform="translate(215, 50) scale(0.75)">
        <circle cx="0" cy="-16" r="15" fill="#FAFAF8" stroke="#E5E5DF" />
        <circle cx="16" cy="-5" r="15" fill="#F2F2EE" stroke="#E5E5DF" />
        <circle cx="10" cy="14" r="15" fill="#FAFAF8" stroke="#E5E5DF" />
        <circle cx="-10" cy="14" r="15" fill="#F2F2EE" stroke="#E5E5DF" />
        <circle cx="-16" cy="-5" r="15" fill="#FAFAF8" stroke="#E5E5DF" />
        <circle cx="0" cy="0" r="6" fill="#4A6B3B" />
      </g>
      {/* Flor central grande */}
      <g transform="translate(160, 46)">
        <circle cx="0" cy="-18" r="17" fill="#FFFFFF" stroke="#E5E5DF" />
        <circle cx="18" cy="-6" r="17" fill="#F4F4F0" stroke="#E5E5DF" />
        <circle cx="11" cy="15" r="17" fill="#FFFFFF" stroke="#E5E5DF" />
        <circle cx="-11" cy="15" r="17" fill="#F4F4F0" stroke="#E5E5DF" />
        <circle cx="-18" cy="-6" r="17" fill="#FFFFFF" stroke="#E5E5DF" />
        <circle cx="0" cy="0" r="7" fill="#4A6B3B" />
      </g>
    </svg>
  </div>
);

// Icono lineal de Iglesia idéntico a la referencia
const ChurchLineIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9 mx-auto mb-1.5 opacity-80">
    <path d="M24 4V12M20 8H28" />
    <path d="M16 20L24 12L32 20V42H16V20Z" />
    <path d="M8 28L16 24V42H8V28Z" />
    <path d="M32 24L40 28V42H32V24Z" />
    <path d="M21 42V32C21 30.3 22.3 29 24 29C25.7 29 27 30.3 27 32V42" />
  </svg>
);

// Icono lineal de Destello / Recepción idéntico a la referencia
const SparkBurstIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9 mx-auto mb-1.5 opacity-80">
    <path d="M24 6V16M24 32V42M6 24H16M32 24H42" />
    <path d="M11 11L18 18M30 30L37 37M37 11L30 18M18 30L11 37" />
    <circle cx="24" cy="24" r="3" />
  </svg>
);

export default function Hero() {
  const { event, locations, gallery } = config;
  const ceremony = locations && locations[0];
  const reception = locations && locations[1];
  const dateObj = new Date(event.date);

  const weekday = dateObj.toLocaleDateString('es-ES', { weekday: 'long' }).toUpperCase();
  const month = dateObj.toLocaleDateString('es-ES', { month: 'long' }).toUpperCase();
  const day = dateObj.getDate();

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-8 text-center max-w-lg mx-auto w-full">
      {/* Ilustración/Retrato con ramillete floral */}
      <CoupleWithFloralBouquet photoUrl={gallery && gallery[0]} />

      {/* Nombres en caligrafía fina (estilo Brenda & Arturo) */}
      <h1 className="font-script text-5xl md:text-6xl my-1 tracking-wide">
        {event.title}
      </h1>

      {/* Cinta de fecha de 3 bloques con líneas horizontales arriba y abajo */}
      <div className="flex items-center justify-center w-full max-w-md my-4 gap-4">
        <div className="flex-1 border-y border-current/60 py-1.5 text-sm md:text-base font-serif tracking-[0.2em]">
          {weekday}
        </div>
        <div className="text-5xl md:text-6xl font-serif font-normal px-2 leading-none">
          {day}
        </div>
        <div className="flex-1 border-y border-current/60 py-1.5 text-sm md:text-base font-serif tracking-[0.2em]">
          {month}
        </div>
      </div>

      {/* Dos columnas: Ceremonia (Iglesia) y Recepción (Destello) */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md my-3 font-serif text-xs md:text-sm">
        {ceremony && (
          <div className="flex flex-col items-center px-2">
            <ChurchLineIcon />
            <p className="uppercase tracking-wider font-semibold text-[11px] md:text-xs">{ceremony.name}</p>
            <p className="uppercase tracking-wide opacity-80 text-[10px] md:text-xs">{ceremony.address}</p>
            <p className="mt-1 font-semibold">{ceremony.time}</p>
          </div>
        )}
        {reception && (
          <div className="flex flex-col items-center px-2">
            <SparkBurstIcon />
            <p className="uppercase tracking-wider font-semibold text-[11px] md:text-xs">{reception.name}</p>
            <p className="uppercase tracking-wide opacity-80 text-[10px] md:text-xs">{reception.address}</p>
            <p className="mt-1 font-semibold">{reception.time}</p>
          </div>
        )}
      </div>

      {/* Frase final en cursiva caligráfica */}
      <p className="font-script text-3xl md:text-4xl mt-1 mb-3 botanical-accent">
        ¡Te esperamos!
      </p>

      {/* Contador compacto */}
      <div className="w-full max-w-sm">
        <Countdown />
      </div>
    </div>
  );
}

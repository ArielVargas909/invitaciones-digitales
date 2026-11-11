import config from '../data/config.json';
import Countdown from './Countdown';

// Mariposa delicada en tonos rosa pastel y oro rosa (idéntica a la referencia)
const ButterflySVG = ({ className }) => (
  <svg viewBox="0 0 80 70" fill="none" className={className}>
    <path
      d="M38,38 C20,8 2,12 6,32 C9,44 24,46 38,42 Z"
      fill="#FBCFE8"
      stroke="#9D5C63"
      strokeWidth="1.5"
    />
    <path
      d="M42,38 C60,8 78,12 74,32 C71,44 56,46 42,42 Z"
      fill="#FCE7F3"
      stroke="#9D5C63"
      strokeWidth="1.5"
    />
    <path
      d="M38,42 C24,46 14,58 22,64 C30,68 37,56 39,45 Z"
      fill="#F9A8D4"
      stroke="#9D5C63"
      strokeWidth="1.2"
    />
    <path
      d="M42,42 C56,46 66,58 58,64 C50,68 43,56 41,45 Z"
      fill="#FBCFE8"
      stroke="#9D5C63"
      strokeWidth="1.2"
    />
    <line x1="40" y1="28" x2="40" y2="52" stroke="#6B3A3E" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Rosa color durazno/coral para adornar el medallón circular dorado
const PeachRoseBadge = ({ className }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <ellipse cx="22" cy="56" rx="16" ry="8" transform="rotate(-30 22 56)" fill="#4D7C0F" />
    <ellipse cx="58" cy="54" rx="16" ry="8" transform="rotate(30 58 54)" fill="#3F6212" />
    <circle cx="40" cy="38" r="24" fill="#FDBA74" />
    <circle cx="40" cy="38" r="18" fill="#FB7185" />
    <circle cx="39" cy="37" r="11" fill="#F43F5E" />
    <circle cx="38" cy="36" r="5" fill="#FFE4E6" />
  </svg>
);

export default function Hero() {
  const { event, locations, gallery } = config;
  const portraitUrl = gallery && gallery[0];
  const mainLocation = locations && locations[1] ? locations[1] : locations?.[0];

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-8 text-center max-w-lg mx-auto w-full">
      {/* Medallón Circular con Doble Aro Dorado y Flores (estilo imagen 3) */}
      <div className="relative w-52 h-52 md:w-64 md:h-64 mb-4 flex items-center justify-center">
        {/* Aro dorado exterior */}
        <div className="absolute -inset-2 rounded-full border-2 border-[#D4AF37]/80 shadow-[0_0_25px_rgba(212,175,55,0.25)]" />
        {/* Aro dorado interior */}
        <div className="w-full h-full rounded-full border-4 border-[#E5C158] overflow-hidden shadow-xl bg-pink-100">
          {portraitUrl && (
            <img
              src={portraitUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Rosa coral superior izquierda en el borde del medallón */}
        <PeachRoseBadge className="absolute -top-4 left-4 w-16 h-16 drop-shadow" />

        {/* Rosa coral y mariposa inferior derecha en el borde del medallón */}
        <PeachRoseBadge className="absolute -bottom-3 right-2 w-20 h-20 drop-shadow" />
        <ButterflySVG className="absolute bottom-2 right-16 w-12 h-12 transform -rotate-12 drop-shadow" />
      </div>

      {/* Tipografía Dorada 3D "Mis 15 años" con mariposa lateral */}
      <div className="relative flex flex-col items-center my-1">
        <ButterflySVG className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 transform rotate-12 drop-shadow-sm" />
        <span className="font-script gala-gold-3d-text text-5xl md:text-6xl leading-tight px-2">
          Mis
        </span>
        <span className="font-serif italic gala-gold-3d-text text-6xl md:text-7xl font-bold leading-none my-0.5 px-2">
          15
        </span>
        <span className="font-script gala-gold-3d-text text-5xl md:text-6xl leading-tight -mt-1 px-2">
          años
        </span>
      </div>

      {/* Nombre de la Quinceañera y lugar */}
      <h1 className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase gala-accent font-semibold mt-2 mb-1">
        {event.title}
      </h1>
      {mainLocation && (
        <p className="font-sans text-xs tracking-widest uppercase opacity-80 mb-4">
          {mainLocation.name} • {mainLocation.time}
        </p>
      )}

      {/* Contador compacto */}
      <div className="w-full max-w-sm">
        <Countdown />
      </div>
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import config from './data/config.json';
import Hero from './components/Hero';
import Logistics from './components/Logistics';
import Gallery from './components/Gallery';
import Itinerary from './components/Itinerary';
import Location from './components/Location';
import './styles/gala.css';

// Ramillete de Rosas Rosadas/Fucsias con hojas y filigrana dorada para las esquinas (inspirado en imagen 3)
const PinkRosesCorner = ({ className }) => (
  <svg viewBox="0 0 260 260" fill="none" className={className}>
    {/* Filigrana dorada decorativa */}
    <path d="M90,18 C135,10 165,45 140,70 C120,90 95,65 115,45" stroke="#D4AF37" strokeWidth="1.8" fill="none" opacity="0.8" />
    <path d="M18,125 C10,165 40,195 65,170 C82,152 60,130 42,148" stroke="#D4AF37" strokeWidth="1.8" fill="none" opacity="0.8" />

    {/* Hojas verdes de rosal */}
    <path d="M95,45 C135,35 155,55 135,80 C110,95 85,75 95,45 Z" fill="#3F6212" />
    <path d="M35,115 C55,155 35,185 12,165 C0,140 15,105 35,115 Z" fill="#4D7C0F" />
    <path d="M115,95 C150,95 165,120 140,138 C115,148 95,120 115,95 Z" fill="#65A30D" opacity="0.85" />

    {/* Rosa Grande Principal (Esquina) */}
    <g transform="translate(58, 56)">
      <circle cx="0" cy="0" r="54" fill="#F472B6" />
      <circle cx="-4" cy="-4" r="44" fill="#EC4899" />
      <path d="M-32,-10 C-20,-38 25,-38 35,-8 C42,20 12,38 -15,32 C-38,25 -40,2 -32,-10 Z" fill="#F9A8D4" />
      <circle cx="-2" cy="-2" r="26" fill="#DB2777" />
      <path d="M-18,-6 C-8,-22 16,-20 20,-3 C22,12 5,22 -10,18 C-22,12 -22,0 -18,-6 Z" fill="#F472B6" />
      <circle cx="0" cy="0" r="12" fill="#BE185D" />
      <path d="M-6,-2 C-2,-8 6,-8 8,-1 C8,5 2,8 -4,6 Z" fill="#FBCFE8" />
    </g>

    {/* Rosa Mediana Superior */}
    <g transform="translate(128, 30) scale(0.58)">
      <circle cx="0" cy="0" r="42" fill="#F9A8D4" />
      <circle cx="0" cy="0" r="30" fill="#EC4899" />
      <circle cx="0" cy="0" r="16" fill="#BE185D" />
      <circle cx="-2" cy="-2" r="7" fill="#FBCFE8" />
    </g>

    {/* Rosa Mediana Lateral Izquierda */}
    <g transform="translate(30, 128) scale(0.62)">
      <circle cx="0" cy="0" r="42" fill="#F472B6" />
      <circle cx="0" cy="0" r="30" fill="#DB2777" />
      <circle cx="0" cy="0" r="16" fill="#9D174D" />
      <circle cx="-2" cy="-2" r="7" fill="#F9A8D4" />
    </g>

    {/* Rosa Pequeña Pastel Inferior */}
    <g transform="translate(24, 192) scale(0.48)">
      <circle cx="0" cy="0" r="40" fill="#FBCFE8" />
      <circle cx="0" cy="0" r="26" fill="#F472B6" />
      <circle cx="0" cy="0" r="13" fill="#DB2777" />
    </g>
  </svg>
);

const variantStyles = {
  'classic-gold': {
    wrapper: 'variant-classic-gold',
    frameBorder: 'border-[#D4AF37]/65',
    navBtn: 'bg-white/90 border-[#D4AF37]/60 text-[#B8860B] hover:bg-pink-50',
    dotActive: 'bg-[#C58F2B]',
    dotInactive: 'bg-[#C58F2B]/35'
  },
  'neon-garden': {
    wrapper: 'variant-neon-garden',
    frameBorder: 'border-pink-500/45',
    navBtn: 'bg-zinc-900/90 border-pink-500/40 text-pink-400 hover:bg-zinc-800',
    dotActive: 'bg-pink-500',
    dotInactive: 'bg-pink-500/35'
  },
  'starry-night': {
    wrapper: 'variant-starry-night',
    frameBorder: 'border-[#D4AF37]/45',
    navBtn: 'bg-[#1C2541]/90 border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#27345B]',
    dotActive: 'bg-[#D4AF37]',
    dotInactive: 'bg-[#D4AF37]/35'
  }
};

const slides = [Hero, Logistics, Gallery, Itinerary, Location];

export default function GalaTheme() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const variant = config.variant || 'classic-gold';
  const currentStyle = variantStyles[variant] || variantStyles['classic-gold'];
  const CurrentSlideComponent = slides[currentSlide];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className={`gala-theme relative h-[100dvh] w-full overflow-hidden font-serif select-none ${currentStyle.wrapper}`}>
      {/* Marco dorado y rosas en las esquinas en capa estática inferior (z-0) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Marco lineal dorado lateral */}
        <div className={`absolute inset-3 md:inset-5 border-2 rounded-xl ${currentStyle.frameBorder}`} />
        <div className={`absolute inset-4 md:inset-6 border rounded-lg opacity-50 ${currentStyle.frameBorder}`} />

        {/* Rosas esquina superior izquierda */}
        <PinkRosesCorner className="absolute -top-3 -left-3 w-52 h-52 md:w-64 md:h-64 drop-shadow-md" />

        {/* Rosas esquina inferior derecha */}
        <PinkRosesCorner className="absolute -bottom-3 -right-3 w-52 h-52 md:w-64 md:h-64 transform rotate-180 drop-shadow-md" />
      </div>

      {/* Diapositivas en capa superior (z-10) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="relative z-10 h-full w-full overflow-y-auto pb-20 flex items-center justify-center"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Flechas laterales de navegación manual */}
      <button
        onClick={prevSlide}
        aria-label="Anterior"
        className={`fixed left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border shadow-md transition ${currentStyle.navBtn}`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Siguiente"
        className={`fixed right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border shadow-md transition ${currentStyle.navBtn}`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicadores inferiores (puntos) */}
      <div className="fixed bottom-5 left-0 right-0 z-20 flex justify-center items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Ir a diapositiva ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? `w-8 ${currentStyle.dotActive}` : `w-2 ${currentStyle.dotInactive}`
            }`}
          />
        ))}
      </div>
    </div>
  );
}

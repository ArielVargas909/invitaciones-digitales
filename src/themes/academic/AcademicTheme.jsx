import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import config from './data/config.json';
import Hero from './components/Hero';
import Logistics from './components/Logistics';
import Gallery from './components/Gallery';
import Itinerary from './components/Itinerary';
import Location from './components/Location';
import './styles/academic.css';

// Esquina geométrica Art Déco idéntica a la imagen de referencia
const ArtDecoCorner = ({ className }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className}>
    <rect x="2" y="2" width="28" height="28" stroke="currentColor" strokeWidth="1.5" />
    <rect x="10" y="10" width="28" height="28" stroke="currentColor" strokeWidth="1.5" />
    <line x1="30" y1="2" x2="60" y2="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="30" x2="2" y2="60" stroke="currentColor" strokeWidth="1.5" />
    <line x1="38" y1="10" x2="60" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="38" x2="10" y2="60" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const variantStyles = {
  'tech-future': {
    wrapper: 'variant-tech-future',
    navBtn: 'bg-[#1C1C1C]/90 border-[#C8A951]/50 text-[#C8A951] hover:bg-[#292929]',
    dotActive: 'bg-[#C8A951]',
    dotInactive: 'bg-[#C8A951]/30'
  },
  'dawn-art': {
    wrapper: 'variant-dawn-art',
    navBtn: 'bg-[#2D101F]/90 border-[#DFB15B]/50 text-[#DFB15B] hover:bg-[#3D162A]',
    dotActive: 'bg-[#DFB15B]',
    dotInactive: 'bg-[#DFB15B]/30'
  },
  'marble-legacy': {
    wrapper: 'variant-marble-legacy',
    navBtn: 'bg-white/90 border-[#9A7B2C]/50 text-[#9A7B2C] hover:bg-stone-100',
    dotActive: 'bg-[#9A7B2C]',
    dotInactive: 'bg-[#9A7B2C]/30'
  }
};

const slides = [Hero, Logistics, Gallery, Itinerary, Location];

export default function AcademicTheme() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const variant = config.variant || 'tech-future';
  const currentStyle = variantStyles[variant] || variantStyles['tech-future'];
  const CurrentSlideComponent = slides[currentSlide];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className={`academic-theme relative h-[100dvh] w-full overflow-hidden font-serif select-none ${currentStyle.wrapper}`}>
      {/* Marco doble Art Déco estático en capa inferior (z-0) inspirado en la referencia */}
      <div className="pointer-events-none fixed inset-0 z-0 p-3 md:p-6 flex items-center justify-center">
        <div className="relative w-full max-w-xl h-full academic-accent">
          {/* Líneas rectas de conexión del marco doble */}
          <div className="absolute inset-[2px] border-[1.5px] border-current opacity-85" />
          <div className="absolute inset-[10px] border-[1.5px] border-current opacity-85" />
          {/* Esquinas geométricas entrelazadas */}
          <ArtDecoCorner className="absolute top-0 left-0 w-14 h-14" />
          <ArtDecoCorner className="absolute top-0 right-0 w-14 h-14 transform scale-x-[-1]" />
          <ArtDecoCorner className="absolute bottom-0 left-0 w-14 h-14 transform scale-y-[-1]" />
          <ArtDecoCorner className="absolute bottom-0 right-0 w-14 h-14 transform scale-[-1]" />
        </div>
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
      <div className="fixed bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-2">
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

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import config from './data/config.json';
import Decorations from './components/Decorations';
import Hero from './components/Hero';
import Logistics from './components/Logistics';
import Gallery from './components/Gallery';
import Itinerary from './components/Itinerary';
import Location from './components/Location';
import './styles/botanical.css';

const variantStyles = {
  crystal: {
    wrapper: 'variant-crystal text-[#1F2421]',
    navBtn: 'bg-white/90 text-[#5C7457] border-[#5C7457]/30',
    dotActive: 'bg-[#5C7457]',
    dotInactive: 'bg-[#5C7457]/35'
  },
  velvet: {
    wrapper: 'variant-velvet bg-[#0D1627] text-slate-100',
    navBtn: 'bg-[#14213B]/90 text-[#D4AF37] border-[#D4AF37]/40',
    dotActive: 'bg-[#D4AF37]',
    dotInactive: 'bg-[#D4AF37]/35'
  },
  minimalist: {
    wrapper: 'variant-minimalist bg-[#F4F3F0] text-stone-800',
    navBtn: 'bg-white text-[#C26D53] border-[#C26D53]/30',
    dotActive: 'bg-[#C26D53]',
    dotInactive: 'bg-[#C26D53]/35'
  }
};

const slides = [Hero, Logistics, Gallery, Itinerary, Location];

export default function BotanicalTheme() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const variant = config.variant || 'crystal';
  const currentStyle = variantStyles[variant] || variantStyles.crystal;
  const CurrentSlideComponent = slides[currentSlide];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className={`botanical-theme relative h-[100dvh] w-full overflow-hidden font-sans select-none ${currentStyle.wrapper}`}>
      {/* Capa de decoraciones estáticas al fondo (z-0) */}
      <Decorations />

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
        className={`fixed left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full backdrop-blur-sm border shadow-md transition ${currentStyle.navBtn}`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Siguiente"
        className={`fixed right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full backdrop-blur-sm border shadow-md transition ${currentStyle.navBtn}`}
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

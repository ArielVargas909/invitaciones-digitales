import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import config from './data/config.json';
import Hero from './components/Hero';
import Logistics from './components/Logistics';
import Gallery from './components/Gallery';
import Itinerary from './components/Itinerary';
import Location from './components/Location';
import './styles/corporate.css';

const variantStyles = {
  'summit-dark': {
    wrapper: 'variant-summit-dark bg-slate-950 text-white',
    glow: 'bg-blue-600 opacity-25',
    navBtn: 'bg-slate-800/80 border-slate-700 text-blue-400 hover:bg-slate-700',
    dotActive: 'bg-blue-500',
    dotInactive: 'bg-slate-600'
  },
  'startup-light': {
    wrapper: 'variant-startup-light bg-[#FAF5FF] text-[#1E1B4B]',
    glow: 'bg-purple-500 opacity-15',
    navBtn: 'bg-white border-purple-200 text-purple-600 hover:bg-purple-50',
    dotActive: 'bg-purple-600',
    dotInactive: 'bg-purple-300'
  },
  'exec-minimal': {
    wrapper: 'variant-exec-minimal bg-zinc-100 text-zinc-900',
    glow: 'bg-zinc-400 opacity-10',
    navBtn: 'bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-50',
    dotActive: 'bg-zinc-900',
    dotInactive: 'bg-zinc-400'
  }
};

const slides = [Hero, Logistics, Gallery, Itinerary, Location];

export default function CorporateTheme() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const variant = config.variant || 'summit-dark';
  const currentStyle = variantStyles[variant] || variantStyles['summit-dark'];
  const CurrentSlideComponent = slides[currentSlide];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className={`corporate-theme relative h-[100dvh] w-full overflow-hidden font-sans select-none ${currentStyle.wrapper}`}>
      {/* Fondo decorativo estático en capa inferior (z-0) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className={`absolute -top-[20%] -right-[10%] w-[65%] h-[65%] rounded-full blur-[130px] ${currentStyle.glow}`} />
      </div>

      {/* Diapositivas en capa superior (z-10) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="relative z-10 h-full w-full overflow-y-auto pb-20 flex items-center justify-center"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Flechas laterales de navegación manual */}
      <button
        onClick={prevSlide}
        aria-label="Anterior"
        className={`fixed left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border shadow-sm transition ${currentStyle.navBtn}`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Siguiente"
        className={`fixed right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border shadow-sm transition ${currentStyle.navBtn}`}
      >
        <ChevronRight className="w-6 h-6" />
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

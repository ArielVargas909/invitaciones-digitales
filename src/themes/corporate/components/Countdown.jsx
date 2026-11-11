import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import config from '../data/config.json';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(config.event.date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / 1000 / 60) % 60),
        Segundos: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval, index) => (
    <div key={index} className="corporate-card flex flex-col items-center mx-2 md:mx-4 px-5 py-3 rounded-lg shadow-sm">
      <span className="text-2xl md:text-4xl font-black corporate-accent">
        {timeLeft[interval]}
      </span>
      <span className="text-xs uppercase tracking-widest opacity-70 mt-1">
        {interval}
      </span>
    </div>
  ));

  return (
    <section className="py-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-y-3"
      >
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span className="text-xl font-bold corporate-accent">¡El evento ha comenzado!</span>
        )}
      </motion.div>
    </section>
  );
}

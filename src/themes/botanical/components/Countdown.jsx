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
    <div key={index} className="flex flex-col items-center mx-3 md:mx-5">
      <span className="text-3xl md:text-5xl font-serif botanical-accent">
        {timeLeft[interval]}
      </span>
      <span className="text-xs uppercase tracking-wider opacity-75 mt-1">
        {interval}
      </span>
    </div>
  ));

  return (
    <section className="py-6 botanical-card rounded-2xl flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex"
      >
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span className="text-xl font-serif botanical-accent">¡El gran día ha llegado!</span>
        )}
      </motion.div>
    </section>
  );
}

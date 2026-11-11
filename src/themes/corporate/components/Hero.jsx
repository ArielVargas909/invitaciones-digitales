import config from '../data/config.json';
import Countdown from './Countdown';

export default function Hero() {
  const { event, locations } = config;
  const mainLocation = locations && locations[0];
  const formattedDate = new Date(event.date).toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-3xl mx-auto w-full">
      <div className="border-l-4 pl-6 mb-10" style={{ borderColor: 'var(--theme-accent)' }}>
        <p className="corporate-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
          {event.type}
        </p>
        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
          {event.title}
        </h1>
        <p className="opacity-80 text-base md:text-lg mb-8 max-w-xl">
          {event.message}
        </p>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="opacity-60 uppercase tracking-wider text-xs mb-1">Fecha</p>
            <p className="font-bold capitalize">{formattedDate}</p>
          </div>
          {mainLocation && (
            <div>
              <p className="opacity-60 uppercase tracking-wider text-xs mb-1">Sede Principal</p>
              <p className="font-bold">{mainLocation.name}</p>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-xl overflow-hidden">
        <Countdown />
      </div>
    </div>
  );
}

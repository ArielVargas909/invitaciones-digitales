import { MapPin, Navigation, Clock } from 'lucide-react';
import config from '../data/config.json';

export default function Location() {
  const { locations } = config;

  return (
    <div className="flex flex-col justify-center h-full px-6 py-10 max-w-2xl mx-auto w-full text-center font-sans">
      <p className="text-xs uppercase tracking-[0.25em] gala-accent mb-1">Puntos de Encuentro</p>
      <h2 className="text-3xl font-serif mb-6">
        Ubicaciones de la Gala
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations &&
          locations.map((loc, index) => (
            <div
              key={index}
              className="gala-card rounded-2xl p-6 shadow-xl flex flex-col items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-serif gala-accent mb-2">{loc.name}</h3>
                <p className="text-sm opacity-85 mb-2 flex items-center justify-center gap-1.5">
                  <MapPin className="w-4 h-4 gala-accent shrink-0" />
                  <span>{loc.address}</span>
                </p>
                <p className="text-xs font-medium opacity-75 mb-5 flex items-center justify-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 gala-accent" />
                  <span>Hora: {loc.time}</span>
                </p>
              </div>

              {loc.mapsUrl && (
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gala-btn inline-flex items-center px-5 py-2.5 text-xs font-bold rounded-full shadow-md hover:opacity-90 transition-opacity"
                >
                  <Navigation className="w-3.5 h-3.5 mr-1.5" />
                  Ver en Google Maps
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

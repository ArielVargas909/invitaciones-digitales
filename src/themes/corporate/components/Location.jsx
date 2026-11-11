import { MapPin, Navigation, Clock } from 'lucide-react';
import config from '../data/config.json';

export default function Location() {
  const { locations } = config;

  return (
    <div className="flex flex-col justify-center h-full px-6 py-10 max-w-2xl mx-auto w-full">
      <div className="border-l-4 pl-4 mb-6" style={{ borderColor: 'var(--theme-accent)' }}>
        <p className="text-xs uppercase tracking-widest corporate-accent font-bold">Localización</p>
        <h2 className="text-3xl font-black">Sedes del Evento</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations &&
          locations.map((loc, index) => (
            <div
              key={index}
              className="corporate-card rounded-2xl p-6 shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-black mb-2">{loc.name}</h3>
                <p className="text-sm opacity-80 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 corporate-accent shrink-0" />
                  <span>{loc.address}</span>
                </p>
                <p className="text-xs font-semibold corporate-accent mb-5 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Hora: {loc.time}</span>
                </p>
              </div>

              {loc.mapsUrl && (
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="corporate-btn inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold rounded-lg shadow-sm hover:opacity-90 transition-opacity"
                >
                  <Navigation className="w-3.5 h-3.5 mr-1.5" />
                  Abrir en Google Maps
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

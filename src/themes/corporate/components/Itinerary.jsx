import { Clock, Music, Sparkles } from 'lucide-react';
import config from '../data/config.json';

export default function Itinerary() {
  const { timeline, entertainment } = config;

  return (
    <div className="flex flex-col justify-center h-full px-6 py-10 max-w-2xl mx-auto w-full">
      <div className="border-l-4 pl-4 mb-6" style={{ borderColor: 'var(--theme-accent)' }}>
        <p className="text-xs uppercase tracking-widest corporate-accent font-bold">Cronograma Oficial</p>
        <h2 className="text-3xl font-black">Agenda & Actividades</h2>
      </div>

      {timeline && timeline.length > 0 && (
        <div className="space-y-3 mb-5">
          {timeline.map((item, index) => (
            <div key={index} className="corporate-card p-4 rounded-xl flex items-start gap-4">
              <div className="flex items-center gap-1.5 text-xs font-bold corporate-accent shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
                <span>{item.time}</span>
              </div>
              <div>
                <h3 className="font-bold text-base">{item.activity}</h3>
                <p className="text-xs opacity-75 mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {entertainment && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {entertainment.music && entertainment.music.length > 0 && (
            <div className="corporate-card p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2 corporate-accent">
                <Music className="w-4 h-4" />
                <h3 className="font-bold text-sm">Ambientación Musical</h3>
              </div>
              <ul className="space-y-1 text-xs opacity-85">
                {entertainment.music.map((m, idx) => (
                  <li key={idx}>• {m}</li>
                ))}
              </ul>
            </div>
          )}

          {entertainment.games && entertainment.games.length > 0 && (
            <div className="corporate-card p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2 corporate-accent">
                <Sparkles className="w-4 h-4" />
                <h3 className="font-bold text-sm">Dinámicas & Networking</h3>
              </div>
              <ul className="space-y-1 text-xs opacity-85">
                {entertainment.games.map((g, idx) => (
                  <li key={idx}>• {g}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

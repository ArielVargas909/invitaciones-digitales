import { Clock, Music, Sparkles } from 'lucide-react';
import config from '../data/config.json';

export default function Itinerary() {
  const { timeline, entertainment } = config;

  return (
    <div className="flex flex-col justify-center h-full px-6 py-10 max-w-lg mx-auto w-full font-sans">
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-[0.25em] gala-accent mb-1">Noche Inolvidable</p>
        <h2 className="font-serif text-3xl">Cronograma & Show</h2>
      </div>

      {timeline && timeline.length > 0 && (
        <div className="space-y-3 mb-5">
          {timeline.map((item, index) => (
            <div key={index} className="gala-card p-4 rounded-xl flex items-start gap-3">
              <div className="flex items-center gap-1.5 text-xs font-bold gala-accent shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
                <span>{item.time}</span>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-base">{item.activity}</h3>
                <p className="text-xs opacity-80 mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {entertainment && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {entertainment.music && entertainment.music.length > 0 && (
            <div className="gala-card p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2 gala-accent">
                <Music className="w-4 h-4" />
                <h3 className="font-serif font-semibold text-sm">Música</h3>
              </div>
              <ul className="space-y-1 text-xs opacity-85">
                {entertainment.music.map((m, idx) => (
                  <li key={idx}>• {m}</li>
                ))}
              </ul>
            </div>
          )}

          {entertainment.games && entertainment.games.length > 0 && (
            <div className="gala-card p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2 gala-accent">
                <Sparkles className="w-4 h-4" />
                <h3 className="font-serif font-semibold text-sm">Shows & Dinámicas</h3>
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

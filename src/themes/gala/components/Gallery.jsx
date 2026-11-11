import { Images, Crown } from 'lucide-react';
import config from '../data/config.json';

export default function Gallery() {
  const { gallery, honorees } = config;

  return (
    <div className="flex flex-col justify-center h-full px-6 py-10 max-w-lg mx-auto w-full font-sans">
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-[0.25em] gala-accent mb-1">Momentos Especiales</p>
        <h2 className="font-serif text-3xl">Galería & Corte de Honor</h2>
      </div>

      {gallery && gallery.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-6">
          {gallery.map((url, idx) => (
            <div
              key={idx}
              className="relative h-40 rounded-xl overflow-hidden gala-card flex items-center justify-center"
            >
              <img
                src={url}
                alt={`Galería ${idx + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40 pointer-events-none">
                <Images className="w-6 h-6 mb-1" />
              </div>
            </div>
          ))}
        </div>
      )}

      {honorees && honorees.length > 0 && (
        <div className="gala-card rounded-2xl p-5">
          <div className="flex items-center justify-center gap-2 mb-4 gala-accent">
            <Crown className="w-5 h-5" />
            <h3 className="font-serif text-xl">Corte de Honor & Padrinos</h3>
          </div>
          <ul className="space-y-2.5 text-center">
            {honorees.map((item, idx) => (
              <li
                key={idx}
                className="font-serif text-sm md:text-base border-b border-current/10 last:border-0 pb-2 last:pb-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

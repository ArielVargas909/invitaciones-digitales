import { Images, Building2 } from 'lucide-react';
import config from '../data/config.json';

export default function Gallery() {
  const { gallery, honorees } = config;

  return (
    <div className="flex flex-col justify-center h-full px-6 py-10 max-w-2xl mx-auto w-full">
      <div className="border-l-4 pl-4 mb-6" style={{ borderColor: 'var(--theme-accent)' }}>
        <p className="text-xs uppercase tracking-widest corporate-accent font-bold">Institucional</p>
        <h2 className="text-3xl font-black">Galería & Invitados de Honor</h2>
      </div>

      {gallery && gallery.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {gallery.map((url, idx) => (
            <div
              key={idx}
              className="relative h-40 rounded-xl overflow-hidden corporate-card flex items-center justify-center"
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
                <Images className="w-6 h-6 mb-1 corporate-accent" />
              </div>
            </div>
          ))}
        </div>
      )}

      {honorees && honorees.length > 0 && (
        <div className="corporate-card rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4 corporate-accent">
            <Building2 className="w-5 h-5" />
            <h3 className="font-bold text-lg">Aliados & Patrocinadores</h3>
          </div>
          <ul className="space-y-2 text-sm">
            {honorees.map((item, idx) => (
              <li key={idx} className="p-2.5 rounded-lg border border-current/10 font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

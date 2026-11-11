import { ShieldAlert, Gift, Hotel, Wifi, Hash } from 'lucide-react';
import config from '../data/config.json';

export default function Logistics() {
  const { logistics, protocol, extras } = config;

  return (
    <div className="flex flex-col justify-center h-full px-6 py-10 max-w-lg mx-auto w-full font-sans">
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-[0.25em] gala-accent mb-1">Información del Evento</p>
        <h2 className="font-serif text-3xl">Logística & Protocolo</h2>
      </div>

      <div className="space-y-4 text-sm">
        {logistics?.rules && logistics.rules.length > 0 && (
          <div className="gala-card p-5 rounded-xl flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 gala-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-serif font-semibold gala-accent">Reglas de la Gala</p>
              <ul className="list-disc list-inside opacity-85 text-xs space-y-1 mt-1">
                {logistics.rules.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {protocol?.gifts && (
          <div className="gala-card p-5 rounded-xl flex items-start gap-3">
            <Gift className="w-5 h-5 gala-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-serif font-semibold gala-accent">Protocolo de Regalos</p>
              <p className="opacity-85 text-xs mt-1">{protocol.gifts}</p>
            </div>
          </div>
        )}

        {protocol?.accommodations && (
          <div className="gala-card p-5 rounded-xl flex items-start gap-3">
            <Hotel className="w-5 h-5 gala-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-serif font-semibold gala-accent">Hospedaje Sugerido</p>
              <p className="opacity-85 text-xs mt-1">{protocol.accommodations}</p>
            </div>
          </div>
        )}

        {extras && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="gala-card p-3.5 rounded-xl flex items-center gap-2 text-xs">
              <Hash className="w-4 h-4 gala-accent shrink-0" />
              <span className="truncate font-semibold">{extras.hashtag}</span>
            </div>
            <div className="gala-card p-3.5 rounded-xl flex items-center gap-2 text-xs">
              <Wifi className="w-4 h-4 gala-accent shrink-0" />
              <span className="truncate">{extras.wifi}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

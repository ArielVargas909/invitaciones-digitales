import { ShieldAlert, Gift, Hotel, Wifi, Hash } from 'lucide-react';
import config from '../data/config.json';

export default function Logistics() {
  const { logistics, protocol, extras } = config;

  return (
    <div className="flex flex-col justify-center h-full px-6 py-10 max-w-2xl mx-auto w-full">
      <div className="border-l-4 pl-4 mb-6" style={{ borderColor: 'var(--theme-accent)' }}>
        <p className="text-xs uppercase tracking-widest corporate-accent font-bold">Guía del Asistente</p>
        <h2 className="text-3xl font-black">Logística & Protocolo</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {logistics?.rules && logistics.rules.length > 0 && (
          <div className="corporate-card p-5 rounded-xl flex items-start gap-3 md:col-span-2">
            <ShieldAlert className="w-5 h-5 corporate-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Normas de Ingreso</p>
              <ul className="list-disc list-inside opacity-80 text-xs space-y-1 mt-1">
                {logistics.rules.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {protocol?.gifts && (
          <div className="corporate-card p-5 rounded-xl flex items-start gap-3">
            <Gift className="w-5 h-5 corporate-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Protocolo / Kit</p>
              <p className="opacity-80 text-xs mt-1">{protocol.gifts}</p>
            </div>
          </div>
        )}

        {protocol?.accommodations && (
          <div className="corporate-card p-5 rounded-xl flex items-start gap-3">
            <Hotel className="w-5 h-5 corporate-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Alojamiento Sugerido</p>
              <p className="opacity-80 text-xs mt-1">{protocol.accommodations}</p>
            </div>
          </div>
        )}
      </div>

      {extras && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="corporate-card p-3.5 rounded-lg flex items-center gap-2 text-xs">
            <Hash className="w-4 h-4 corporate-accent shrink-0" />
            <span className="truncate font-semibold">{extras.hashtag}</span>
          </div>
          <div className="corporate-card p-3.5 rounded-lg flex items-center gap-2 text-xs">
            <Wifi className="w-4 h-4 corporate-accent shrink-0" />
            <span className="truncate">{extras.wifi}</span>
          </div>
        </div>
      )}
    </div>
  );
}

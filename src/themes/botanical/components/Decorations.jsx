// Decoración botánica de flores blancas (anémonas) con hojas de eucalipto y destellos dorados
const WhiteAnemoneCorner = ({ className }) => (
  <svg viewBox="0 0 220 220" fill="none" className={className}>
    {/* Ramas y hojas verdes de olivo / eucalipto */}
    <path d="M10,190 Q60,120 180,20" stroke="#6B8E5A" strokeWidth="2" fill="none" />
    <ellipse cx="45" cy="145" rx="18" ry="8" transform="rotate(-35 45 145)" fill="#789A64" />
    <ellipse cx="85" cy="110" rx="20" ry="8" transform="rotate(-25 85 110)" fill="#5C7C4B" />
    <ellipse cx="130" cy="70" rx="18" ry="7" transform="rotate(-45 130 70)" fill="#85A672" />
    <ellipse cx="160" cy="40" rx="15" ry="6" transform="rotate(-30 160 40)" fill="#6B8E5A" />
    <ellipse cx="30" cy="115" rx="16" ry="7" transform="rotate(-65 30 115)" fill="#85A672" />
    <ellipse cx="110" cy="45" rx="16" ry="7" transform="rotate(-70 110 45)" fill="#789A64" />

    {/* Flor Blanca Principal (Anémona en esquina) */}
    <g transform="translate(65, 65)">
      <circle cx="0" cy="-22" r="20" fill="#F4F4F2" stroke="#E2E2DC" strokeWidth="1" />
      <circle cx="21" cy="-7" r="20" fill="#FAFAF8" stroke="#E2E2DC" strokeWidth="1" />
      <circle cx="13" cy="18" r="20" fill="#F2F2EE" stroke="#E2E2DC" strokeWidth="1" />
      <circle cx="-13" cy="18" r="20" fill="#FAFAF8" stroke="#E2E2DC" strokeWidth="1" />
      <circle cx="-21" cy="-7" r="20" fill="#F4F4F2" stroke="#E2E2DC" strokeWidth="1" />
      <circle cx="0" cy="0" r="9" fill="#4A6B3B" />
      <circle cx="0" cy="0" r="5" fill="#2B3D22" />
    </g>

    {/* Segunda Flor Blanca Lateral */}
    <g transform="translate(18, 155) scale(0.72)">
      <circle cx="0" cy="-20" r="18" fill="#FAFAF8" stroke="#E2E2DC" strokeWidth="1" />
      <circle cx="19" cy="-6" r="18" fill="#F2F2EE" stroke="#E2E2DC" strokeWidth="1" />
      <circle cx="12" cy="16" r="18" fill="#FAFAF8" stroke="#E2E2DC" strokeWidth="1" />
      <circle cx="-12" cy="16" r="18" fill="#F4F4F2" stroke="#E2E2DC" strokeWidth="1" />
      <circle cx="-19" cy="-6" r="18" fill="#FAFAF8" stroke="#E2E2DC" strokeWidth="1" />
      <circle cx="0" cy="0" r="8" fill="#4A6B3B" />
    </g>
  </svg>
);

export default function Decorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Esquina floral superior izquierda */}
      <WhiteAnemoneCorner className="absolute -top-2 -left-2 w-48 h-48 md:w-64 md:h-64 drop-shadow-sm" />

      {/* Esquina floral inferior derecha */}
      <WhiteAnemoneCorner className="absolute -bottom-2 -right-2 w-48 h-48 md:w-64 md:h-64 transform rotate-180 drop-shadow-sm" />

      {/* Polvo dorado sutil en esquinas opuestas (estilo mármol de la referencia) */}
      <div className="absolute top-4 right-6 w-40 h-40 opacity-35 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:14px_14px] rounded-full blur-[0.3px]" />
      <div className="absolute bottom-6 left-6 w-40 h-40 opacity-35 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] [background-size:14px_14px] rounded-full blur-[0.3px]" />
    </div>
  );
}

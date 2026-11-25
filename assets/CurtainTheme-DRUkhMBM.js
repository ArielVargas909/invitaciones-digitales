import{A as e,C as t,S as n,_ as r,c as i,k as a,o,p as s,s as c,x as l,y as u}from"./index-Bqi1gWvv.js";import{t as d}from"./navigation-BE9ogvII.js";import{t as f}from"./users-Cbfk_OMP.js";import{t as p}from"./config-C-v_dKmI.js";var m=e(a(),1),h=i();function g({title:e=`Ana & Carlos`,subtitle:t=`Toca el telón para abrir`,onOpen:n}){let[r,i]=(0,m.useState)(!1),a=()=>{r||(i(!0),n&&n())};return(0,h.jsxs)(`div`,{onClick:a,onTouchStart:a,className:`theater-curtain-overlay ${r?`is-open`:``}`,children:[(0,h.jsx)(`style`,{children:`
        /* Contenedor principal del telón en tonos Crema Dorado */
        .theater-curtain-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          overflow: hidden;
          cursor: pointer;
          pointer-events: auto;
          background-color: rgba(250, 244, 232, 0.95);
          transition: background-color 1.5s ease;
        }

        /* Al abrirse, desaparece por completo sin dejar bordes tipo "puerta" */
        .theater-curtain-overlay.is-open {
          background-color: rgba(250, 244, 232, 0);
          pointer-events: none;
          cursor: default;
        }

        /* 1. CENEFA SUPERIOR EN CREMA DORADO (Se eleva suavemente al abrir para no dejar sombras duras) */
        .theater-valance {
          position: absolute;
          top: 0;
          left: -2%;
          width: 104%;
          height: 18vh;
          z-index: 30;
          background-color: #f5ebd6;
          background-image:
            linear-gradient(
              180deg,
              rgba(184, 148, 84, 0.35) 0%,
              rgba(255, 252, 245, 0.6) 40%,
              rgba(218, 190, 135, 0.45) 85%,
              #d4af37 100%
            ),
            repeating-linear-gradient(
              90deg,
              #dec699 0%,
              #f6ecd8 4%,
              #fffdf9 8%,
              #e8d5ae 12%,
              #dec699 16%
            );
          border-bottom: 3px solid #d4af37;
          border-radius: 0 0 40% 40% / 0 0 24px 24px;
          box-shadow: 0 8px 24px rgba(140, 109, 70, 0.22);
          transition: transform 1.6s cubic-bezier(0.65, 0, 0.35, 1), opacity 1.4s ease;
        }

        .theater-curtain-overlay.is-open .theater-valance {
          transform: translateY(-110%);
          opacity: 0;
        }

        /* 2. PANELES PRINCIPALES (IZQUIERDO Y DERECHO) EN SEDA CREMA Y ORO SUAVE */
        .theater-panel {
          position: absolute;
          top: 0;
          height: 100vh;
          width: 50.5%;
          z-index: 20;
          background-color: #f7efe0;
          background-image:
            linear-gradient(
              180deg,
              rgba(175, 140, 80, 0.22) 0%,
              rgba(255, 255, 255, 0.15) 30%,
              rgba(255, 255, 255, 0.1) 70%,
              rgba(165, 130, 70, 0.28) 100%
            ),
            repeating-linear-gradient(
              90deg,
              #d8be8e 0px,
              #ebd8b4 16px,
              #fbf6ec 32px,
              #fffdf9 44px,
              #efe0c2 58px,
              #DFC89C 74px,
              #cdb07c 88px
            );
          transition: transform 1.75s cubic-bezier(0.65, 0, 0.35, 1),
                      opacity 1.75s ease;
          will-change: transform;
        }

        .theater-panel-left {
          left: 0;
          border-right: 2px solid #d4af37;
          box-shadow:
            8px 0 25px rgba(140, 109, 70, 0.22),
            inset -18px 0 32px rgba(165, 130, 75, 0.2);
        }

        .theater-panel-right {
          right: 0;
          border-left: 2px solid #d4af37;
          box-shadow:
            -8px 0 25px rgba(140, 109, 70, 0.22),
            inset 18px 0 32px rgba(165, 130, 75, 0.2);
        }

        /* 3. APERTURA LIMPIA SIN BORDES RÍGIDOS DE PUERTA */
        .theater-curtain-overlay.is-open .theater-panel-left {
          transform: translateX(-102%);
        }

        .theater-curtain-overlay.is-open .theater-panel-right {
          transform: translateX(102%);
        }

        /* 4. DESTELLOS DE LUZ CÁLIDA DORADA (SPOTLIGHTS) */
        .theater-spotlights {
          position: absolute;
          inset: 0;
          z-index: 25;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.9s ease;
        }

        .theater-curtain-overlay.is-open .theater-spotlights {
          opacity: 0;
        }

        .theater-spotlights::before,
        .theater-spotlights::after {
          content: '';
          position: absolute;
          width: 55vw;
          height: 55vw;
          max-width: 520px;
          max-height: 520px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 252, 235, 0.7) 0%,
            rgba(249, 228, 152, 0.3) 40%,
            rgba(255, 255, 255, 0) 70%
          );
        }

        .theater-spotlights::before {
          top: 15%;
          left: 12%;
          animation: spotlightMoveLeft 7s ease-in-out infinite alternate;
        }

        .theater-spotlights::after {
          bottom: 15%;
          right: 12%;
          animation: spotlightMoveRight 8.5s ease-in-out infinite alternate;
        }

        @keyframes spotlightMoveLeft {
          0% { transform: translate(-8%, -5%) scale(0.95); }
          50% { transform: translate(40%, 20%) scale(1.1); }
          100% { transform: translate(12%, 35%) scale(1); }
        }

        @keyframes spotlightMoveRight {
          0% { transform: translate(8%, 5%) scale(1); }
          50% { transform: translate(-40%, -20%) scale(1.12); }
          100% { transform: translate(-12%, -30%) scale(0.92); }
        }

        /* Sello / Moño Central en Crema y Oro */
        .theater-center-badge {
          position: absolute;
          top: 52%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 35;
          padding: 1.4rem 2.5rem;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, #ffffff 0%, #fdf8ed 65%, #efe0be 100%);
          border: 3px double #c59b27;
          box-shadow:
            0 0 0 6px rgba(212, 175, 55, 0.28),
            0 14px 35px rgba(140, 109, 70, 0.32);
          text-align: center;
          transition: opacity 0.6s ease, transform 0.8s ease;
        }

        .theater-curtain-overlay:hover .theater-center-badge {
          transform: translate(-50%, -50%) scale(1.05);
        }

        .theater-curtain-overlay.is-open .theater-center-badge {
          opacity: 0;
          transform: translate(-50%, -50%) scale(1.22);
          pointer-events: none;
        }
      `}),(0,h.jsx)(`div`,{className:`theater-valance`}),(0,h.jsx)(`div`,{className:`theater-panel theater-panel-left`}),(0,h.jsx)(`div`,{className:`theater-panel theater-panel-right`}),(0,h.jsx)(`div`,{className:`theater-spotlights`}),(0,h.jsxs)(`div`,{className:`theater-center-badge`,children:[(0,h.jsx)(`p`,{className:`text-[10px] uppercase tracking-[0.28em] text-[#9A7B2C] font-semibold mb-0.5`,children:`Invitación Especial`}),(0,h.jsx)(`p`,{className:`font-script text-3xl md:text-4xl text-[#8C6D46] leading-tight`,children:e}),(0,h.jsxs)(`p`,{className:`text-[10px] uppercase tracking-[0.22em] text-stone-500 font-medium mt-1.5 animate-pulse`,children:[`✨ `,t,` ✨`]})]})]})}var _=({className:e,idSuffix:t=`1`})=>(0,h.jsxs)(`svg`,{viewBox:`0 0 140 110`,fill:`none`,className:e,children:[(0,h.jsx)(`defs`,{children:(0,h.jsxs)(`linearGradient`,{id:`goldBirdGrad-${t}`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,h.jsx)(`stop`,{offset:`0%`,stopColor:`#FFF6D1`}),(0,h.jsx)(`stop`,{offset:`40%`,stopColor:`#E5C158`}),(0,h.jsx)(`stop`,{offset:`75%`,stopColor:`#C59B27`}),(0,h.jsx)(`stop`,{offset:`100%`,stopColor:`#8C6D46`})]})}),(0,h.jsx)(`path`,{d:`M 68,52 C 58,26 36,10 10,6 C 18,22 30,36 44,48 C 32,46 18,46 6,52 C 20,56 36,58 52,58 Z`,fill:`url(#goldBirdGrad-${t})`,stroke:`#8C6D46`,strokeWidth:`1.5`}),(0,h.jsx)(`path`,{d:`M 48,60 C 32,68 18,80 8,96 C 24,90 40,84 56,78 C 60,88 68,96 80,100 C 74,88 70,78 68,70 C 86,62 104,52 118,44 C 124,41 128,42 132,44 C 127,37 120,35 112,38 C 98,42 82,50 66,54 Z`,fill:`url(#goldBirdGrad-${t})`,stroke:`#8C6D46`,strokeWidth:`1.8`}),(0,h.jsx)(`path`,{d:`M 70,56 C 84,28 106,12 134,4 C 126,22 114,34 100,44 C 112,42 122,42 132,46 C 116,52 98,54 84,56 C 96,58 108,62 116,68 C 100,68 84,64 70,56 Z`,fill:`url(#goldBirdGrad-${t})`,stroke:`#7A5C32`,strokeWidth:`1.8`}),(0,h.jsx)(`path`,{d:`M 76,48 C 92,32 108,22 124,14 M 78,52 C 94,40 108,34 122,30`,stroke:`#FFFDF7`,strokeWidth:`1.4`,strokeLinecap:`round`,opacity:`0.85`}),(0,h.jsx)(`path`,{d:`M 28,24 L 31,32 L 39,35 L 31,38 L 28,46 L 25,38 L 17,35 L 25,32 Z`,fill:`#FFF6D1`})]}),v=({className:e})=>(0,h.jsxs)(`svg`,{viewBox:`0 0 260 260`,fill:`none`,className:e,children:[(0,h.jsx)(`path`,{d:`M 10,240 C 35,150 95,85 220,25`,stroke:`#C5A059`,strokeWidth:`2`,strokeLinecap:`round`}),(0,h.jsx)(`path`,{d:`M 55,165 C 30,135 28,98 48,72 C 68,98 72,135 55,165 Z`,fill:`#E9DEC8`,stroke:`#C5A059`,strokeWidth:`1.5`}),(0,h.jsx)(`path`,{d:`M 115,105 C 95,72 102,40 128,22 C 142,48 138,82 115,105 Z`,fill:`#E9DEC8`,stroke:`#C5A059`,strokeWidth:`1.5`}),(0,h.jsx)(`path`,{d:`M 92,140 C 128,155 162,148 188,125 C 160,110 124,115 92,140 Z`,fill:`#F3E9D7`,stroke:`#C5A059`,strokeWidth:`1.5`}),(0,h.jsx)(`path`,{d:`M 42,205 C 78,220 115,212 142,188 C 115,172 75,180 42,205 Z`,fill:`#F3E9D7`,stroke:`#C5A059`,strokeWidth:`1.5`}),(0,h.jsxs)(`g`,{transform:`translate(75, 75)`,children:[(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`34`,fill:`#FAF3E3`,stroke:`#D4AF37`,strokeWidth:`1.8`}),(0,h.jsx)(`path`,{d:`M -22,-10 C -10,-28 15,-28 24,-8 C 30,12 12,28 -8,25 C -26,22 -30,4 -16,-12 C -4,-22 14,-16 16,0 C 18,14 2,18 -8,12 C -16,6 -12,-8 0,-8`,stroke:`#C5A059`,strokeWidth:`1.8`,strokeLinecap:`round`,fill:`#FFFDF9`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`4`,fill:`#D4AF37`})]}),(0,h.jsxs)(`g`,{transform:`translate(36, 145)`,children:[(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`22`,fill:`#FDF9F0`,stroke:`#D4AF37`,strokeWidth:`1.5`}),(0,h.jsx)(`path`,{d:`M -14,-6 C -6,-18 10,-18 15,-5 C 18,8 8,18 -5,16 C -16,14 -18,2 -10,-8 C -2,-14 9,-10 10,0`,stroke:`#C5A059`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`3`,fill:`#D4AF37`})]}),(0,h.jsxs)(`g`,{transform:`translate(148, 42)`,children:[(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`20`,fill:`#FDF9F0`,stroke:`#D4AF37`,strokeWidth:`1.5`}),(0,h.jsx)(`path`,{d:`M -12,-5 C -5,-16 8,-16 13,-4 C 16,7 7,16 -4,14 C -14,12 -16,2 -8,-7`,stroke:`#C5A059`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`2.8`,fill:`#D4AF37`})]}),(0,h.jsx)(`circle`,{cx:`190`,cy:`65`,r:`5`,fill:`#F5E6C4`,stroke:`#C5A059`,strokeWidth:`1.2`}),(0,h.jsx)(`circle`,{cx:`65`,cy:`195`,r:`5`,fill:`#F5E6C4`,stroke:`#C5A059`,strokeWidth:`1.2`}),(0,h.jsx)(`circle`,{cx:`130`,cy:`128`,r:`3.5`,fill:`#D4AF37`,opacity:`0.6`}),(0,h.jsx)(`circle`,{cx:`38`,cy:`95`,r:`3`,fill:`#D4AF37`,opacity:`0.6`})]}),y=({className:e})=>(0,h.jsxs)(`svg`,{viewBox:`0 0 320 380`,fill:`none`,stroke:`#A68246`,strokeWidth:`3.5`,strokeLinecap:`round`,strokeLinejoin:`round`,className:e,children:[(0,h.jsx)(`ellipse`,{cx:`160`,cy:`332`,rx:`130`,ry:`10`,fill:`#F4E8CE`,stroke:`#A68246`,strokeWidth:`3`}),(0,h.jsx)(`path`,{d:`M 95,338 L 118,365 L 202,365 L 225,338`,fill:`#EFE0BE`,stroke:`#A68246`,strokeWidth:`3`}),(0,h.jsx)(`line`,{x1:`75`,y1:`365`,x2:`245`,y2:`365`,strokeWidth:`4`}),(0,h.jsx)(`rect`,{x:`55`,y:`232`,width:`210`,height:`96`,rx:`10`,fill:`#FAF2E1`,stroke:`#A68246`,strokeWidth:`3.5`}),(0,h.jsx)(`path`,{d:`M 55,256 Q 81,278 107,256 T 160,256 T 212,256 T 265,256`,stroke:`#C59B27`,strokeWidth:`3`}),(0,h.jsx)(`path`,{d:`M 55,318 Q 81,304 107,318 T 160,318 T 212,318 T 265,318`,stroke:`#C59B27`,strokeWidth:`2.5`}),(0,h.jsx)(`circle`,{cx:`107`,cy:`286`,r:`5`,fill:`#D4AF37`}),(0,h.jsx)(`circle`,{cx:`160`,cy:`286`,r:`5`,fill:`#D4AF37`}),(0,h.jsx)(`circle`,{cx:`212`,cy:`286`,r:`5`,fill:`#D4AF37`}),(0,h.jsx)(`rect`,{x:`85`,y:`148`,width:`150`,height:`84`,rx:`8`,fill:`#FDF8ED`,stroke:`#A68246`,strokeWidth:`3.5`}),(0,h.jsx)(`path`,{d:`M 85,170 Q 110,190 135,170 T 185,170 T 235,170`,stroke:`#C59B27`,strokeWidth:`3`}),(0,h.jsx)(`circle`,{cx:`122`,cy:`198`,r:`4.5`,fill:`#D4AF37`}),(0,h.jsx)(`circle`,{cx:`160`,cy:`198`,r:`4.5`,fill:`#D4AF37`}),(0,h.jsx)(`circle`,{cx:`198`,cy:`198`,r:`4.5`,fill:`#D4AF37`}),(0,h.jsx)(`rect`,{x:`115`,y:`76`,width:`90`,height:`72`,rx:`8`,fill:`#FFFDF8`,stroke:`#A68246`,strokeWidth:`3.5`}),(0,h.jsx)(`path`,{d:`M 115,96 Q 137,114 160,96 T 205,96`,stroke:`#C59B27`,strokeWidth:`2.8`}),(0,h.jsx)(`circle`,{cx:`142`,cy:`122`,r:`4`,fill:`#D4AF37`}),(0,h.jsx)(`circle`,{cx:`178`,cy:`122`,r:`4`,fill:`#D4AF37`}),(0,h.jsx)(`circle`,{cx:`85`,cy:`232`,r:`10`,fill:`#F5E1B8`,stroke:`#A68246`,strokeWidth:`2.2`}),(0,h.jsx)(`circle`,{cx:`205`,cy:`148`,r:`9`,fill:`#F5E1B8`,stroke:`#A68246`,strokeWidth:`2.2`}),(0,h.jsx)(`path`,{d:`M 160,64 C 160,64 136,46 136,30 C 136,18 148,14 160,26 C 172,14 184,18 184,30 C 184,46 160,64 160,64 Z`,fill:`#F5E1B8`,stroke:`#A68246`,strokeWidth:`3.2`})]}),b=(0,m.memo)(function({targetDate:e}){let[t,n]=(0,m.useState)(()=>r(e));function r(e){let t=+new Date(e)-new Date;return t<=0?{}:{Días:Math.floor(t/864e5),Horas:Math.floor(t/36e5%24),Minutos:Math.floor(t/1e3/60%60),Segundos:Math.floor(t/1e3%60)}}(0,m.useEffect)(()=>{let t=setInterval(()=>{n(r(e))},1e3);return()=>clearInterval(t)},[e]);let i=Object.entries(t);return(0,h.jsx)(`div`,{className:`curtain-glass-card py-3.5 px-5 rounded-2xl w-full max-w-xs mx-auto mt-3`,children:i.length>0?(0,h.jsx)(`div`,{className:`grid grid-cols-4 gap-2 text-center`,children:i.map(([e,t])=>(0,h.jsxs)(`div`,{className:`flex flex-col items-center`,children:[(0,h.jsx)(`span`,{className:`font-serif text-xl md:text-2xl text-[#8C6D46] font-semibold`,children:t}),(0,h.jsx)(`span`,{className:`text-[10px] uppercase tracking-widest text-stone-500 mt-0.5`,children:e})]},e))}):(0,h.jsx)(`p`,{className:`text-center font-serif text-lg text-[#8C6D46]`,children:`¡El gran día ha llegado!`})})});function x({tipoEvento:e=`boda`}){let[i,a]=(0,m.useState)(!1),[x,S]=(0,m.useState)(0),[C,w]=(0,m.useState)(0),{event:T,locations:E=[],timeline:D=[],entertainment:O={},honorees:k=[],gallery:A=[],protocol:j={}}=p[e]||p.boda||p,M=()=>S(e=>(e+1)%4),N=()=>S(e=>e===0?3:e-1);(0,m.useEffect)(()=>{if(!i)return;let e=setInterval(()=>{S(e=>(e+1)%4)},6e3);return()=>clearInterval(e)},[i]),(0,m.useEffect)(()=>{if(!A.length)return;let e=setInterval(()=>{w(e=>(e+1)%A.length)},3500);return()=>clearInterval(e)},[A.length]);let P=new Date(T.date).toLocaleDateString(`es-ES`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});return(0,h.jsxs)(`div`,{className:`curtain-theme-root relative h-[100dvh] w-full overflow-hidden bg-[#FDFBF7] text-stone-800 font-sans select-none`,children:[(0,h.jsx)(`style`,{children:`
        /* Vuelo vistoso y más grande de las aves al abrir la cortina (sobre el telón z-60) */
        @keyframes birdGrandLeft {
          0% {
            opacity: 0;
            transform: translate(0, 4vh) scale(0.4) rotate(-18deg);
          }
          15% {
            opacity: 1;
            transform: translate(-8vw, -6vh) scale(1.15) rotate(-22deg);
          }
          75% {
            opacity: 0.95;
            transform: translate(-32vw, -34vh) scale(1.45) rotate(-15deg);
          }
          100% {
            opacity: 0;
            transform: translate(-48vw, -52vh) scale(1.6) rotate(-25deg);
          }
        }

        @keyframes birdGrandRight {
          0% {
            opacity: 0;
            transform: translate(0, 4vh) scale(0.4) scaleX(-1) rotate(-18deg);
          }
          15% {
            opacity: 1;
            transform: translate(8vw, -6vh) scale(1.15) scaleX(-1) rotate(-22deg);
          }
          75% {
            opacity: 0.95;
            transform: translate(32vw, -34vh) scale(1.45) scaleX(-1) rotate(-15deg);
          }
          100% {
            opacity: 0;
            transform: translate(48vw, -52vh) scale(1.6) scaleX(-1) rotate(-25deg);
          }
        }

        @keyframes birdGrandCenter {
          0% {
            opacity: 0;
            transform: translate(0, 6vh) scale(0.45) rotate(-5deg);
          }
          18% {
            opacity: 1;
            transform: translate(3vw, -8vh) scale(1.25) rotate(6deg);
          }
          75% {
            opacity: 0.95;
            transform: translate(12vw, -38vh) scale(1.55) rotate(-4deg);
          }
          100% {
            opacity: 0;
            transform: translate(20vw, -55vh) scale(1.7) rotate(8deg);
          }
        }

        @keyframes birdGrandLowerLeft {
          0% {
            opacity: 0;
            transform: translate(-2vw, 8vh) scale(0.35) rotate(-12deg);
          }
          20% {
            opacity: 1;
            transform: translate(-14vw, -2vh) scale(1.05) rotate(-18deg);
          }
          100% {
            opacity: 0;
            transform: translate(-44vw, -36vh) scale(1.35) rotate(-24deg);
          }
        }

        @keyframes birdGrandLowerRight {
          0% {
            opacity: 0;
            transform: translate(2vw, 8vh) scale(0.35) scaleX(-1) rotate(-12deg);
          }
          20% {
            opacity: 1;
            transform: translate(14vw, -2vh) scale(1.05) scaleX(-1) rotate(-18deg);
          }
          100% {
            opacity: 0;
            transform: translate(44vw, -36vh) scale(1.35) scaleX(-1) rotate(-24deg);
          }
        }

        .bird-diag-1 {
          animation: birdGrandLeft 3.4s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
        }
        .bird-diag-2 {
          animation: birdGrandRight 3.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
        }
        .bird-diag-3 {
          animation: birdGrandCenter 3.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards;
        }
        .bird-diag-4 {
          animation: birdGrandLowerLeft 3.5s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards;
        }
        .bird-diag-5 {
          animation: birdGrandLowerRight 3.7s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards;
        }

        .curtain-glass-card {
          background: rgba(255, 253, 249, 0.92);
          border: 1px solid rgba(212, 175, 55, 0.42);
        }
      `}),(0,h.jsxs)(`div`,{className:`pointer-events-none fixed inset-0 z-0 overflow-hidden`,children:[(0,h.jsx)(v,{className:`absolute -top-3 -left-3 w-48 h-48 md:w-64 md:h-64 opacity-80`}),(0,h.jsx)(v,{className:`absolute -top-3 -right-3 w-48 h-48 md:w-64 md:h-64 scale-x-[-1] opacity-80`}),(0,h.jsx)(v,{className:`absolute -bottom-3 -left-3 w-48 h-48 md:w-64 md:h-64 scale-y-[-1] opacity-80`}),(0,h.jsx)(v,{className:`absolute -bottom-3 -right-3 w-48 h-48 md:w-64 md:h-64 scale-x-[-1] scale-y-[-1] opacity-80`}),(0,h.jsx)(`div`,{className:`fixed inset-4 md:inset-7 border border-[#D4AF37]/40 rounded-3xl`})]}),(0,h.jsx)(`div`,{className:`pointer-events-none fixed inset-0 z-0 flex items-center justify-center`,children:(0,h.jsx)(y,{className:`w-80 h-80 md:w-[430px] md:h-[430px] opacity-[0.22]`})}),i&&(0,h.jsxs)(`div`,{className:`pointer-events-none fixed inset-0 z-[60] flex items-center justify-center overflow-hidden`,children:[(0,h.jsx)(_,{idSuffix:`1`,className:`bird-diag-1 absolute w-14 h-14 md:w-32 md:h-32 drop-shadow-[0_8px_18px_rgba(190,150,39,0.65)]`}),(0,h.jsx)(_,{idSuffix:`2`,className:`bird-diag-2 absolute w-14 h-14 md:w-32 md:h-32 drop-shadow-[0_8px_18px_rgba(190,150,39,0.65)]`}),(0,h.jsx)(_,{idSuffix:`3`,className:`bird-diag-3 absolute w-14 h-14 md:w-36 md:h-36 drop-shadow-[0_10px_22px_rgba(190,150,55,0.75)]`}),(0,h.jsx)(_,{idSuffix:`4`,className:`bird-diag-4 absolute w-14 h-14 md:w-24 md:h-24 drop-shadow-[0_6px_14px_rgba(190,150,39,0.55)]`}),(0,h.jsx)(_,{idSuffix:`5`,className:`bird-diag-5 absolute w-14 h-14 md:w-24 md:h-24 drop-shadow-[0_6px_14px_rgba(190,150,39,0.55)]`})]}),(0,h.jsx)(g,{title:T.title,subtitle:`Toca el sello para abrir`,onOpen:()=>a(!0)}),(0,h.jsx)(c,{mode:`wait`,children:(0,h.jsxs)(o.div,{initial:{opacity:0,x:70},animate:{opacity:1,x:0},exit:{opacity:0,x:-70},transition:{duration:.45,ease:`easeInOut`},className:`relative z-10 h-full w-full overflow-y-auto py-16 flex items-center justify-center px-6 md:px-16`,children:[x===0&&(0,h.jsxs)(`div`,{className:`flex flex-col items-center justify-center max-w-sm w-full text-center py-4`,children:[(0,h.jsxs)(`span`,{className:`text-[11px] uppercase tracking-[0.25em] text-[#9A7B2C] font-semibold mb-1`,children:[`Estás invitado a nuestra `,T.type]}),(0,h.jsx)(`h1`,{className:`font-script text-5xl md:text-6xl text-[#8C6D46] mb-2`,children:T.title}),A.length>0&&(0,h.jsx)(`div`,{className:`relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#D4AF37]/75 shadow-xl my-2`,children:(0,h.jsx)(c,{mode:`wait`,children:(0,h.jsx)(o.img,{src:A[C],alt:T.title,initial:{opacity:0,scale:1.08},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.7},className:`w-full h-full object-cover`},C)})}),(0,h.jsxs)(`p`,{className:`font-serif italic text-stone-600 text-xs md:text-sm max-w-xs my-1.5`,children:[`"`,T.message,`"`]}),(0,h.jsx)(`p`,{className:`font-serif text-sm md:text-base capitalize font-semibold text-[#8C6D46] tracking-wide mt-1`,children:P}),(0,h.jsx)(b,{targetDate:T.date})]}),x===1&&(0,h.jsxs)(`div`,{className:`flex flex-col justify-center max-w-sm w-full py-4`,children:[(0,h.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,h.jsx)(`p`,{className:`text-xs uppercase tracking-[0.25em] text-[#9A7B2C]`,children:`Programa`}),(0,h.jsx)(`h2`,{className:`font-script text-4xl md:text-5xl text-[#8C6D46]`,children:`Itinerario`})]}),(0,h.jsx)(`div`,{className:`space-y-2.5 mb-4`,children:D.map((e,t)=>(0,h.jsxs)(`div`,{className:`curtain-glass-card p-3.5 rounded-xl shadow-sm`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-bold text-[#8C6D46] uppercase mb-0.5`,children:[(0,h.jsx)(l,{className:`w-3.5 h-3.5`}),(0,h.jsx)(`span`,{children:e.time})]}),(0,h.jsx)(`h3`,{className:`font-serif font-semibold text-sm md:text-base`,children:e.activity}),(0,h.jsx)(`p`,{className:`text-xs text-stone-600 mt-0.5`,children:e.description})]},t))}),O?.music&&(0,h.jsxs)(`div`,{className:`curtain-glass-card p-3.5 rounded-xl shadow-sm`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-2 text-[#8C6D46] mb-1.5`,children:[(0,h.jsx)(u,{className:`w-4 h-4`}),(0,h.jsx)(`span`,{className:`font-serif font-semibold text-xs uppercase tracking-wider`,children:`Música & Fiesta`})]}),(0,h.jsx)(`ul`,{className:`text-xs text-stone-600 space-y-1 pl-5 list-disc`,children:O.music.map((e,t)=>(0,h.jsx)(`li`,{children:e},t))})]})]}),x===2&&(0,h.jsxs)(`div`,{className:`flex flex-col justify-center max-w-sm w-full py-4`,children:[(0,h.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,h.jsx)(`p`,{className:`text-xs uppercase tracking-[0.25em] text-[#9A7B2C]`,children:`Recuerdos & Familia`}),(0,h.jsx)(`h2`,{className:`font-script text-4xl md:text-5xl text-[#8C6D46]`,children:`Padrinos & Galería`})]}),k.length>0&&(0,h.jsxs)(`div`,{className:`curtain-glass-card p-4 rounded-2xl shadow-sm mb-4 text-center`,children:[(0,h.jsxs)(`div`,{className:`flex items-center justify-center gap-2 text-[#8C6D46] mb-2`,children:[(0,h.jsx)(f,{className:`w-4 h-4`}),(0,h.jsx)(`h3`,{className:`font-serif text-sm uppercase tracking-widest`,children:`Corte de Honor`})]}),(0,h.jsx)(`ul`,{className:`space-y-1.5 text-xs`,children:k.map((e,t)=>(0,h.jsx)(`li`,{className:`border-b border-[#D4AF37]/25 last:border-0 pb-1 last:pb-0 font-serif`,children:e},t))})]}),(0,h.jsx)(`div`,{className:`grid grid-cols-2 gap-2.5`,children:A.map((e,t)=>(0,h.jsx)(`div`,{className:`h-32 rounded-xl overflow-hidden curtain-glass-card shadow-sm`,children:(0,h.jsx)(`img`,{src:e,alt:`Foto ${t+1}`,loading:`lazy`,decoding:`async`,className:`w-full h-full object-cover`})},t))})]}),x===3&&(0,h.jsxs)(`div`,{className:`flex flex-col justify-center max-w-sm w-full py-4 text-center`,children:[(0,h.jsx)(`p`,{className:`text-xs uppercase tracking-[0.25em] text-[#9A7B2C]`,children:`Dónde nos vemos`}),(0,h.jsx)(`h2`,{className:`font-script text-4xl md:text-5xl text-[#8C6D46] mb-4`,children:`Ubicaciones`}),(0,h.jsx)(`div`,{className:`space-y-3 mb-4`,children:E.map((e,t)=>(0,h.jsxs)(`div`,{className:`curtain-glass-card p-4 rounded-2xl shadow-sm flex flex-col items-center`,children:[(0,h.jsx)(`h3`,{className:`font-serif text-base font-semibold text-[#8C6D46]`,children:e.name}),(0,h.jsxs)(`p`,{className:`text-xs text-stone-600 my-1 flex items-center gap-1`,children:[(0,h.jsx)(s,{className:`w-3.5 h-3.5 text-[#8C6D46]`}),e.address,` (`,e.time,`)`]}),e.mapsUrl&&(0,h.jsxs)(`a`,{href:e.mapsUrl,target:`_blank`,rel:`noopener noreferrer`,className:`mt-2 inline-flex items-center px-4 py-1.5 rounded-full bg-[#8C6D46] text-white text-xs font-semibold shadow-sm hover:opacity-90`,children:[(0,h.jsx)(d,{className:`w-3.5 h-3.5 mr-1.5`}),`Ver en Google Maps`]})]},t))}),j?.gifts&&(0,h.jsxs)(`div`,{className:`curtain-glass-card p-3.5 rounded-xl text-xs text-stone-600 flex items-center justify-center gap-2`,children:[(0,h.jsx)(r,{className:`w-4 h-4 text-[#8C6D46] shrink-0`}),(0,h.jsx)(`span`,{children:j.gifts})]})]})]},x)}),(0,h.jsx)(`button`,{onClick:N,"aria-label":`Anterior`,className:`fixed left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/90 border border-[#D4AF37]/50 text-[#8C6D46] shadow-md hover:bg-white transition`,children:(0,h.jsx)(t,{className:`w-5 h-5`})}),(0,h.jsx)(`button`,{onClick:M,"aria-label":`Siguiente`,className:`fixed right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/90 border border-[#D4AF37]/50 text-[#8C6D46] shadow-md hover:bg-white transition`,children:(0,h.jsx)(n,{className:`w-5 h-5`})}),(0,h.jsx)(`div`,{className:`fixed bottom-4 left-0 right-0 z-30 flex justify-center items-center gap-2`,children:Array.from({length:4}).map((e,t)=>(0,h.jsx)(`button`,{onClick:()=>S(t),"aria-label":`Ir a diapositiva ${t+1}`,className:`h-2 rounded-full transition-all duration-300 ${t===x?`w-8 bg-[#8C6D46]`:`w-2 bg-[#8C6D46]/35`}`},t))})]})}export{x as default};
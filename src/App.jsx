import BotanicalTheme from './themes/botanical/BotanicalTheme';
import CorporateTheme from './themes/corporate/CorporateTheme';
import AcademicTheme from './themes/academic/AcademicTheme';
import GalaTheme from './themes/gala/GalaTheme';

export default function App() {
  // Interruptor maestro de temática ('botanical' | 'corporate' | 'academic' | 'gala')
  const activeTheme = 'botanical';

  switch (activeTheme) {
    case 'corporate':
      return <CorporateTheme />;
    case 'academic':
      return <AcademicTheme />;
    case 'gala':
      return <GalaTheme />;
    case 'botanical':
    default:
      return <BotanicalTheme />;
  }
}

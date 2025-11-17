/**
 * Point d'entrée principal de l'application.
 * Fournit le contexte utilisateur à toute l'application.
 */

import { DashboardProvider } from './contexts/DashboardContext';
import Home from './pages/Home';

function App() {
  return (
    <DashboardProvider>
      <Home />
    </DashboardProvider>
  );
}

export default App;

/**
 * Point d'entrée principal de l'application.
 * Fournit le contexte utilisateur à toute l'application.
 */

import { DashboardProvider } from './contexts/DashboardContext';
import DashBoard from './pages/Dashboard';

function App() {
  return (
    <DashboardProvider>
      <DashBoard />
    </DashboardProvider>
  );
}

export default App;

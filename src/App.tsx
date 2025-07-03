/**
 * Point d'entrée principal de l'application.
 * Fournit le contexte utilisateur à toute l'application.
 */

import { UserProvider } from './contexts/UserContext';
import Home from './pages/Home';

function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}

export default App;

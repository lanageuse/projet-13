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

import { useDashboard } from '../contexts/DashboardContext';

/**
 * Composant pour afficher l'état du dashboard (chargement, erreur)
 * Retourne null si tout va bien pour permettre l'affichage normal
 */
export const DashboardStatus = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, hasError, errors } = useDashboard();

  // État de chargement
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center w-full ml-32">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-red-600 border-r-transparent"></div>
          <p className="text-lg text-gray-600">Chargement des données...</p>
        </div>
      </div>
    );
  }

  // État d'erreur
  if (hasError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 w-full ml-32">
        <div className="max-w-md rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-red-600">
            Erreur de chargement
          </h2>
          <div className="space-y-2">
            {errors.map((error, index) => (
              <p key={index} className="text-gray-600">
                • {error}
              </p>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Veuillez vérifier votre connexion et réessayer.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Rafraîchir la page
          </button>
        </div>
      </div>
    );
  }

  // Si tout va bien, afficher les enfants
  return <>{children}</>;
};
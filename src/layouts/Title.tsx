import React from 'react';
import { useDashboard } from '../contexts/DashboardContext';

/**
 * Titre de bienvenue personnalisé pour l'utilisateur.
 * @returns {JSX.Element} Composant d'en-tête avec le prénom de l'utilisateur et un message de félicitations
 */
const Title: React.FC = () => {
  const {user} = useDashboard();
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-5xl font-bold text-black">
        Bonjour <span className="text-red">{user?.getWelcomeMessage()}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Title;

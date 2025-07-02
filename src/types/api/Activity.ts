/**
 * Structure d'une session d'activité quotidienne
 */
export type ActivitySession = {
  /** Date de la session (format YYYY-MM-DD) */
  day: string;
  /** Poids de l'utilisateur en kilogrammes */
  kilogram: number;
  /** Nombre de calories brûlées pendant la session */
  calories: number;
};

/**
 * Structure de réponse de l'API pour les données d'activité
 */
export type ActivityResponse = {
  /** Conteneur des données de réponse */
  data: {
    /** Identifiant unique de l'utilisateur */
    userId: number;
    /** Liste des sessions d'activité */
    sessions: ActivitySession[];
  };
};

/**
 * Structure des données d'activité traitées utilisée dans l'application
 */
export type ActivityData = {
  /** Identifiant unique de l'utilisateur */
  userId: number;
  /** Liste des sessions d'activité */
  sessions: ActivitySession[];
};

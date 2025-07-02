/**
 * Structure d'une session moyenne d'activité
 */
export type AverageSession = {
  /** Jour de la semaine (format numérique : 1=Lundi, 7=Dimanche) */
  day: string;
  /** Durée de la session en minutes */
  sessionLength: number;
};

/**
 * Structure de réponse de l'API pour les données de sessions moyennes
 */
export type AverageSessionResponse = {
  /** Conteneur des données de réponse */
  data: {
    /** Identifiant unique de l'utilisateur */
    userId: number;
    /** Liste des sessions moyennes par jour de la semaine */
    sessions: AverageSession[];
  };
};

/**
 * Structure des données de sessions moyennes traitées utilisée dans l'application
 */
export type AverageSessionData = {
  /** Identifiant unique de l'utilisateur */
  userId: number;
  /** Liste des sessions moyennes par jour de la semaine */
  sessions: AverageSession[];
};

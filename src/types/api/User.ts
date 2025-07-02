/**
 * Structure de réponse de l'API pour les données utilisateur
 */
export type UserApiResponse = {
  /** Conteneur des données de réponse */
  data: {
    /** Identifiant unique de l'utilisateur */
    id: number;
    /** Informations personnelles de l'utilisateur */
    userInfos: {
      /** Prénom de l'utilisateur */
      firstName: string;
      /** Nom de famille de l'utilisateur */
      lastName: string;
      /** Âge de l'utilisateur en années */
      age: number;
    };
    /** Score de performance de l'utilisateur (échelle 0-1) - format legacy */
    score?: number;
    /** Score de performance du jour (échelle 0-1) - format actuel */
    todayScore?: number;
    /** Données nutritionnelles de suivi */
    keyData: {
      /** Nombre de calories quotidiennes */
      calorieCount: number;
      /** Apport quotidien en protéines (en grammes) */
      proteinCount: number;
      /** Apport quotidien en glucides (en grammes) */
      carbohydrateCount: number;
      /** Apport quotidien en lipides (en grammes) */
      lipidCount: number;
    };
  };
};

/**
 * Structure des données utilisateur traitées utilisée dans l'application
 */
export type UserData = {
  /** Identifiant unique de l'utilisateur */
  id: number;
  /** Informations personnelles de l'utilisateur */
  userInfos: {
    /** Prénom de l'utilisateur */
    firstName: string;
    /** Nom de famille de l'utilisateur */
    lastName: string;
    /** Âge de l'utilisateur en années */
    age: number;
  };
  /** Score de performance de l'utilisateur (échelle 0-1) - format legacy */
  score?: number;
  /** Score de performance du jour (échelle 0-1) - format actuel */
  todayScore?: number;
  /** Données nutritionnelles de suivi */
  keyData: {
    /** Nombre de calories quotidiennes */
    calorieCount: number;
    /** Apport quotidien en protéines (en grammes) */
    proteinCount: number;
    /** Apport quotidien en glucides (en grammes) */
    carbohydrateCount: number;
    /** Apport quotidien en lipides (en grammes) */
    lipidCount: number;
  };
};

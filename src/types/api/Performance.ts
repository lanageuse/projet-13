/**
 *  Types de performance avec leurs libellés
 * Clé : identifiant numérique du type de performance
 * Valeur : nom du type de performance (ex: "cardio", "energy", "endurance", etc.)
 */
export type PerformanceKind = {
  [key: string]: string;
};

/**
 * Structure d'une donnée de performance individuelle
 */
export type KindData = {
  /** Valeur de la performance (score ou mesure) */
  value: number;
  /** Identifiant du type de performance (référence vers PerformanceKind) */
  kind: number;
};

/**
 * Structure de réponse de l'API pour les données de performance
 */
export type PerformanceResponse = {
  /** Conteneur des données de réponse */
  data: {
    /** Identifiant unique de l'utilisateur */
    userId: number;
    /** Dictionnaire des types de performance disponibles */
    kind: PerformanceKind;
    /** Liste des données de performance de l'utilisateur */
    data: KindData[];
  };
};

/**
 * Structure des données de performance traitées utilisée dans l'application
 */
export type PerformanceData = {
  /** Identifiant unique de l'utilisateur */
  userId: number;
  /** Dictionnaire des types de performance disponibles */
  kind: PerformanceKind;
  /** Liste des données de performance de l'utilisateur */
  data: KindData[];
};

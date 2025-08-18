import { type UserData } from '../types/api/user';
import type { ScoreData } from '../types/charts/scoreData';

export class User {
  public readonly id: number;
  public readonly fullName: string;
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly age: number;
  public readonly score: number;
  public readonly nutrition: {
    calories: string;
    proteins: string;
    carbohydrates: string;
    lipids: string;
  };
  constructor(data: UserData) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;

    // Formatage du nom complet
    this.fullName = `${this.firstName} ${this.lastName}`;

    // Gestion du score (legacy vs nouveau format)
    this.score = data.todayScore ?? data.score ?? 0;

    // Formatage des données nutritionnelles avec unités
    this.nutrition = {
      calories: `${data.keyData.calorieCount.toLocaleString()}kCal`,
      proteins: `${data.keyData.proteinCount}g`,
      carbohydrates: `${data.keyData.carbohydrateCount}g`,
      lipids: `${data.keyData.lipidCount}g`,
    };
  }
  /**
   * Retourne le score en pourcentage formaté
   */
  getScorePercentage(): string {
    return `${Math.round(this.score * 100)} %`;
  }

  getScoreChartsData(): ScoreData[] {
    return [
      {
        percent: Math.round(this.score * 100),
        fill: '#e60000',
      },
    ];
  }
  /**
   * Retourne un message de bienvenue personnalisé
   */
  getWelcomeMessage(): string {
    return `${this.firstName}`;
  }
  /**
   * Retourne le nombre de calories
   */
  getCalories(): string {
    return this.nutrition.calories;
  }
  /**
   * Retourne le nombre de protéines
   */
  getProteins(): string {
    return this.nutrition.proteins;
  }
  /**
   * Retourne le nombre de carboHydrate
   */
  getCarbohydrates(): string {
    return this.nutrition.carbohydrates;
  }
  /**
   * Retourne le nombre de lipides
   */
  getLipids(): string {
    return this.nutrition.lipids;
  }
}

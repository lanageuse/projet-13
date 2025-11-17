import { type UserData } from '../types/apis';
import type { ScoreData } from '../types/charts/scoreData';

export class User {
  public readonly id: number;
  public readonly fullName: string;
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly age: number;
  public readonly score: number;
  public readonly kpis: {
    calories: string;
    proteines: string;
    glucides: string;
    lipides: string;
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
    this.kpis = {
      calories: `${data.keyData.calorieCount}`,
      proteines: `${data.keyData.proteinCount}`,
      glucides: `${data.keyData.carbohydrateCount}`,
      lipides: `${data.keyData.lipidCount}`,
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
}

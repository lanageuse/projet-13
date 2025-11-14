import type {
  AverageSession,
  FormattedSessionData,
  RawSessionData,
} from '../types/api/session';

export class Session {
  private rawSessions: RawSessionData[];

  constructor(sessions: AverageSession[] | RawSessionData[]) {
    this.rawSessions = sessions.map((session) => ({
      day:
        typeof session.day === 'string' ? parseInt(session.day) : session.day,
      sessionLength: session.sessionLength,
    }));
  }

  /**
   * Convertit un numéro de jour en abréviation française.
   *
   * @param dayNumber - Numéro du jour (1-7, lundi à dimanche)
   * @returns Abréviation du jour ou chaîne vide si invalide
   */
  adapterDayLabel = (dayNumber: number): string => {
    const dayMap: Record<number, string> = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
    };

    return dayMap[dayNumber] ?? '';
  };

  /**
   * Formate les sessions en remplaçant les numéros de jour par leurs abréviations
   * @returns Tableau de sessions formatées
   */
  formatSessions(): FormattedSessionData[] {
    return this.rawSessions.map((session) => ({
      day: this.adapterDayLabel(session.day),
      sessionLength: session.sessionLength,
    }));
  }
}

import { adapterDayLabel } from '../adapters/adaptersSession';
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
   * Formate les sessions en remplaçant les numéros de jour par leurs abréviations
   * @returns Tableau de sessions formatées
   */
  formatSessions(): FormattedSessionData[] {
    return this.rawSessions.map((session) => ({
      day: adapterDayLabel(session.day),
      sessionLength: session.sessionLength,
    }));
  }
}

/**
 * Convertit un numéro de jour en abréviation française.
 *
 * @param dayNumber - Numéro du jour (1-7, lundi à dimanche)
 * @returns Abréviation du jour ou chaîne vide si invalide
 */
export const adapterDayLabel = (dayNumber: number): string => {
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

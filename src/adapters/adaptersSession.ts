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

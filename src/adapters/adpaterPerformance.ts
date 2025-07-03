import type { PerformanceData } from '../types/api/performance';

export function adaptedPerformanceData(data: PerformanceData | null) {
  if (!data) return [];
  return data.data.map((item) => ({
    ...item,
    kindLabel: adapterLabel(data.kind[item.kind]),
  }));
}
const adapterLabel = (index: string): string => {
  const kindMap: Record<string, string> = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };
  return kindMap[index] ?? '';
};

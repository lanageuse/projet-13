/**
 * Propriétés d'une carte KPI.
 */
export type KpiProps = {
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  value: number | string;
  unity: string;
  ref: string;
};

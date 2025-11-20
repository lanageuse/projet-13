// src/types/ui.ts

import type { TooltipPayload } from 'recharts/types/state/tooltipSlice';

/**
 * Props pour les tooltips de graphiques
 */
export interface ChartTooltipProps {
  active?: boolean;
  payload?: TooltipPayload;
  label?: string | number;
}

/**
 * Props pour les curseurs personnalisés
 */
export interface ChartCursorProps {
  points?: Array<{ x: number; y: number }>;
  width?: number;
  height?: number;
}

/**
 * Élément de légende pour les graphiques
 */
export interface LegendItem {
  color: string;
  type?: string;
  value: string;
  id?: string;
}

/**
 * Props pour les légendes de graphiques
 */
export interface ChartLegendProps {
  payload?: LegendItem[];
}


/**
 * Données pour le graphique de score
 */
export interface ScoreChartData {
  percent?: number;
  fill?: string;
}

/**
 * Configuration d'une carte KPI
 */
export interface KpiConfig {
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  color: 'red' | 'yellow' | 'cyan' | 'pink';
  value: number | string;
  unity: string;
  ref: string;
}

/**
 * Props du composant KpiCard
 */
export interface KpiCardProps {
  kpi: KpiConfig;
  className?: string;
}

/**
 * Élément de navigation de la sidebar
 */
export interface SidebarItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
}

/**
 * Props communes pour les composants Card
 */
export interface CardProps {
  variant?: 'default' | 'chart' | 'kpi';
  className?: string;
  children: React.ReactNode;
}

/**
 * Props pour les composants de layout
 */
export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}
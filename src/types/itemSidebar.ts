/**
 * Interface définissant la structure d'un élément de navigation
 */
export type ItemSidebar = {
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  title: string;
};

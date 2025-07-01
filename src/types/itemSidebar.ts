/**
 * Interface définissant la structure d'un élément de navigation
 *
 * @interface Item
 * @property {React.FC<React.SVGProps<SVGSVGElement>>} component - Composant SVG à afficher
 * @property {string} link - URL de destination du lien
 * @property {string} title - Texte d'accessibilité pour l'élément
 */
export interface ItemSidebar {
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  title: string;
}

import Zen from '../assets/icons/zen.svg?react';
import Swim from '../assets/icons/swim.svg?react';
import Cycle from '../assets/icons/cycle.svg?react';
import Haltero from '../assets/icons/haltero.svg?react';
import type { SidebarItem } from '../types/ui';

/**
 * Composant de barre latérale pour la navigation principale
 * Affiche une liste d'icônes de navigation verticale avec un copyright en bas
 *
 * @component
 * @returns {JSX.Element} Le composant de barre latérale
 */
const Sidebar: React.FC = () => {
  // Liste des éléments de navigation de la barre latérale
  const items: SidebarItem[] = [
    {
      icon: Zen,
      href: '/',
      label: 'Accéder à la dashboard zen',
    },
    {
      icon: Swim,
      href: '/',
      label: 'Accéder à la dashboard zen',
    },
    {
      icon: Cycle,
      href: '/',
      label: 'Accéder à la dashboard zen',
    },
    {
      icon: Haltero,
      href: '/',
      label: 'Accéder à la dashboard zen',
    },
  ];

  return (
    <aside className="fixed top-0 left-0 z-40 flex h-screen min-h-screen w-32 -translate-x-full flex-col items-center justify-between bg-black p-4 text-white transition-transform sm:translate-x-0">
      {/* Navigation principale avec les icônes d'activités */}
      <nav className="flex flex-grow flex-col items-center justify-center gap-4">
        {items.map((item: SidebarItem, index: number) => {
          const Icon = item.icon;
          return (
            <a
              href={item.href}
              className="flex h-16 w-16 items-center justify-center rounded bg-white p-2"
              key={index}
              title={item.label}
            >
              <Icon />
            </a>
          );
        })}
      </nav>

      {/* Copyright en bas de la barre latérale */}
      <div className="mb-16 rotate-270 text-xs font-medium whitespace-nowrap">
        Copyright, SportSee 2020
      </div>
    </aside>
  );
};

export default Sidebar;

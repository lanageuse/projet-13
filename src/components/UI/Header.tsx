import logo from '../../assets/logo-sportsee.svg';

/**
 * Composant d'en-tête principal de l'application
 * Affiche le logo de l'application et la navigation horizontale principale
 *
 * @component
 * @returns {JSX.Element} Le composant d'en-tête avec navigation
 */
const Header: React.FC = () => {
  // Liste des éléments de navigation
  const items: string[] = ['Accueil', 'Profil', 'Réglage', 'Communauté'];

  return (
    <header className="relative z-50 bg-black">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        {/* Logo de l'application SportSee */}
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">SportSee</span>
          <img alt="" src={logo} className="h-15 w-auto" />
        </a>

        {/* Navigation principale horizontale */}
        <div className="flex w-full justify-between px-12 pl-36">
          {items.map((item: string, index: number) => {
            return (
              <a
                href="#"
                className="hover:text-red -mx-3 block px-3 py-2 text-2xl font-semibold text-white"
                key={index}
              >
                {item}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;

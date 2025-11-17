import { useEffect, useState } from 'react';
import logo from '../assets/logo-sportsee.svg';

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
  const [isOpened, setIsOpened] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1024;
      setIsDesktop(isNowDesktop);

      // Ferme le menu dès qu’on passe en mobile
      if (!isNowDesktop) {
        setIsOpened(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="relative z-50 bg-black">
      <nav>
        <div className="flex flex-wrap items-center justify-between gap-8 p-4 px-6">
          <a
            href="/"
            className="flex min-w-fit items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-15" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="bg-red inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
            aria-controls="navbar-default"
            aria-expanded={isOpened}
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isDesktop || isOpened ? 'block' : 'hidden'
            } min-w-full md:min-w-auto md:flex-3/4`}
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:justify-around md:space-x-8 md:p-0 rtl:space-x-reverse">
              {items.map((item: string, index: number) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-red block px-3 py-2 text-xl font-bold text-white"
                    aria-current="page"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

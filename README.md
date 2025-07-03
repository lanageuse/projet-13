# SportSee

Tableau de bord d’analytics

## Prérequis

- Node.js v18+ recommandé
- npm ou yarn

## Installation

1. **Cloner le projet**

```bash
git clone <url-du-repo>
cd projet-13
```

2. **Installer les dépendances**

```bash
npm install
# ou
yarn
```

3. **Configurer les variables d’environnement**

Crée un fichier `.env` en se basant sur le fichier `.en.example` à la racine du projet avec :

```env
VITE_BASE_URL=http://localhost:3000
VITE_USER_ID=12
```

- `VITE_BASE_URL` : URL de l’API (backend)
- `VITE_USER_ID` : identifiant utilisateur ❗❗(12 ou 18) ❗❗

4. **Lancer le frontend**

```bash
npm run dev
# ou
yarn dev
```

## Scripts utiles

- `dev` : démarre le serveur de développement
- `build` : build de l’application
- `lint` : vérifie la qualité du code
- `test` : lance les tests (pas encore fait 😞)

## Technologies principales

- React 19, TypeScript, Vite, Tailwind CSS, Recharts

---

# Achyuth's Portfolio

My personal Portfolio Website. This highlights professional experience, technical skills, selected projects, and contact information in a modern single-page interface.

## Built with

- React 18
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- React Icons

## Getting started

### Prerequisites

Install a current LTS release of [Node.js](https://nodejs.org/) (Node.js 18 or later is recommended) and [pnpm](https://pnpm.io/installation). With modern Node.js versions, you can enable pnpm through Corepack:

```bash
corepack enable
```

### Installation

```bash
git clone https://github.com/achyu-dev/my-portfolio.git
cd achyuth
pnpm install
```

### Run locally

```bash
pnpm dev --host 0.0.0.0
```

Vite will print the local development URL in your terminal, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts the Vite development server. |
| `pnpm build` | Creates an optimized production build in `dist/`. |
| `pnpm preview` | Serves the production build locally for review. |
| `pnpm lint` | Runs ESLint across JavaScript and JSX files. |

## Project structure

```text
src/
├── assets/             # Images and other static visual assets
├── components/         # Portfolio sections and shared UI components
├── constants/          # Experience, project, and contact content
├── App.jsx             # Routes and page composition
├── index.css           # Global styles and Tailwind directives
└── main.jsx            # Application entry point
```

## Customizing the portfolio

Most portfolio content lives in [`src/constants/index.js`](src/constants/index.js). Update the following exports to make the site your own:

- `HERO_CONTENT` and `ABOUT_TEXT` for the introduction
- `EXPERIENCES` for career history
- `PROJECTS` for featured work
- `CONTACT` for your email address and phone number

Social links and the resume link are configured in [`src/components/Navbar.jsx`](src/components/Navbar.jsx). Replace the assets in `src/assets/` to update project images, profile imagery, or branding.

## Deployment

Currently, the live URL is : https://achyudev.vercel.app

```bash
pnpm build
```

Deploy the generated `dist/` directory. If your hosting platform uses client-side routing, configure it to redirect unknown paths to `index.html` so `/blogs` loads correctly on a direct visit.

## Contact

- Email: [achyuthss2003@gmail.com](mailto:achyuthss2003@gmail.com)
- LinkedIn: [achyuthss](https://www.linkedin.com/in/achyuthss/)
- GitHub: [achyu-dev](https://github.com/achyu-dev)

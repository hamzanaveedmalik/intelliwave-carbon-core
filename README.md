# Intelliwave Carbon Core

> Enterprise Technology Solutions Platform

A modern, responsive web application showcasing Intelliwave's comprehensive enterprise technology services including cloud infrastructure, cybersecurity, digital transformation, and AI automation solutions.

![React](https://img.shields.io/badge/React-18.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)

## 🚀 Features

- **Modern Tech Stack** - Built with React 18, TypeScript, and Vite for lightning-fast performance
- **Beautiful UI** - Leveraging shadcn/ui components with Radix UI primitives and Tailwind CSS
- **Fully Responsive** - Optimized for all devices from mobile to desktop
- **Type-Safe** - Full TypeScript implementation for robust code
- **Client-Side Routing** - Seamless navigation with React Router
- **Contact Forms** - Integrated with Formspree for reliable form submissions
- **Accessible** - Built with accessibility in mind using Radix UI primitives
- **Video Backgrounds** - Engaging hero sections with video content
- **Dark Mode Ready** - Theme support with next-themes

## 📦 Tech Stack

### Core

- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Routing & State

- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation

### Additional Tools

- **[date-fns](https://date-fns.org/)** - Date manipulation
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[class-variance-authority](https://cva.style/)** - Component variants

## 🏁 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: install via [nvm](https://github.com/nvm-sh/nvm))
- **npm** 9+ or **bun** 1+

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd intelliwave-carbon-core

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 📜 Available Scripts

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `npm run dev`       | Start development server with HMR |
| `npm run build`     | Build for production              |
| `npm run build:dev` | Build in development mode         |
| `npm run lint`      | Run ESLint code analysis          |
| `npm run preview`   | Preview production build locally  |

## 📁 Project Structure

```
intelliwave-carbon-core/
├── public/                 # Static assets
│   ├── bannerdesktop.mp4  # Marketing video
│   ├── HeroVid.mov        # Hero section video
│   ├── holographic.png    # About section image
│   ├── favicon.ico        # Site icon
│   └── robots.txt         # SEO configuration
│
├── src/
│   ├── assets/            # Project assets
│   │   └── intelliwave-logo.svg
│   │
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ... (30+ components)
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   └── PageLayout.tsx
│   │
│   ├── pages/            # Page components
│   │   ├── company/      # Company pages
│   │   │   ├── About.tsx
│   │   │   └── Careers.tsx
│   │   ├── legal/        # Legal pages
│   │   │   ├── Privacy.tsx
│   │   │   └── Terms.tsx
│   │   ├── services/     # Service pages
│   │   │   ├── AIAutomation.tsx
│   │   │   ├── CloudInfrastructure.tsx
│   │   │   ├── Cybersecurity.tsx
│   │   │   └── DigitalTransformation.tsx
│   │   ├── Index.tsx     # Home page
│   │   ├── Solutions.tsx # Solutions overview
│   │   └── NotFound.tsx  # 404 page
│   │
│   ├── hooks/            # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   │
│   ├── App.tsx           # Root component with routing
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # Vite type definitions
│
├── dist/                 # Production build output
├── components.json       # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Project dependencies
```

## 🗺️ Routes

### Main Pages

- `/` - Home page with hero, services overview, and contact
- `/solutions` - Solutions overview page

### Services

- `/services/cloud-infrastructure` - Cloud Infrastructure solutions
- `/services/cybersecurity` - Cybersecurity services
- `/services/digital-transformation` - Digital Transformation offerings
- `/services/ai-automation` - AI & Automation solutions

### Company

- `/company/about` - About Intelliwave
- `/company/careers` - Career opportunities

### Legal

- `/legal/privacy` - Privacy Policy
- `/legal/terms` - Terms of Service

## 🎨 Styling

The project uses Tailwind CSS with a custom design system configured in `tailwind.config.ts`. The color palette and component styling follow a consistent design language.

### Custom Styles

- Custom CSS variables defined in `src/index.css`
- IBM Plex Sans font family
- Gradient utilities for modern aesthetics
- Responsive breakpoints for all devices

## 🔧 Development

### Code Quality

- **TypeScript** - Strict type checking enabled
- **ESLint** - Code linting with React and TypeScript rules
- **Path Aliases** - `@/` alias configured for clean imports

### Component Development

Components follow the shadcn/ui pattern:

1. Accessible by default (Radix UI)
2. Fully customizable with Tailwind
3. Type-safe with TypeScript
4. Composable and reusable

### Adding New Components

```bash
# Using shadcn/ui CLI (if needed)
npx shadcn-ui@latest add [component-name]
```

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory, ready to deploy to any static hosting service.

### Recommended Hosting Platforms

- **Vercel** - Zero-config deployment
- **Netlify** - Simple drag-and-drop or Git integration
- **AWS S3 + CloudFront** - Scalable enterprise solution
- **GitHub Pages** - Free hosting for static sites

### Environment Variables

If you need environment variables, create a `.env` file:

```bash
VITE_API_URL=your_api_url
VITE_FORMSPREE_ID=your_formspree_id
```

Access them in code with `import.meta.env.VITE_*`

## 📝 Configuration Files

- `vite.config.ts` - Vite bundler configuration
- `tailwind.config.ts` - Tailwind CSS theming and plugins
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.js` - ESLint rules and plugins
- `components.json` - shadcn/ui component configuration
- `postcss.config.js` - PostCSS plugins (Tailwind, Autoprefixer)

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

All rights reserved © Intelliwave

## 🐛 Troubleshooting

### Port Already in Use

If port 8080 is already in use, modify the port in `vite.config.ts`:

```typescript
server: {
  port: 3000, // Change to your preferred port
}
```

### Type Errors

Run TypeScript check:

```bash
npx tsc --noEmit
```

### Build Errors

Clear cache and rebuild:

```bash
rm -rf node_modules dist
npm install
npm run build
```

## 📧 Contact

For questions or support, visit our contact form on the website or reach out to the development team.

---

**Built with ❤️ by the Intelliwave team**

# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Inspired by professional portfolio designs.

## Features

- **Modern Design**: Clean, minimalist dark theme with accent colors
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Component-Based**: Organized React components for easy maintenance
- **Fast Performance**: Built with Vite for optimal performance
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation header with mobile menu
│   ├── Hero.jsx        # Hero section with intro
│   ├── About.jsx       # About me section with skills
│   ├── Experience.jsx  # Work experience section
│   ├── Projects.jsx    # Portfolio projects showcase
│   ├── Contact.jsx     # Contact/CTA section
│   └── Footer.jsx      # Footer with social links
├── App.jsx             # Main app component
├── index.css           # Global styles
└── main.jsx            # Entry point
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`.

## Customization

To customize the portfolio with your own information:

1. **Update Navbar**: Edit company/name in [Navbar.jsx](src/components/Navbar.jsx#L15)
2. **Hero Section**: Update your name and tagline in [Hero.jsx](src/components/Hero.jsx)
3. **About Section**: Add your bio and skills in [About.jsx](src/components/About.jsx)
4. **Experience**: Update work history in [Experience.jsx](src/components/Experience.jsx)
5. **Projects**: Add your projects in [Projects.jsx](src/components/Projects.jsx)
6. **Contact**: Update email in [Contact.jsx](src/components/Contact.jsx)
7. **Social Links**: Update links in [Contact.jsx](src/components/Contact.jsx#L56)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## Styling

The portfolio uses Tailwind CSS with custom configuration:

- **Color Scheme**:
  - Dark background: `#0a0e27`
  - Accent color: `#64ffda`
  - Text: Various shades of slate

- **Fonts**:
  - Sans-serif: Calibre, Inter
  - Monospace: Fira Code

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is open source and available under the MIT License.

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Brittany Chiang's Portfolio](https://v4.brittanychiang.com/) - Design inspiration

## Next Steps

After customization:

1. Replace placeholder images with your own portfolio images
2. Add your actual project links and GitHub repositories
3. Update social media links
4. Deploy to Vercel, Netlify, or GitHub Pages

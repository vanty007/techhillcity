# TechHillCity React App

A modern React application built with Chakra UI v3, React 19, and Vite.

## 🚀 Tech Stack

- **React 19** - Latest React version
- **Chakra UI v3** - Modern component library with design tokens
- **Vite** - Fast build tool and dev server
- **React Router v6** - Client-side routing
- **Swiper** - Touch-enabled carousels
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       # Two-tier responsive navbar with sticky header
│   │   └── Footer.jsx       # Multi-column footer with social links
│   ├── sections/
│   │   ├── Hero.jsx         # Animated hero section
│   │   ├── Services.jsx     # Service cards grid
│   │   ├── Testimonials.jsx # Testimonial carousel
│   │   ├── TechTrends.jsx   # Progress bars & image gallery
│   │   └── ClientLogos.jsx  # Auto-scrolling client logos
│   └── ui/                  # Reusable UI components
├── pages/
│   └── Home.jsx            # Home page assembly
├── assets/
│   └── images/             # Copied from root img/
├── theme/
│   └── index.js            # Chakra UI v3 custom theme
└── utils/                  # Helper functions
```

## 🎨 Design System

### Color Palette

- **Primary**: Cyan Blue (#0693E3)
- **Secondary**: White (#FFFFFF)
- **Accent**: Teal/Blue variants
- **Text**: Gray scale for readability

### Typography

- **Font Family**: Inter (modern sans-serif)
- **Headings**: Bold, with proper hierarchy
- **Body**: Readable with tall line height

### Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ✨ Features

### Navbar

- Two-tier header with top banner (email, work hours, call button)
- Sticky navigation on scroll
- Responsive mobile menu with hamburger icon
- Services dropdown menu
- Active link highlighting

### Hero Section

- Animated entrance with Framer Motion
- Two-column layout (text left, image right)
- Responsive stacking on mobile
- CTA buttons with hover effects
- Modern gradient background

### Services Section

- 3-column grid (responsive)
- Hover effects on cards
- Lucide React icons
- Clickable cards linking to service pages

### Testimonials Carousel

- Auto-play Swiper carousel
- Shows 1 on mobile, 2 on desktop
- Navigation arrows
- Client images and quotes

### Tech Trends Section

- Animated progress bars (triggered on scroll)
- 2x2 image gallery with hover effects
- Two-column responsive layout

### Client Logos Carousel

- Infinite auto-scrolling
- Grayscale to color on hover
- Responsive logo sizing (2-6 per view)

### Footer

- 4-column grid (responsive)
- Social media links
- Quick links and services
- Contact information
- Copyright notice

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

All components are fully responsive using Chakra UI's responsive props:

- Base: Mobile-first design
- md: Tablet breakpoint
- lg: Desktop breakpoint

Example:

```jsx
<Box
  display={{ base: "block", md: "flex" }}
  fontSize={{ base: "sm", md: "md", lg: "lg" }}
/>
```

## 🎯 Future Enhancements

- About page
- Services detail pages (IT, Web, Mobile)
- Projects/Portfolio page
- Contact page with React Hook Form
- Backend integration for contact forms
- Blog section
- Dark mode toggle

## 📝 Notes

- Original HTML files remain untouched in the root directory
- Images copied from root `img/` to `react-app/src/assets/images/`
- Uses Chakra UI v3 API (createSystem, defineConfig)
- Compatible with React 19
- All animations use Framer Motion
- No linter errors

## 🔗 Routes

- `/` - Home page
- `/about` - About page (placeholder)
- `/services` - Services pages (placeholder)
- `/contact` - Contact page (placeholder)

## 🎨 Chakra UI v3 Theme

Custom theme configured in `src/theme/index.js`:

- Brand color tokens (50-950)
- Semantic color tokens
- Custom fonts
- Breakpoints
- Component styles

The theme uses Chakra UI v3's `createSystem` API for maximum flexibility and type safety.

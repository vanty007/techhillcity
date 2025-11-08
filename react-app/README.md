# TechHillCity React App

A modern, fully responsive React application built with Chakra UI v3, React 19, and Vite.

## 🚀 Tech Stack

- **React 19** - Latest React version
- **Chakra UI v3** - Modern component library with design tokens
- **Vite** - Fast build tool and dev server
- **React Router v6** - Client-side routing
- **React Hook Form** - Form validation and handling
- **Swiper** - Touch-enabled carousels
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Two-tier responsive navbar with sticky header
│   │   └── Footer.jsx          # Multi-column footer with social links
│   ├── sections/
│   │   ├── Hero.jsx            # Animated hero section
│   │   ├── Services.jsx        # Service cards grid
│   │   ├── Testimonials.jsx    # Testimonial carousel
│   │   ├── TechTrends.jsx      # Progress bars & image gallery
│   │   ├── ClientLogos.jsx     # Auto-scrolling client logos
│   │   ├── AboutHero.jsx       # About page hero section
│   │   ├── WhatWeDo.jsx        # Tech stack showcase
│   │   ├── ServiceHero.jsx     # Service page hero with tech list
│   │   ├── ServiceOfferings.jsx # Service cards with filter
│   │   ├── ProductionProcess.jsx # Process tabs section
│   │   ├── PortfolioGallery.jsx # Filterable project gallery
│   │   ├── ContactInfo.jsx     # Contact information cards
│   │   └── ContactForm.jsx     # Contact form with validation
│   └── ui/
│       ├── PageHeader.jsx      # Reusable page header with breadcrumbs
│       └── field.jsx           # Form field wrapper
├── pages/
│   ├── Home.jsx               # Home page
│   ├── About.jsx              # About page
│   ├── Services.jsx           # Services overview
│   ├── ITServices.jsx         # IT Services detail page
│   ├── WebDevelopment.jsx     # Web Development detail page
│   ├── MobileDevelopment.jsx  # Mobile Development detail page
│   ├── Projects.jsx           # Portfolio/Projects page
│   └── Contact.jsx            # Contact page with form
├── assets/
│   └── images/                # Project images
├── theme/
│   └── index.js               # Chakra UI v3 custom theme
└── App.jsx                    # Route configuration
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

### 🏠 Home Page

- **Navbar**: Two-tier header with sticky navigation, mobile menu, and services dropdown
- **Hero Section**: Animated entrance with Framer Motion, scaled image effect
- **Services Grid**: 3-column responsive grid with hover effects
- **Testimonials**: Auto-play Swiper carousel with client reviews
- **Tech Trends**: Animated progress bars with image gallery
- **Client Logos**: Infinite auto-scrolling carousel

### 📖 About Page

- Software innovation showcase with image gallery
- Tech stack display (PHP, React, Java, CSS)
- What We Do section with detailed description
- Fully responsive layout

### 🔧 Services Pages

- **Services Overview**: Three main service categories with descriptions
- **IT Services**: Complete IT solutions and consulting
- **Web Development**: Java, PHP, C++, .NET development services
- **Mobile Development**: Mobile app benefits with detailed offerings
- Production Process tabs (Analysis, Design, Testing)

### 💼 Projects Page

- Filterable portfolio gallery (12 projects)
- Category filters: All, Design, Development, Ideas, Technology
- Hover overlay effects with project details
- Responsive masonry grid layout
- Smooth filter animations

### 📧 Contact Page

- Contact information cards (Address, Email, Phone)
- Contact form with React Hook Form validation
- Real-time form validation with error messages
- Loading states and success feedback
- Ready for backend integration

### 🎨 Global Components

- **PageHeader**: Reusable header with breadcrumbs for all pages
- **Footer**: Multi-column layout with social links and contact info
- **Responsive Design**: Mobile-first approach across all pages

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

- Backend API integration for contact form
- Blog section
- Dark mode toggle
- Admin dashboard
- Project detail pages
- Search functionality
- Newsletter subscription

## 📝 Notes

- Original HTML files remain untouched in the root directory
- Images copied from root `img/` to `react-app/src/assets/images/`
- Uses Chakra UI v3 API (createSystem, defineConfig)
- Compatible with React 19
- All animations use Framer Motion
- Form validation with React Hook Form
- Fully responsive across all breakpoints
- No linter errors
- SEO-ready with proper page structure
- Accessible UI components

## 🔗 Routes

- `/` - Home page
- `/about` - About Us page
- `/services` - Services overview page
- `/services/it` - IT Services detail page
- `/services/web` - Web Development detail page
- `/services/mobile` - Mobile Development detail page
- `/projects` - Portfolio/Projects page
- `/contact` - Contact page with form

## 🎨 Chakra UI v3 Theme

Custom theme configured in `src/theme/index.js`:

- Brand color tokens (50-950)
- Semantic color tokens
- Custom fonts
- Breakpoints
- Component styles

The theme uses Chakra UI v3's `createSystem` API for maximum flexibility and type safety.

## ✅ Completed Migration

All major pages have been successfully migrated from the static HTML site to a modern React application:

- ✅ Home page with all sections
- ✅ About page with company information
- ✅ Services overview and 3 detail pages
- ✅ Projects/Portfolio page with filtering
- ✅ Contact page with working form
- ✅ Responsive navbar and footer
- ✅ All animations and interactions

The application is production-ready and awaiting backend integration for the contact form.

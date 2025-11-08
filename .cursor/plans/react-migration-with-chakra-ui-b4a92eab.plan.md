<!-- b4a92eab-a34f-434e-9a6e-b8a2147b163c 89aee5c3-8f72-48ba-9de5-bf472b3b7f44 -->
# React Migration Plan: TechHillCity to Modern React with Chakra UI

## Overview

Migrate the static HTML website to a React SPA using Chakra UI, Vite, and React Router. Start with the Home page, building components incrementally. Preserve content and layout flow while implementing a modern design with cyan blue and white color palette.

## Phase 1: Project Setup

### 1.1 Install Dependencies

- Install Chakra UI v3 core packages (compatible with React 19):
  - `@chakra-ui/react@^3.0.0` (Chakra UI v3)
  - `@emotion/react@^11.13.0`
  - `@emotion/styled@^11.13.0`
- Install React Router DOM v7 (`react-router@^7.0.0` or `react-router-dom@^6.28.0`)
- Install additional libraries:
  - `swiper@^11.1.0` for carousels/sliders (React 19 compatible)
  - `react-hook-form@^7.53.0` for form handling (React 19 compatible)
  - `@react-icons/all-files` or `lucide-react@^0.460.0` for icons (Chakra v3 uses different icon approach)
  - `framer-motion@^11.0.0` for animations (React 19 compatible)

### 1.2 Configure Chakra UI v3 Theme

- Create custom theme using Chakra UI v3 system in `react-app/src/theme/index.js`:
  - Use `createSystem` from `@chakra-ui/react` (v3 API)
  - Define color tokens with cyan blue as primary (#0693e3 or similar)
  - Configure semantic tokens for light/dark mode
  - Typography: Modern web fonts using `defineTextStyles`
  - Custom breakpoints using `defineBreakpoints`
- Set up `ChakraProvider` with `system` prop (v3 provider setup)

### 1.3 Set Up React Router

- Configure routes in `react-app/src/App.jsx`:
  - `/` - Home page
  - `/about` - About page (placeholder for now)
  - `/services` - Services pages (placeholder)
  - `/contact` - Contact page (placeholder)
- Create `react-app/src/pages/Home.jsx` as main page component

### 1.4 Project Structure

Create component structure:

```
react-app/src/
  ├── components/
  │   ├── layout/
  │   │   ├── Navbar.jsx
  │   │   └── Footer.jsx
  │   ├── sections/
  │   │   ├── Hero.jsx
  │   │   ├── Services.jsx
  │   │   ├── Testimonials.jsx
  │   │   ├── TechTrends.jsx
  │   │   └── ImageGallery.jsx
  │   └── ui/ (reusable UI components)
  ├── pages/
  │   └── Home.jsx
  ├── assets/
  │   └── images/ (copied from root img/)
  ├── theme/
  │   └── index.js
  └── utils/ (helper functions)
```

## Phase 2: Asset Migration

### 2.1 Copy Images

- Copy essential images from root `img/` to `react-app/src/assets/images/`:
  - `image-banner-home5.png` (hero image)
  - `image-box1.jpg`, `image-box2.jpg`, `image-box3.jpg`, `image-box4.jpg` (gallery)
  - `testi1.png`, `sprinkle.png` (testimonials)
  - `logo.svg` or `logo-light.svg` (logo)
  - Client logos (client1.svg through client6.svg)
  - Any other images referenced in homepage sections

## Phase 3: Component Development (Incremental)

### 3.1 Navbar Component (`components/layout/Navbar.jsx`)

**Requirements:**

- Two-tier header structure:
  - **Top Banner**: Email, work hours, call button (hide on mobile)
  - **Main Navigation**: Logo on left, menu items on right
- Responsive navigation with mobile menu
- Menu items: Home, About Us, Services (dropdown), Projects, Contact
- Sticky header on scroll (main navigation bar)
- Use Chakra UI `Box`, `Flex`, `Button`, `Menu`, `IconButton`
- Use Chakra icons for mobile menu toggle, phone icon, email icon
- Extract navigation structure from `index.html` lines 524-534

**Features:**

- Top banner with contact info and call button
- Mobile hamburger menu
- Dropdown for Services submenu
- Active link highlighting
- Smooth scroll behavior

### 3.2 Footer Component (`components/layout/Footer.jsx`)

**Requirements:**

- Multi-column layout (company info, quick links, contact)
- Social media icons (use Chakra icons)
- Copyright information
- Responsive: stacks on mobile
- Extract content from footer section in `index.html`

**Features:**

- Contact information display
- Social links
- Footer navigation links

### 3.3 Hero Section (`components/sections/Hero.jsx`)

**Requirements:**

- Two-column layout: text left, image right
- Preserve layout flow from `index.html` lines 808-848
- Animated hero with:
  - Fade-in animations for text
  - Slide-in animation for image
  - CTA button with hover effects
- Content from existing HTML:
  - Subtitle: "For Over 10 Years. For Multi Users"
  - Heading: "Enterprise & Consumer Apps Development"
  - Description: "We have diversity of professional software engineers..."
  - Image: `image-banner-home5.png`

**Features:**

- Responsive: stacks on mobile (image above text)
- Animated entrance using Framer Motion
- Modern gradient backgrounds or effects
- CTA button linking to services or contact

### 3.4 Services Section (`components/sections/Services.jsx`)

**Requirements:**

- Grid layout (3 columns desktop, responsive)
- Service cards with icons and titles
- Extract from `index.html` lines 849-900:
  - Custom Software Development
  - Outsourcing Development
  - Software Product Development
- Use Chakra icons (replace Flaticon icons)
- Hover effects and animations

**Features:**

- Card-based design with shadows
- Icon integration
- Clickable cards (navigate to service pages)
- Responsive grid

### 3.5 Testimonials Section (`components/sections/Testimonials.jsx`)

**Requirements:**

- Carousel/slider for testimonials
- Extract from `index.html` lines 1233-1277:
  - Two testimonials with images, names, roles, quotes
- Use Swiper or Embla for carousel
- Responsive: show 1 on mobile, 2 on desktop

**Features:**

- Auto-play carousel
- Navigation arrows
- Testimonial cards with images
- Smooth transitions

### 3.6 Tech Trends Section (`components/sections/TechTrends.jsx`)

**Requirements:**

- Two-column layout
- Left: Heading, description, progress bars
- Right: Image gallery grid (2x2)
- Extract from `index.html` lines 1278-1400:
  - Progress bars: Mobile Development (99%), Web Development (90%), UI/UX Design (99.9%)
  - Image boxes: Innovative, Creativity, Trusted Partner, Flexibility

**Features:**

- Animated progress bars
- Image gallery with hover effects
- Responsive layout

### 3.7 Client Logos Section (`components/sections/ClientLogos.jsx`)

**Requirements:**

- Horizontal scrolling carousel of client logos
- Extract logos from `index.html` (partner section around line 1048)
- Auto-scrolling carousel
- Use Swiper or similar

**Features:**

- Infinite scroll
- Responsive logo sizing
- Smooth animation

## Phase 4: Home Page Assembly

### 4.1 Create Home Page (`pages/Home.jsx`)

- Import and arrange all section components
- Add proper spacing between sections
- Ensure responsive layout
- Add smooth scroll behavior

## Phase 5: Styling & Responsiveness

### 5.1 Responsive Design

- Ensure all components work on:
  - Mobile (320px - 768px)
  - Tablet (768px - 1024px)
  - Desktop (1024px+)
- Use Chakra UI responsive props (`display={{ base: 'block', md: 'flex' }}`)

### 5.2 Theme Customization

- Apply cyan blue color scheme throughout
- Ensure proper contrast ratios
- Add subtle animations and transitions
- Modern typography with proper hierarchy

## Phase 6: Form Handling (Contact Form - Future)

### 6.1 Contact Form Setup

- Create form component with React Hook Form
- Form fields: Name, Email, Message, Phone (optional)
- Client-side validation
- Ready for backend integration (form state management)
- Use Chakra UI form components

## Technical Details

### Color Palette

- Primary: Cyan blue (#0693e3 or #00BCD4)
- Secondary: White (#FFFFFF)
- Accent: Complementary colors (teal, blue variants)
- Text: Dark gray/black for readability
- Background: White with subtle gradients

### Typography

- Headings: Modern sans-serif (Inter, Poppins, or similar)
- Body: Readable sans-serif
- Use Chakra UI `Heading` and `Text` components

### Animations

- Use Framer Motion (via Chakra UI)
- Entrance animations for sections
- Hover effects on interactive elements
- Smooth transitions

### Dependencies to Install

```json
{
  "@chakra-ui/react": "^2.x",
  "@emotion/react": "^11.x",
  "@emotion/styled": "^11.x",
  "framer-motion": "^10.x",
  "react-router-dom": "^6.x",
  "@chakra-ui/icons": "^2.x",
  "swiper": "^11.x",
  "react-hook-form": "^7.x"
}
```

## File Structure Reference

- All work in `react-app/` directory only
- Do not modify existing HTML files
- Copy images to `react-app/src/assets/images/`
- Components in `react-app/src/components/`
- Pages in `react-app/src/pages/`

## Next Steps After Home Page

Once Home page is complete, the same component-by-component approach will be used for:

- About page
- Services pages
- Projects page
- Contact page

### To-dos

- [x] Install Chakra UI, React Router, Swiper, React Hook Form, and Chakra icons dependencies
- [x] Create custom Chakra UI theme with cyan blue color palette and modern typography
- [x] Configure React Router with routes for Home, About, Services, Contact pages
- [x] Copy necessary images from root img/ directory to react-app/src/assets/images/
- [x] Build responsive Navbar component with mobile menu, dropdown, and sticky header
- [x] Build Footer component with multi-column layout, social links, and contact info
- [x] Build animated Hero section with text left, image right layout and entrance animations
- [x] Build Services section with grid layout, service cards, and Chakra icons
- [x] Build Testimonials carousel section with Swiper integration
- [x] Build Tech Trends section with progress bars and image gallery grid
- [x] Build Client Logos carousel section with auto-scrolling
- [x] Assemble Home page with all sections, proper spacing, and responsive layout
- [x] Ensure all components are fully responsive across mobile, tablet, and desktop breakpoints
# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

TechHillCity is a static HTML/CSS/JS website for a technology services company. The site is built using the Engitech WordPress theme structure but deployed as static HTML pages. It features multiple service pages, portfolio sections, and contact forms.

## Architecture

### Core Structure

This is a **multi-page static website** with no build process:
- **HTML Pages**: Each page is a standalone `.html` file in the root directory
- **Asset Organization**: Assets are organized into dedicated directories (`css/`, `js/`, `img/`, `fonts/`)
- **URL Rewriting**: `.htaccess` handles clean URLs by redirecting paths without extensions to `.html` files

### Page Structure

All HTML pages follow a consistent structure:
- **Header/Navigation**: Shared navigation bar with logo and menu items
- **Page-specific Content**: Built using Elementor-style sections with inline styles and classes
- **Footer**: Contact information and site links
- **Script Loading**: jQuery-based with multiple plugin dependencies loaded in specific order

Key pages:
- `index.html` - Homepage
- `about.html` - About Us page
- `services-it.html`, `services-web.html`, `services-mobile.html` - Service offerings
- `project.html` - Portfolio/projects showcase
- `contact.html` - Contact page with forms
- `comingsoon.html` - Coming soon landing page

### Styling System

The project uses a **layered CSS approach**:
1. **WordPress Core Styles**: Block library, WooCommerce styles (legacy from theme origin)
2. **Framework CSS**: Bootstrap for grid system
3. **Icon Libraries**: Font Awesome, Flaticon, Material Icons, custom Elementor icons
4. **Plugin Styles**: Slick slider, Magnific Popup, WooCommerce components
5. **Theme Styles**: `css/style.css` (main theme styles)
6. **Elementor Styles**: Page-specific CSS files (`css/post-XXXX.css`)
7. **Inline Styles**: Extensive inline CSS in each HTML file for customization

### JavaScript Architecture

**Load Order (critical for functionality)**:
1. jQuery core & jQuery Migrate
2. Third-party plugins (Flatpickr, Select2)
3. Slider Revolution components
4. Elementor framework
5. Custom scripts (`js/scripts.js`)

**Key Functionality** (`js/scripts.js`):
- Sticky header implementation with scroll detection
- Search toggle functionality
- Pricing table switcher (monthly/yearly)
- Tab navigation system
- Portfolio filtering using Isotope
- Slick slider for galleries
- Magnific Popup for video modals
- RTL support detection

### Special Components

**Slider Revolution**: Heavy usage of Revolution Slider for hero sections and animations
- Configuration: `setREVStartSize()` function in each HTML file
- Assets: `js/rs6.min.js`, `js/rbtools.min.js`, `css/rs6.css`

**Elementor Integration**: Pages use Elementor-generated markup and styling
- Each page has unique Elementor post CSS (e.g., `css/post-2588.css`)
- Sections use `.elementor-` prefixed classes extensively
- Custom CSS targeting specific page IDs (e.g., `.page-id-4858`)

## Common Development Commands

### Local Development

**Serve the site locally**:
```powershell
# Option 1: Using Python (if installed)
python -m http.server 8000

# Option 2: Using PHP built-in server (if installed)
php -S localhost:8000

# Option 3: Using Node.js http-server (if installed)
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

### File Management

**View site structure**:
```powershell
Get-ChildItem | Where-Object { $_.Name -like "*.html" }
```

**Check asset dependencies**:
```powershell
# Find all CSS references
Select-String -Pattern "\.css" -Path *.html | Select-Object -First 10

# Find all JS references
Select-String -Pattern "\.js" -Path *.html | Select-Object -First 10
```

### Version Control

**Check what's changed**:
```powershell
git status
git diff
```

**Commit changes**:
```powershell
git add .
git commit -m "Description of changes"
git push origin main
```

## Development Guidelines

### HTML Modifications

**When editing HTML pages**:
- Maintain consistent structure across all pages (header, main content, footer)
- All CSS link tags must come before script tags
- Preserve the exact order of CSS/JS file loading (order matters for overrides)
- Keep page-specific Elementor CSS references (e.g., `elementor-post-XXXX.css`)

**Navigation updates**: If updating the menu, edit ALL pages since navigation is duplicated in each HTML file.

### CSS Changes

**Modification hierarchy** (what takes precedence):
1. Inline styles in HTML (highest priority)
2. `#wp-custom-css` style block in HTML head
3. Page-specific Elementor CSS files
4. `css/style.css` (main theme styles)
5. Framework CSS (Bootstrap, Font Awesome, etc.)

**Adding new styles**:
- For global changes: Edit `css/style.css`
- For page-specific changes: Add to the `#wp-custom-css` style block in that page's HTML
- For Elementor widget styling: Target `.elementor-element-XXXXXX` classes

### JavaScript Updates

**When modifying `js/scripts.js`**:
- Functions are wrapped in jQuery document ready: `(function( $ ) { ... })( jQuery )`
- RTL detection functions (`rtl_isotop()`, `rtl_slick()`) are used throughout
- Sticky header logic relies on `.sticky-header` class and scroll event listeners

**Plugin dependencies**:
- Isotope for portfolio filtering (requires masonry layout)
- Slick for carousels/galleries
- Magnific Popup for lightboxes and video embeds
- Royal Preloader for loading animations

### URL Structure

The `.htaccess` file enables clean URLs:
- `about` → `about.html`
- `services-it` → `services-it.html`

**When adding new pages**: Follow the naming convention of existing pages (lowercase, hyphens for spaces).

## Common Patterns

### Adding a New Service Page

1. Duplicate an existing service page (e.g., `services-it.html`)
2. Update the `<title>` tag and page-specific content
3. Change the Elementor post CSS reference: `<link rel="stylesheet" id="elementor-post-XXXX-css" href="css/post-XXXX.css">`
4. Update page ID classes in `#wp-custom-css` block if needed (e.g., `.page-id-XXXX`)
5. Update navigation links in the new page AND all existing pages

### Form Integration

Contact forms use Contact Form 7 structure:
- Form HTML uses `.wpcf7-form-control-wrap` classes
- Custom spinner styling in `#wp-custom-css` block
- AJAX endpoint: Currently points to WordPress admin-ajax.php (may need updating for static deployment)

### Icon Usage

Multiple icon systems are available:
- **Font Awesome**: `<i class="fa fa-icon-name"></i>`
- **Flaticon**: `<i class="flaticon-icon-name"></i>`
- **Material Icons**: Via `MaterialIcons-Regular.woff2`

Check existing pages for icon class names before adding new ones.

## Deployment Considerations

### Static Hosting

This site can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Traditional web hosting with Apache (`.htaccess` support)

### Asset Loading

**All asset paths are relative**, so the site can be:
- Served from root directory: `example.com/`
- Served from subdirectory: `example.com/subfolder/` (no changes needed)

### Performance

**Current setup**:
- No minification or bundling (all assets are individual files)
- Heavy reliance on external Google Fonts API
- Multiple CSS/JS files loaded (30+ files per page)

**Optimization opportunities** (if needed):
- Combine and minify CSS files
- Combine and minify JS files
- Self-host Google Fonts
- Optimize images (many are uncompressed)
- Implement lazy loading for images below the fold

## Known Issues & Quirks

### WordPress Legacy Code

The HTML contains WordPress-specific markup that isn't functional in static deployment:
- WooCommerce classes and styles (not used)
- WordPress JSON API references (non-functional)
- Contact Form 7 AJAX endpoints (need backend to work)

These don't break functionality but add unnecessary code weight.

### Custom CSS Patterns

The `#wp-custom-css` block contains page-specific overrides using page IDs:
```css
.page-id-3872 #back-to-top { color: #656AE5; }
.page-id-4858 #back-to-top { color: #53E79C; }
```

When adding pages, you may need to add similar rules for consistency.

### Slider Revolution Configuration

Each page with sliders has inline JavaScript configuration. If copying slider code between pages, ensure the `setREVStartSize()` function is included and properly configured for the target element ID.

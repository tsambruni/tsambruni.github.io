# Personal website - tsambruni.dev

## Project Overview
A personal landing page for Thomas Sambruni, Data Engineer.
Modern, clean aesthetic with gradient accents and a notes section for random, personal thoughts.
Notes are stored in a separate `/notes` folder.

## Tech Stack
- Pure HTML, CSS, and vanilla JavaScript
- No build process or frameworks
- Deploys to GitHub Pages
- Modern design system with CSS custom properties

## Design Features
- **Modern, minimal aesthetic** inspired by Linear, Vercel, and contemporary portfolio sites
- **Light/Dark mode toggle** (persists with localStorage)
- **Gradient accents** on hero text and interactive elements
- **Glass-morphism effects** with backdrop blur on cards
- **Smooth animations** and hover transitions
- **Readable color schemes:**
  - Dark: Deep navy/black gradient background with blue-purple accents
  - Light: Off-white background with bold blue-purple accents
- **Modern typography** using system font stack
- **Card-based layout** for notes with lift-on-hover effect
- **Icon buttons** with SVG graphics
- **Fully responsive design**

## Color Palette

### Dark Mode
- Background: `#0a0a0f` → `#1a1a2e` (gradient)
- Accent: `#6366f1` → `#8b5cf6` (blue-purple gradient)
- Cards: Semi-transparent with backdrop blur
- Text: Soft white `#f0f0f0`

### Light Mode
- Background: `#fafafa` → `#f5f5f5` (gradient)
- Accent: `#3b82f6` → `#8b5cf6` (blue-purple gradient)
- Cards: White with subtle shadows
- Text: Near-black `#1a1a1a`

## Structure
```
/
├── index.html          # Main landing page
├── style.css           # All styling with CSS variables for theming
├── script.js           # Theme toggle + notes loading
├── notes/
│   ├── index.json      # JSON array of notes metadata
│   ├── README.md       # Instructions for adding notes
│   └── *.html          # Individual note pages
└── README.md           # Project documentation
```

## Adding New Notes
1. Create new HTML file in `/notes` folder using existing notes as template
2. Add entry to `/notes/index.json` with: title, slug, date
3. Use the modern card styling pattern from existing notes
4. Push to GitHub - automatically deploys

## Design Philosophy
- **Minimal & Clean**: Focus on content, not chrome
- **Modern**: Contemporary gradients and effects
- **Fast**: No heavy frameworks or dependencies
- **Accessible**: High contrast, semantic HTML
- **Simple**: Easy to understand and maintain

## Profile Image

The hero section includes a rounded profile image on the left side.

**To replace the placeholder:**
1. Add your professional photo to `/images/profile.jpg`
2. Ensure it's square (at least 400x400px)
3. Image will display as a circle with hover effect

## TODO
- Consider adding skills section
- Add more notes over time

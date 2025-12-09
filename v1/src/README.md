# António Yosica - Premium Website

A premium, high-authority personal brand website for António Yosica — SEO Specialist, Software Engineer, and creator of the LEE Method.

## ✨ Key Features

- **Pat Flynn-Inspired Design** - Warm, personal, content-rich homepage
- **PWA Support** - Installable app with offline capabilities
- **Dark/Light Mode** - Light mode as default, smooth transitions
- **Immersive E-Book Reader** - Read first 3 chapters free with surreal reading experience
- **Interactive Journey Timeline** - Surreal timeline from 1997 to present
- **Blog Categories Grid** - Organized content by topic (SEO, Empreendedorismo, Tecnologia, etc.)
- **Books Showcase** - Featured books with Amazon links
- **Courses Section** - Video trailers and course highlights
- **Speaking/Events** - Upcoming events and speaking engagements
- **Ecosystem Section** - LEE Meet & Greet, Clube LEE, Podcast
- **Modular & Scalable** - Ready to evolve into educational platform or closed community

## 🎨 Design Philosophy (Pat Flynn Style)

The website follows Pat Flynn's design approach:
- **Personal & Warm** - Friendly intro with personality traits
- **"Start Here" Section** - Clear onboarding for new visitors
- **Content Categories** - Blog organized by topics with descriptions
- **Books & Courses** - Prominent product showcases
- **Speaking Section** - Events and video demos
- **Newsletter CTA** - Motivational subscription prompt

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 💎 Design System

### Color Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `gold-500` | #C9A34E | #C9A34E | Primary accent, CTAs, highlights |
| `neutral-0` | #FFFFFF | - | Light backgrounds |
| `neutral-950` | - | #0A0A0A | Dark backgrounds |
| `neutral-900` | #171717 | - | Primary text (light) |
| `neutral-100` | - | #F5F5F5 | Primary text (dark) |

### Typography Scale

| Class | Size | Usage |
|-------|------|-------|
| `text-display-2xl` | 5rem | Hero headlines |
| `text-display-xl` | 4rem | Page titles |
| `text-display-lg` | 3rem | Section headlines |
| `text-display-md` | 2.25rem | Subsection titles |
| `text-heading-xl` | 1.5rem | Card titles |
| `text-body-xl` | 1.25rem | Lead paragraphs |
| `text-body-lg` | 1.125rem | Body text |
| `text-body-md` | 1rem | Default text |
| `text-body-sm` | 0.875rem | Small text |
| `text-label-md` | 0.75rem | Labels, badges |

### Fonts

- **Display**: Playfair Display (serif) - Headlines, cinematic text
- **Sans**: Inter (sans-serif) - Body text, UI elements

### Spacing Rhythm

Based on 8px grid:
- `space-2`: 8px
- `space-4`: 16px
- `space-6`: 24px
- `space-8`: 32px
- `space-12`: 48px
- `space-16`: 64px
- `space-24`: 96px

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Small elements |
| `rounded` | 8px | Default |
| `rounded-md` | 12px | Cards |
| `rounded-lg` | 16px | Large cards |
| `rounded-xl` | 20px | Hero elements |
| `rounded-2xl` | 24px | Feature sections |

### Shadows

```css
/* Neumorphic */
shadow-neu-flat-light
shadow-neu-flat-dark
shadow-neu-pressed-light
shadow-neu-pressed-dark

/* Elegant */
shadow-elegant-sm
shadow-elegant-md
shadow-elegant-lg
shadow-elegant-xl

/* Gold Glow */
shadow-gold-glow
shadow-gold-glow-lg

/* Cards */
shadow-card
shadow-card-hover
```

## 🧩 UI Components

### Buttons

```vue
<!-- Primary -->
<button class="btn btn-primary btn-md">Primary Action</button>

<!-- Secondary -->
<button class="btn btn-secondary btn-md">Secondary Action</button>

<!-- Ghost -->
<button class="btn btn-ghost btn-md">Ghost Button</button>

<!-- Sizes: btn-xs, btn-sm, btn-md, btn-lg, btn-xl -->
<!-- Icon button -->
<button class="btn btn-ghost btn-icon">
  <Icon name="lucide:menu" />
</button>
```

### Cards

```vue
<!-- Default -->
<div class="card p-6">Content</div>

<!-- Elevated (with hover) -->
<div class="card-elevated p-6">Content</div>

<!-- Neumorphic -->
<div class="card-neu p-6">Content</div>

<!-- Glass -->
<div class="card-glass p-6">Content</div>

<!-- Gold accent -->
<div class="card-gold p-6">Content</div>
```

### Inputs

```vue
<!-- Default input -->
<input class="input" placeholder="Enter text" />

<!-- Neumorphic input -->
<input class="input-neu" placeholder="Enter text" />

<!-- Textarea -->
<textarea class="textarea" rows="4"></textarea>

<!-- Select -->
<select class="select">
  <option>Option 1</option>
</select>
```

### Badges

```vue
<span class="badge-gold">Gold Badge</span>
<span class="badge-neutral">Neutral Badge</span>
```

### Navigation

```vue
<a class="nav-link">Link</a>
<a class="nav-link nav-link-active">Active Link</a>
```

## 🎬 Animations

### CSS Classes

```css
/* Fade animations */
animate-fade-in
animate-fade-in-up
animate-fade-in-down
animate-fade-in-left
animate-fade-in-right

/* Scale */
animate-scale-in

/* Other */
animate-slide-up
animate-float
animate-pulse-gold
animate-shimmer

/* Delays */
animation-delay-100
animation-delay-200
animation-delay-300
animation-delay-500
animation-delay-700
animation-delay-1000
```

### Composables

```typescript
// Scroll-based visibility
const { isVisible, elementRef } = useAnimation()

// Parallax effect
const { offset, elementRef, style } = useParallax(0.5)

// Stagger animations
const { getDelay } = useStaggerAnimation(items.length, 100)

// Scroll progress
const { progress, isScrolled } = useScrollProgress()
```

## 📱 Responsive Breakpoints

| Breakpoint | Size | Usage |
|------------|------|-------|
| `xs` | 375px | Small phones |
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

## 📐 Layout Containers

```vue
<!-- Narrow (800px) - Blog posts, legal pages -->
<div class="container-narrow">...</div>

<!-- Default (1200px) - Most pages -->
<div class="container-default">...</div>

<!-- Wide (1400px) - Feature sections -->
<div class="container-wide">...</div>
```

## 🎨 Interaction Guidelines

### Hover States
- **Buttons**: Scale up 2%, add shadow glow
- **Cards**: Lift up 4px, increase shadow
- **Links**: Underline animation, color change to gold
- **Icons**: Scale up 10%

### Transitions
- **Fast** (150ms): Micro-interactions, hover states
- **Base** (300ms): Default transitions
- **Slow** (500ms): Page transitions, complex animations
- **Apple** (400ms): Smooth, premium feel

### Focus States
- 2px gold ring with 2px offset
- Visible on keyboard navigation

### Motion Principles
1. **Purposeful**: Every animation serves a function
2. **Subtle**: Enhance, don't distract
3. **Consistent**: Same patterns throughout
4. **Performant**: Use transform/opacity only

## 📁 Project Structure

```
v1/src/
├── assets/
│   └── css/
│       └── main.css              # Design system & components
├── components/
│   ├── ui/
│   │   ├── UiButton.vue
│   │   ├── UiCard.vue
│   │   ├── UiInput.vue
│   │   ├── UiTextarea.vue
│   │   ├── UiBadge.vue
│   │   └── UiSection.vue
│   └── journey/
│       └── JourneyTimeline.vue   # Surreal interactive timeline
├── composables/
│   ├── useAnimation.ts
│   └── useScrollProgress.ts
├── layouts/
│   └── default.vue               # Main layout with header/footer/ecosystem
├── pages/
│   ├── index.vue                 # Home
│   ├── sobre-mim.vue             # About (with Journey Timeline)
│   ├── metodo-lee.vue            # LEE Method
│   ├── livros/
│   │   ├── index.vue             # Books listing
│   │   └── [id]/
│   │       ├── index.vue         # Book detail
│   │       └── ler.vue           # Immersive reading experience
│   ├── blog/
│   │   ├── index.vue             # Blog listing
│   │   └── [slug].vue            # Blog post
│   ├── contacto.vue              # Contact
│   ├── newsletter.vue            # Newsletter
│   ├── politica-privacidade.vue
│   ├── termos-condicoes.vue
│   └── cookies.vue
├── public/
│   └── icons/                    # PWA icons
├── app.vue
├── nuxt.config.ts
├── tailwind.config.ts
└── package.json
```

## 🌙 Dark/Light Mode

The site supports both dark and light modes with automatic system preference detection.

Toggle is available in the header navigation.

```vue
<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
```

## 📝 SEO

Each page includes proper SEO meta tags:

```vue
<script setup>
useSeoMeta({
  title: 'Page Title | António Yosica',
  description: 'Page description for search engines.',
})
</script>
```

## 🔧 Tech Stack

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS
- **Icons**: Nuxt Icon (Lucide)
- **Fonts**: Nuxt Fonts (Google Fonts)
- **Images**: Nuxt Image
- **Color Mode**: @nuxtjs/color-mode
- **PWA**: @vite-pwa/nuxt
- **Motion**: @vueuse/motion
- **Utilities**: VueUse

## 📱 PWA Features

- Installable on mobile and desktop
- Offline reading capability
- Auto-update on new versions
- Custom app icons

## 📚 E-Book Reader Features

- **Free Preview**: First 3 chapters of each book
- **Adjustable Typography**: Font size control
- **Reading Progress**: Visual progress bar
- **Chapter Navigation**: Easy chapter switching
- **Dark/Light Mode**: Comfortable reading in any environment
- **Responsive Design**: Optimized for all devices

## 🌟 Ecosystem

The footer includes the António Yosica Ecosystem:

- **LEE Meet & Greet** - Exclusive networking events
- **Clube LEE** - Premium learning community
- **Podcast** - Conversations about SEO and business

## 🚀 Future Evolution

The architecture is designed to evolve into:

- Educational platform with courses
- Closed community with member areas
- Subscription-based content
- Interactive learning experiences

## 📄 License

All rights reserved © António Yosica

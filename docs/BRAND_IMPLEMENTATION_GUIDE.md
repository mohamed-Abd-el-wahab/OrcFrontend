# ORC Brand Implementation Guide

This document provides technical implementation guidelines for the ORC brand system in our React/TypeScript frontend application.

## Brand Overview

ORC (Open Robot Combat) is a movement to inspire the next generation of engineers and innovators through robot combat competitions. Our brand reflects:

- **Inspiring**: Motivates participants to dream big and innovate
- **Tech-savvy**: Modern innovation with clarity and relevance  
- **Youthful & Energetic**: Fresh and exciting tone for young audiences
- **Supportive & Collaborative**: Encourages teamwork and mentorship
- **Competitive & Bold**: Reflects the thrill of robot combat challenges

## Color System

### Brand Colors (Primary Palette)

```css
/* Primary Brand Blue */
--orc-blue: #0000F2;

/* Brand Black */
--orc-black: #000000;

/* Brand White */
--orc-white: #FFFFFF;

/* Text Colors */
--primary-text: #FFFFFF;
--secondary-text: #A0A0A8;
--accent-text: #0000F2;
```

### Usage in Components

```tsx
// Primary brand color
<div className="bg-orc-blue text-orc-white">

// Text colors
<h1 className="text-primary-text">
<p className="text-secondary-text">
<span className="text-accent-text">
```

## Typography System

### Font Hierarchy

1. **Primary Font: Aileron** - For headlines, UI elements, and brand logos
2. **Secondary Font: Montserrat** - For body text, descriptions, and supporting content

### Tailwind Classes

```tsx
// Font families
<h1 className="font-aileron">Primary Headlines</h1>
<p className="font-montserrat">Body text content</p>

// Brand typography classes
<h1 className="brand-headline">Main Headlines</h1>
<h2 className="brand-subhead">Subheadings</h2>
<p className="brand-body">Body text</p>
```

### Typography Specifications

```css
.brand-headline {
  font-family: 'Aileron', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.brand-subhead {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.brand-body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}
```

## Logo Usage

### Logo Guidelines

- **Minimum size**: 30mm print / 88px digital
- **Clear space**: Height of the large arrow element
- **Positioning**: Follow exact proportions as provided
- **Usage**: Use provided SVG files from `/public/` directory

### Implementation

```tsx
// Header logo
<img 
  src="/header_logo.svg" 
  alt="ORC Logo" 
  className="h-8 w-auto hover:scale-105 transition-transform duration-300"
/>

// Hero section logo
<img 
  src="/hero_section_logo.svg" 
  alt="ORC Logo" 
  className="h-16 w-auto"
/>
```

## Button System

### Primary Button

```tsx
<button className="btn-brand-primary">
  Primary Action
</button>
```

### Secondary Button

```tsx
<button className="btn-brand-secondary">
  Secondary Action
</button>
```

### Custom Button Implementation

```css
.btn-brand-primary {
  @apply px-6 py-3 bg-orc-blue text-orc-white rounded-xl font-montserrat font-semibold;
  @apply hover:bg-blue-700 transition-all duration-300 transform hover:scale-105;
  @apply shadow-lg hover:shadow-xl;
  box-shadow: 0 4px 15px rgba(0, 0, 242, 0.3);
}
```

## Spacing System

### Brand Spacing Scale

```css
--brand-xs: 0.5rem;   /* 8px */
--brand-sm: 1rem;     /* 16px */
--brand-md: 1.5rem;   /* 24px */
--brand-lg: 2rem;     /* 32px */
--brand-xl: 3rem;     /* 48px */
--brand-2xl: 4rem;    /* 64px */
```

### Section Spacing

```tsx
// Standard section padding
<section className="section-padding">

// Smaller section padding  
<section className="section-padding-sm">

// Brand container
<div className="brand-container">
```

## Visual Effects

### Glow Effects

```tsx
// Standard glow
<div className="glow-effect">

// Brand glow variations
<div className="brand-glow-primary">
<div className="brand-glow-subtle">
```

### Glass Effects

```tsx
// Standard glass morphism
<div className="glass-effect">

// Brand-specific glass effect
<div className="glass-effect-brand">
```

## Patterns & Design Elements

### Background Patterns

```tsx
// Dot pattern
<div className="brand-pattern-dots">

// Grid pattern
<div className="brand-pattern-grid">
```

### Accent Lines

```tsx
// Brand accent line (automatic left border)
<div className="brand-accent-line">
```

### Gradient Text

```tsx
<h1 className="text-brand-gradient">
  Gradient Text Effect
</h1>
```

## Layout Components

### Hero Section Structure

```tsx
<div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 animate-fade-in">
  {/* Logo Section */}
  <div className="text-8xl md:text-9xl font-aileron font-black text-orc-white tracking-tight">
    ORC
  </div>
  
  {/* Tagline */}
  <div className="text-3xl md:text-4xl font-montserrat font-light text-orc-white">
    A Place for Builders
  </div>
  
  {/* Accent Lines */}
  <div className="flex items-center justify-center space-x-4 mb-12">
    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orc-blue"></div>
    <div className="w-3 h-3 bg-orc-blue rounded-full animate-pulse"></div>
    <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orc-blue"></div>
  </div>
</div>
```

## Animation System

### Brand Animations

```css
/* Available animations */
.animate-brand-pulse    /* Brand-specific pulse with scale */
.animate-fade-in        /* Gentle fade in */
.animate-slide-up       /* Slide up entrance */
.animate-float-gentle   /* Gentle floating motion */
```

### Usage Example

```tsx
<div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
  Content with delayed animation
</div>
```

## Best Practices

### Typography
- Use Aileron for headlines and UI elements
- Use Montserrat for body text and descriptions
- Maintain proper hierarchy with brand classes
- Ensure sufficient contrast ratios

### Colors
- Use exact brand colors (#0000F2) consistently
- Apply brand blue for primary actions and accents
- Use proper text color hierarchy
- Maintain accessibility standards

### Spacing
- Use brand spacing scale for consistency
- Apply section-padding classes for layouts
- Maintain proper logo clear space
- Follow 8px grid system

### Interactive Elements
- Use brand button classes
- Apply proper hover states and transitions
- Include appropriate glow effects
- Ensure proper focus states

## Component Examples

### Call-to-Action Section

```tsx
<section className="section-padding bg-gradient-primary">
  <div className="brand-container">
    <div className="text-center">
      <h2 className="brand-headline text-4xl md:text-6xl text-orc-white mb-6">
        Ready to <span className="text-orc-blue">Build the Future?</span>
      </h2>
      <p className="brand-body text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Join thousands of innovators in the ultimate robotics competition
      </p>
      <button className="btn-brand-primary text-lg px-8 py-4">
        Get Started Now
      </button>
    </div>
  </div>
</section>
```

### Feature Card

```tsx
<div className="glass-effect-brand rounded-2xl p-8 hover:scale-105 transition-all duration-300">
  <div className="brand-accent-line">
    <h3 className="brand-subhead text-xl text-orc-white mb-4">
      Feature Title
    </h3>
    <p className="brand-body text-gray-300 mb-6">
      Feature description with proper typography
    </p>
    <button className="btn-brand-secondary">
      Learn More
    </button>
  </div>
</div>
```

## Development Guidelines

### Code Organization
- Keep brand-specific styles in `src/index.css`
- Use Tailwind utilities with brand color variables
- Create reusable component classes for consistency
- Document any brand deviations for review

### Performance
- Optimize font loading with `font-display: swap`
- Use CSS transforms for animations
- Implement proper reduced motion preferences
- Minimize layout shifts

### Accessibility
- Ensure proper color contrast ratios
- Implement keyboard navigation
- Use semantic HTML structure
- Test with screen readers

---

For questions about brand implementation, refer to the brand guidelines document or contact the design team. 
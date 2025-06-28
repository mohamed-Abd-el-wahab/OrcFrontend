// Scale configuration
export type ScaleMode = 'compact' | 'normal' | 'spacious';

export const DESIGN_CONFIG = {
  SCALE_MODE: 'normal' as ScaleMode,
};

// Scale-specific configurations
const scaleConfigs = {
  compact: {
    sectionPadding: 'py-12 md:py-16',
    gridGap: 'gap-6 lg:gap-8',
    heroHeadline: 'font-montserrat font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-orc-white tracking-tight leading-tight',
    sectionHeadline: 'font-montserrat font-extrabold text-xl md:text-2xl text-orc-white',
    cardPadding: 'p-4 md:p-6',
    sectionHeader: 'section-header mb-8 md:mb-12',
  },
  normal: {
    sectionPadding: 'section-spacing',
    gridGap: 'grid-responsive',
    heroHeadline: 'font-montserrat font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-orc-white tracking-tight leading-tight',
    sectionHeadline: 'font-montserrat font-extrabold headline-responsive text-orc-white',
    cardPadding: 'card-responsive',
    sectionHeader: 'section-header',
  },
  spacious: {
    sectionPadding: 'py-20 md:py-28',
    gridGap: 'gap-12 lg:gap-16',
    heroHeadline: 'font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-orc-white tracking-tight leading-tight',
    sectionHeadline: 'font-montserrat font-extrabold text-3xl md:text-4xl text-orc-white',
    cardPadding: 'p-8 md:p-12',
    sectionHeader: 'section-header mb-16 md:mb-20',
  },
};

// Get current scale configuration
const currentScale = scaleConfigs[DESIGN_CONFIG.SCALE_MODE];

export const designClasses = {
  // Generic section wrapper (black background enforced globally in parent components)
  section: 'relative',
  // Container centers content and sets horizontal padding
  sectionContainer: 'relative max-w-screen-xl mx-auto container-spacing',
  // Common grid wrapper – individual components append their own col definitions
  grid: `grid ${currentScale.gridGap}`,
  // Content wrapper to keep z-index above decorative layers
  content: 'relative z-10',
  // Vertical stack for headline/paragraph pairs
  elements: 'space-y-6',
  // Section header wrapper (centers heading + sub-elements)
  sectionHeader: `text-center ${currentScale.sectionHeader}`,
  // Default hero headline style
  heroHeadline: currentScale.heroHeadline,
  // Default section headline style
  sectionHeadline: currentScale.sectionHeadline,
  // Larger paragraph copy used directly under headlines
  leadText: 'font-montserrat text-lg md:text-xl text-gray-300',
  // Regular body copy
  bodyText: 'font-montserrat text-base md:text-lg text-gray-300',
  // Primary filled button (blue) - updated to match brand specifications
  button: 'group inline-flex items-center justify-center rounded-xl py-3 px-6 font-montserrat font-semibold bg-orc-blue text-white hover:bg-orc-blue/90 transition-all duration-300 ease-out hover:scale-105',
  // Secondary outline button (glassmorphism style) - now using responsive classes
  buttonSecondary: 'group inline-flex items-center justify-center rounded-xl py-3 px-6 font-montserrat font-medium bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 ease-out hover:scale-105',
  // Generic card container (individual components can add hover/focus styles)
  card: `bg-gray-900/40 ${currentScale.cardPadding} rounded-2xl border border-gray-800`,
  // Section with responsive padding
  sectionPadding: currentScale.sectionPadding,
  // Hero logo responsive sizing
  heroLogo: 'hero-logo-responsive',
};

// Consistent spacing utility tokens used throughout redesigned pages/components
export const SPACING = {
  // Gap classes for CSS grid / flex layouts
  gridGap: currentScale.gridGap,
  // Standardised inner padding for cards
  cardPadding: currentScale.cardPadding,
  // Consistent vertical section padding (y-axis)
  sectionPaddingY: currentScale.sectionPadding,
}; 
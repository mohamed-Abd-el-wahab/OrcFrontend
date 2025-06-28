export const designClasses = {
  // Generic section wrapper (black background enforced globally in parent components)
  section: 'relative',
  // Container centers content and sets horizontal padding
  sectionContainer: 'relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8',
  // Common grid wrapper – individual components append their own col definitions
  grid: 'grid gap-8',
  // Content wrapper to keep z-index above decorative layers
  content: 'relative z-10',
  // Vertical stack for headline/paragraph pairs
  elements: 'space-y-6',
  // Section header wrapper (centers heading + sub-elements)
  sectionHeader: 'text-center mb-12',
  // Default hero headline style
  heroHeadline: 'font-montserrat font-extrabold text-4xl md:text-6xl leading-tight text-orc-white',
  // Default section headline style
  sectionHeadline: 'font-montserrat font-extrabold text-3xl md:text-4xl text-orc-white',
  // Larger paragraph copy used directly under headlines
  leadText: 'font-montserrat text-lg md:text-xl text-gray-300',
  // Regular body copy
  bodyText: 'font-montserrat text-base md:text-lg text-gray-300',
  // Primary filled button (blue)
  button: 'group inline-flex items-center justify-center px-6 py-3 font-montserrat font-semibold rounded-md bg-orc-blue text-white hover:bg-orc-blue/90 transition-colors',
  // Secondary outline button (blue border)
  buttonSecondary: 'group inline-flex items-center justify-center px-6 py-3 font-montserrat font-semibold rounded-md border border-orc-blue text-orc-blue hover:bg-orc-blue hover:text-white transition-colors',
  // Generic card container (individual components can add hover/focus styles)
  card: 'bg-gray-900/40 rounded-2xl border border-gray-800',
};

// Consistent spacing utility tokens used throughout redesigned pages/components
export const SPACING = {
  // Gap classes for CSS grid / flex layouts
  gridGap: 'gap-8',
  // Standardised inner padding for cards
  cardPadding: 'p-6 md:p-8',
  // Consistent vertical section padding (y-axis)
  sectionPaddingY: 'py-16 md:py-24',
}; 
# Project Guidelines & Instructions

## SECTION 31.5 — VISUAL IMAGERY & MOTION DIRECTION

### VISUAL IMAGERY DIRECTION
- **Image Sourcing & Quality**: Use high-resolution imagery (min 1920px for heroes, 800px+ for cards) with proper aspect ratios (16:9 for course thumbnails, 4:3 / 16:9 for project case studies), responsive sizes, and clean fallback avatars.
- **Hero Section**: Subtle gradient-mesh or soft abstract background (navy/charcoal/warm-neutral tones matching the "executive" brand feel) — not generic AI-robot clip art or stock laptops.
- **Abhijeet Profile & Avatars**: Clean circular or rounded-square crop, professionally lit with plain/blurred backdrop matching executive leadership branding.
- **Project & Course Cards**: Genuine representative UI mockups / screenshots and consistent abstract pattern categories (AI Ops, Automation, Strategy) rather than mismatched stock photos.
- **Testimonials**: Clean avatar crops, consistent sizing, and tasteful initials-on-color placeholders.
- **Certificate**: Clean, print-worthy layout with cryptographic verification hash, executive signatures, and instant download/print capabilities.

### ANIMATION & MOTION DIRECTION
- **Library**: Use `motion/react` (`motion`) for React-based animations, micro-interactions, and scroll reveals.
- **Homepage**: Hero text staggered fade-up entrance on load (headline → subhead → buttons, ~80ms delay). Bento cards with subtle lift + shadow deepen on hover (scale ~1.01-1.02, 200ms ease-out).
- **Portfolio & Case Studies**: Project cards fade-up on scroll into view (`whileInView`, `viewport: { once: true }`, staggered). Sections (Problem → Solution → Impact) reveal smoothly.
- **Academy**: Animated progress bars (0 to actual value on mount, ~600ms ease-out). Score count-up reveals.
- **Course Player & Syllabus**: Smooth height animations for expandable modules. Scale+fade pop on task completion.
- **Certificate**: Celebratory professional reveal (fade + scale-in) without childish confetti.
- **Restraints**: Respect `prefers-reduced-motion`. No blocking animations. No dated parallax scrolling. Minimal animation on high-frequency administrative controls.

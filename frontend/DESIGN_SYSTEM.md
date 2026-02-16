# Vibe Dashboard - Design System

## Top 1% SaaS UI Standards

This design system follows principles from Linear, Vercel, and Stripe for creating premium, professional interfaces.

---

## 🎨 Color System

### Neutrals (Primary Palette)
Use slate colors for most UI elements:
- **slate-900**: Primary text, headings
- **slate-600**: Secondary text, descriptions
- **slate-500**: Tertiary text, placeholders
- **slate-400**: Disabled states
- **slate-200**: Borders, dividers
- **slate-100**: Subtle backgrounds
- **slate-50**: Hover states

### Accents (Use Sparingly)
- **violet-500/600**: Primary actions, key highlights (max 5% of UI)
- **blue-500/600**: Secondary actions, links
- **Success**: #10b981 (green)
- **Error**: #ef4444 (red)
- **Warning**: #f59e0b (amber)

### Background System
- **Base**: `#fafbfc` - Cool off-white
- **Elevated**: `rgba(255, 255, 255, 0.4)` - Light glass
- **Card**: `rgba(255, 255, 255, 0.5)` - Medium glass

---

## 📝 Typography Scale

### Font Weights
- **400**: Regular body text
- **450**: Medium body text (subtle emphasis)
- **500**: Labels, UI elements
- **600**: Headings, strong emphasis
- **650**: Display titles (hero sections)

### Size Scale
```
Display (Hero):
- lg: 62px / 650 / -0.02em tracking
- md: 52px / 650 / -0.02em tracking
- sm: 42px / 650 / -0.01em tracking

Heading (Sections):
- xl: 32px / 600 / -0.01em tracking
- lg: 24px / 600 / -0.005em tracking
- md: 20px / 600
- sm: 18px / 600

Body (Content):
- lg: 16px / 450
- md: 15px / 450
- sm: 14px / 450
- xs: 13px / 450

Label (UI):
- lg: 14px / 500
- md: 13px / 500
- sm: 12px / 500
```

### Usage Examples
```tsx
// Hero title
<h1 className="text-[42px] font-[650] tracking-tight text-slate-900">

// Section heading
<h2 className="text-[24px] font-[600] text-slate-900">

// Body text
<p className="text-[15px] font-[450] text-slate-600">

// Label
<span className="text-[13px] font-[500] text-slate-700">
```

---

## 📏 Spacing Scale (8px base)

```
xs:  4px   (0.5 units)
sm:  8px   (1 unit)
md:  12px  (1.5 units)
lg:  16px  (2 units)
xl:  20px  (2.5 units)
2xl: 24px  (3 units)
3xl: 32px  (4 units)
4xl: 40px  (5 units)
5xl: 48px  (6 units)
6xl: 64px  (8 units)
```

### Rhythm Guidelines
- **Card padding**: 32-48px (3xl-5xl)
- **Section spacing**: 48-64px (5xl-6xl)
- **Element spacing**: 12-20px (md-xl)
- **Grid gaps**: 16-20px (lg-xl)

---

## 🌫️ Glassmorphism

### Light Glass (Elevated surfaces)
```css
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.6);
```

### Medium Glass (Cards)
```css
background: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.7);
```

### Card Glass (Interactive elements)
```css
background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(8px);
border: 1px solid rgba(255, 255, 255, 0.8);
```

**Rules:**
- Never exceed `blur(16px)`
- Keep opacity between 0.4-0.6
- Always include subtle border
- Use sparingly for depth

---

## 🎭 Shadow System

### Soft Shadows (Preferred)
```css
subtle:  0 1px 2px rgba(0, 0, 0, 0.04)
soft:    0 4px 16px rgba(0, 0, 0, 0.04)
medium:  0 8px 32px rgba(0, 0, 0, 0.04)
strong:  0 12px 48px rgba(0, 0, 0, 0.06)
```

### Hover Shadows
```css
soft:    0 6px 24px rgba(0, 0, 0, 0.06)
medium:  0 12px 40px rgba(0, 0, 0, 0.08)
```

**Rules:**
- Never exceed 8% opacity
- Use 4% for most cases
- Avoid heavy shadows
- Subtle lift on hover

---

## 🔘 Border Radius

```
sm:  6px   - Small buttons, tags
md:  8px   - Input fields, small cards
lg:  12px  - Medium cards, modals
xl:  16px  - Large cards
2xl: 20px  - Hero sections
```

**Rules:**
- Avoid `rounded-3xl` (too rounded)
- Use `rounded-xl` max for cards
- Consistency is key

---

## ⚡ Transitions

### Timing
```css
smooth: 0.2s cubic-bezier(0.4, 0, 0.2, 1)
medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
slow:   0.4s cubic-bezier(0.4, 0, 0.2, 1)
```

### Usage
- **Hover effects**: 0.2s
- **State changes**: 0.3s
- **Animations**: 0.4s

**Rules:**
- Never exceed 0.4s
- Use easing for smoothness
- Avoid dramatic animations

---

## 🎯 Component Patterns

### Premium Search Bar
```tsx
<input className="
  bg-white/90 backdrop-blur-md
  border-2 border-slate-200
  rounded-xl px-4 py-3
  text-[15px] font-[450]
  focus:border-violet-500
  focus:ring-4 focus:ring-violet-100
  transition-all duration-200
  shadow-[0_4px_16px_rgba(0,0,0,0.04)]
" />
```

### Premium Card
```tsx
<div className="
  bg-white/50 backdrop-blur-md
  rounded-xl p-6
  border border-white/80
  shadow-[0_8px_32px_rgba(0,0,0,0.04)]
  hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
  transition-all duration-200
" />
```

### Premium Button
```tsx
<button className="
  px-4 py-2
  bg-slate-900 text-white
  rounded-lg
  text-[14px] font-[500]
  hover:bg-slate-800
  transition-all duration-200
  shadow-[0_4px_16px_rgba(0,0,0,0.08)]
" />
```

---

## ✅ Do's and Don'ts

### ✅ Do
- Use slate colors for 95% of UI
- Keep accent colors minimal (5% max)
- Use precise font weights (450, 650)
- Apply subtle shadows (4% opacity)
- Maintain 8px spacing rhythm
- Use light glassmorphism
- Keep transitions under 0.4s

### ❌ Don't
- Use purple/violet everywhere
- Apply heavy shadows
- Over-blur backgrounds
- Use rounded-3xl on cards
- Exceed 0.4s transitions
- Use gradient text
- Over-animate elements

---

## 🎨 Visual Hierarchy

1. **Primary**: slate-900, font-[600-650]
2. **Secondary**: slate-600, font-[450-500]
3. **Tertiary**: slate-500, font-[450]
4. **Accent**: violet-500 (sparingly)

---

## 📱 Responsive Breakpoints

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

---

This design system ensures a consistent, premium, top 1% SaaS experience across the entire dashboard.

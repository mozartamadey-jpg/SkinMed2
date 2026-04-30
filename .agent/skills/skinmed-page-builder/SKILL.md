---
name: skinmed-page-builder
description: Build premium SkinMed service pages from parsed JSON data. Covers full page architecture, component patterns, responsive design, and quality checks.
---

# SkinMed Page Builder Skill

Build premium, fully-responsive service pages for SkinMed clinic from parsed JSON data (`texts/parsed/<slug>.json`). Every page must feel luxury-tier, mobile-first, and production-ready.

---

## Prerequisites

- Parsed JSON file exists in `texts/parsed/<slug>.json` (created via `node scripts/parse-tilda.js <URL>`)
- Next.js dev server running (`npm run dev`)
- Existing reference pages to match design language:
  - `src/app/services/lazernaya-kosmetologiya/lazernaya-shlifovka/LaserShlifovkaClient.tsx` — **Golden standard**
  - `src/app/services/lazernaya-kosmetologiya/udalenie-pigmentnyh-pyaten/PigmentRemovalClient.tsx` — **Alternative template**

---

## Step 1.5: Image Generation & Assets (CRITICAL)

When creating a page (especially from scratch), you MUST generate unique, hyper-realistic, documentary-style images. Use extreme detail in your prompts mimicking high-end clinical photography.

**Prompting Style Requirements:**
- ALWAYS use camera specs: (e.g., "Shot on a Sony A9III, 85mm f/1.4 lens, 1/160 sec, ISO 640. Film grain present for natural realism.")
- Demographics: ALWAYS specify "Slavic appearance, Caucasian/White" for all patients and doctors.
- Focus on texture: "precise, hyper-realistic skin texture showing fine pores, natural imperfections".
- Framing: Explicitly mention "perfectly framed, no awkward cropping or cut-off features".
- Lighting: "Diffused and cool lighting, simulating professional modern medical procedure room lighting" (or warm if specifically needed).
- Details: Mention "sterile white nitrile gloves", specific medical laser handpiece details, reflections on the machine, etc.
- No plastic/CGI look: Must look like a real documentary photo from a premium medical clinic.

**Mandatory image generation checklist for EACH new page:**
1. **Hero Image**: 1 stunning, hyper-realistic photo. E.g., overhead doctor/patient interaction or macro skin shot.
2. **Process/Thematic Images**: At least 1-2 images placed throughout the page showing the actual procedure (e.g., doctor wearing gloves using a laser handpiece on the skin).
3. **Before & After (Cases)**: Generate realistic "Before" (showing the specific skin issue with redness/texture) and "After" (cured skin) photos. Must look like raw clinical photography (same angle, same lighting).
4. **NO RECYCLING**: NEVER reuse images from other procedures. Every photo MUST be specifically generated for the current service.

---

## Step 1: Read & Analyze the JSON

Load the parsed JSON from `texts/parsed/<slug>.json`. Identify each block's `type` field:

| Block Type | What to build |
|-----------|---------------|
| `hero` | Full-width dark hero section with background image |
| `feature` | Text + image split section |
| `text` | Rich text content section with heading |
| `cases` | Before/After gallery with paired images |
| `pricing` | Price table with elegant rows |
| `steps` | Numbered process steps |
| `video` | Embedded video player |
| `cta` | Call-to-action block |
| `faq` | Accordion-style Q&A |

**CRITICAL: Never skip blocks or leave empty sections.** Every block from the JSON must appear on the page.

---

## Step 2: Create Page Files

For each new service page, create exactly **2 files**:

### File 1: `page.tsx` (Server Component)

```
src/app/services/<category>/<slug>/page.tsx
```

```tsx
import { Metadata } from 'next';
import <ComponentName>Client from './<ComponentName>Client';

export const metadata: Metadata = {
  title: '<pageTitle from JSON>',
  description: '<ogDescription from JSON>',
};

export default function Page() {
  return <<ComponentName>Client />;
}
```

### File 2: `<ComponentName>Client.tsx` (Client Component)

```
src/app/services/<category>/<slug>/<ComponentName>Client.tsx
```

This is where ALL the page logic lives. Use `'use client';` directive.

---

## Step 3: Page Architecture (MANDATORY)

Every page MUST follow this exact wrapper structure:

```tsx
'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';

export default function <Name>Client() {
  
  // Mobile glow observer (copy from LaserShlifovkaClient.tsx lines 11-53)
  useEffect(() => {
    // ... IntersectionObserver for mobile card glow effects
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-slate-800">
      <AnimationsProvider />
      
      {/* Aurora Background — ALWAYS INCLUDE */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[8rem] opacity-60 mix-blend-multiply animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[10rem] opacity-60 mix-blend-multiply animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] bg-gradient-to-bl from-[#b8e0ff]/30 to-transparent blur-[9rem] opacity-70 mix-blend-multiply animate-orbit" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div>
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24">
        <Header />
        <main className="w-full mt-12 sm:mt-16">
          {/* Breadcrumbs */}
          {/* ... page sections ... */}
        </main>
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}
```

> [!CAUTION]
> **`<AnimationsProvider />` must appear EXACTLY ONCE** per page — at the top of the root `<div>`, right after the opening tag. NEVER add a second copy at the bottom. Duplicate providers cause GSAP to register scroll triggers twice, creating visible lag, double-firing animations, and janky stagger effects.

---

## Step 4: Section-by-Section Design Patterns

### 4.1 — Breadcrumbs

```tsx
<section className="mb-6 md:mb-10 reveal-up opacity-0">
  <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
    <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">Главная</a>
    <Icon icon="mdi:chevron-right" className="text-slate-400" />
    <a href="/services/<category>" className="hover:text-[#60c2ff] transition-colors duration-300">Лазерная косметология</a>
    <Icon icon="mdi:chevron-right" className="text-slate-400" />
    <span className="text-slate-700 font-medium">Page Title</span>
  </div>
</section>
```

### 4.2 — Hero Section (type: `hero`)

Dark card with background image. Full-width, minimum height 550px mobile / 700px desktop.

```tsx
<section className="mb-20 md:mb-32 reveal-up opacity-0">
  <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img src="..." alt="..." className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#60c2ff]/10 rounded-full blur-[100px] pointer-events-none z-10"></div>
    </div>
    
    {/* Content over image */}
    <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
        <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
        Индивидуальный протокол
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
        Title <br />
        <span className="font-serif italic text-[#60c2ff]/80">Accented</span>
      </h1>
      
      <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
        Description text from JSON
      </p>

      <div className="flex flex-wrap gap-6 items-center">
        <div className="relative inline-flex group/btn">
          <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
          <button 
            onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
            className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]"
          >
            Записаться на процедуру
            <Icon icon="solar:arrow-right-linear" className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

**MOBILE RULES for Hero:**
- On mobile (below `md:`), gradient goes bottom-to-top with `to-[#050B14]/60` top darkening
- Use `drop-shadow-2xl` on heading text so it's readable over bright photos
- Text must NEVER be obscured by the background image
- If image has a face/subject, use `object-right` on mobile to shift composition

### 4.3 — Indications / Feature Cards (type: `text` with items)

Grid of glassmorphic cards with icons. Use Solar icon set from Iconify.

```tsx
<section className="mb-32 lg:mb-48 relative z-10">
  <div className="text-center mb-16 reveal-up opacity-0">
    <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">
      — Показания
    </span>
    <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
      Title <span className="font-serif italic text-slate-400">accented</span>
    </h2>
    <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
      Subtitle text
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container">
    {items.map((item, index) => (
      <div key={index}
        className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden cursor-pointer stagger-item opacity-0 scroll-glow-item"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#60c2ff]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
          <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
        {item.desc && <p className="text-sm text-slate-500 font-light mt-2">{item.desc}</p>}
      </div>
    ))}
  </div>
</section>
```

**ICON RULES:**
- ALWAYS use `@iconify/react` with Solar icon set: `solar:xxx-linear` or `solar:xxx-bold-duotone`
- Pick semantically meaningful icons for each text item
- NEVER leave a card without an icon
- NEVER use emoji as icons
- **VERIFY icons exist** before using them. Use ONLY these confirmed icon names:

**Verified Solar Icons Whitelist (safe to use):**
```
// Linear style (outlines, for feature cards):
solar:shield-check-linear, solar:bolt-linear, solar:magic-stick-3-linear,
solar:stopwatch-linear, solar:pallete-2-linear, solar:star-linear,
solar:heart-linear, solar:eye-linear, solar:scissors-linear,
solar:copy-linear, solar:danger-triangle-linear,
solar:hand-stars-linear, solar:sun-2-linear, solar:waterdrop-linear,
solar:temperature-linear, solar:medical-kit-linear,
solar:arrow-right-linear, solar:add-linear, solar:minus-linear,
solar:close-circle-linear, solar:check-circle-bold, solar:check-read-linear,
solar:play-bold, solar:clock-circle-linear, solar:calendar-linear,
solar:phone-calling-linear, solar:chat-round-dots-linear,
solar:syringe-linear, solar:atom-linear,
solar:pulse-2-linear, solar:test-tube-linear,
solar:stethoscope-linear, solar:clipboard-text-linear,
solar:diploma-linear, solar:confetti-linear, solar:running-2-linear,
solar:square-academic-cap-linear, solar:user-check-linear,
solar:document-text-linear, solar:history-linear,
solar:microphone-3-linear, solar:gallery-linear

// Bold-Duotone style (filled, for accents/contraindications):
solar:fire-bold-duotone, solar:shield-warning-bold-duotone,
solar:heart-bold-duotone, solar:danger-triangle-bold-duotone,
solar:verified-check-bold-duotone, solar:magic-stick-3-bold-duotone,
solar:health-bold-duotone, solar:star-bold-duotone
```

**If you need an icon not on this list**, use a close semantic match from the list above. Do NOT guess icon names — they will silently fail and show empty squares.

### 4.4 — Cases / Before-After (type: `cases`)

Use `cases[]` array from JSON for paired images. Display side-by-side with hover zoom.

```tsx
<section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0">
  <div className="mb-16 text-center">
    <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Эффект</span>
    <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">
      Результат <span className="font-serif italic text-slate-400">лечения</span>
    </h2>
  </div>
  
  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
    {cases.map((c, i) => (
      <div key={i} className="flex flex-col md:flex-row gap-4">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg group flex-1">
          <img src={c.before} alt="До" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium">До</div>
        </div>
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg group flex-1">
          <img src={c.after} alt="После" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]" />
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium">После</div>
        </div>
      </div>
    ))}
  </div>
</section>
```

### 4.5 — Technology / Advantages (type: `text` with descriptions)

Numbered horizontal rows. Clean editorial style.

```tsx
<section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
  <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
    <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">— Технологии</span>
    <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] max-w-4xl">
      Title <br /> <span className="font-serif italic text-slate-400">Accented</span>
    </h2>
  </div>

  <div className="flex flex-col stagger-container">
    {items.map((item, index) => (
      <div key={index}
        className="group relative flex flex-col lg:flex-row items-start lg:items-center py-10 md:py-12 border-b border-slate-200/50 hover:border-[#60c2ff]/30 transition-colors duration-500 stagger-item opacity-0 scroll-glow-item"
      >
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <span className="text-6xl md:text-[5rem] font-extralight text-slate-200 group-hover:text-[#60c2ff]/30 transition-colors duration-500 font-serif italic block leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <h3 className="text-2xl md:text-3xl font-normal text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-500 tracking-tight">
            {item.title}
          </h3>
        </div>
        <div className="w-full lg:w-5/12 ml-auto">
          <p className="text-lg text-slate-500 font-light leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
```

### 4.6 — Pricing Table (type: `pricing`)

Elegant price rows inside a glassmorphic card.

```tsx
<section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
  <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
    <div className="mb-12 border-b border-slate-100 pb-6">
      <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">
        Стоимость <span className="font-serif italic text-slate-400">услуг</span>
      </h2>
    </div>
    <div className="flex flex-col divide-y divide-slate-100">
      {prices.map((price, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
          <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{price.name}</span>
          <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{price.price}</span>
        </div>
      ))}
    </div>
  </div>
</section>
```

**IMPORTANT:** If the JSON `prices[]` array is empty but the heading says "Стоимость", look for price data in the `texts[]` array and manually parse it into `{ name, price }` entries.

### 4.7 — Process Steps (type: `steps`)

Same pattern as 4.5 (numbered rows) but with these differences:
- Steps have **bold prefix** (e.g., "КОНСУЛЬТАЦИЯ:") followed by description
- Split text on `:` to separate step name from description
- Use `text-4xl md:text-5xl` for step numbers (smaller than advantages)

### 4.8 — Video Section (type: `video`)

```tsx
<section className="mb-32 lg:mb-48 relative z-10 reveal-up opacity-0 text-center">
  <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.1)] border border-white/80 bg-white p-2">
    <video controls className="w-full aspect-video object-cover rounded-[2.5rem]" poster="...">
      <source src="..." type="video/mp4" />
    </video>
  </div>
</section>
```

### 4.9 — CTA Block (ALWAYS ADD AT THE END — type: `cta`)

**This is MANDATORY.** Even if the JSON has no `cta` block, you MUST add one at the bottom of the page.

```tsx
<section className="relative z-10 reveal-up opacity-0">
  <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#fbbf24]/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
    
    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
          Начните <br />
          <span className="font-serif italic text-slate-400">обновление</span> кожи
        </h2>
        <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">
          CTA description text
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
          <div className="relative inline-flex group">
            <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
            <button 
              onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
              className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3"
            >
              Бесплатная консультация
              <Icon icon="solar:arrow-right-linear" className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Desktop-only spinning badge */}
      <div className="hidden lg:flex w-64 h-64 rounded-full border border-[#60c2ff]/20 relative items-center justify-center">
        <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin-slow_10s_linear_infinite]"></div>
        <div className="text-center">
          <Icon icon="solar:magic-stick-3-bold-duotone" className="text-4xl text-[#60c2ff] mx-auto mb-2 opacity-80" />
          <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-white/50 leading-tight">SkinMed<br/>Premium Care</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**CTA BUTTON RULE:** Every CTA button MUST have `onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}` to trigger the booking popup.

---

## Step 5: Design System Constants

### Colors (NEVER deviate)

| Token | Value | Use |
|-------|-------|-----|
| Primary | `#60c2ff` | Accent, buttons, links, icon highlights |
| Dark BG | `#050B14` | Hero backgrounds, CTA blocks |
| Body text | `text-slate-800` | Main content |
| Muted text | `text-slate-500` | Descriptions, subtitles |
| Section headings | `text-slate-900` | H2 headings |
| Accent text | `text-slate-400` with `font-serif italic` | Second word in dual-word headings |
| Warning/pulse dot | `#fbbf24` | Status indicators |

### Typography — READABILITY FIRST

**CRITICAL:** Readability is the #1 priority. Text must be legible on glassmorphic/translucent backgrounds. Never use `text-sm` or `text-xs` for body content.

| Element | Classes | Min rendered size |
|---------|---------|-------------------|
| H1 (hero) | `text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] uppercase` | 36px mobile |
| H2 (section) | `text-[3rem] sm:text-5xl lg:text-[5rem] font-light tracking-[-0.04em] leading-[1.0]` | 48px mobile |
| H3 (card title) | `text-xl font-medium` or `text-2xl md:text-3xl font-normal tracking-tight` | 20px mobile |
| Body / descriptions | `text-base sm:text-[17px] text-slate-600 font-light leading-relaxed` | **16px minimum** |
| Card descriptions | `text-base sm:text-[17px] text-slate-600 font-light leading-relaxed` | **16px minimum** |
| FAQ answers | `text-[17px] text-slate-600 font-light leading-relaxed` | **17px** |
| Aftercare / small cards | `text-base text-slate-700 font-normal leading-relaxed` | **16px minimum** |
| Doctor role/specialty | `text-base text-slate-600 font-light` | **16px minimum** |
| Doctor experience | `text-sm text-[#60c2ff] font-medium` | 14px |
| Label | `text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff]` | 12px |

**Text Color Rules for Readability:**
- Body text: use `text-slate-600` (not `text-slate-500` — too faint on glass backgrounds)
- Card descriptions: `text-slate-600` minimum contrast
- Aftercare text: `text-slate-700 font-normal` (stronger weight for small cards)
- NEVER use `text-slate-400` or `text-slate-500` for body text on white/glass backgrounds
- Dark backgrounds (hero/CTA): use `text-slate-300` minimum, never `text-slate-400` for body

**BANNED for content:** `text-xs`, `text-sm` on any body text, descriptions, FAQ answers, or card content. These sizes are ONLY acceptable for labels, badges, and breadcrumbs.

### Spacing

| Between sections | `mb-32 lg:mb-48` |
| Card padding | `p-8` or `p-10 md:p-16` |
| Card border radius | `rounded-[2rem]` or `rounded-[3rem]` |

### Animations

| CSS class | Effect |
|-----------|--------|
| `reveal-up opacity-0` | Fade-in from bottom on scroll |
| `stagger-container` + `stagger-item opacity-0` | Staggered card reveal |
| `scroll-glow-item` | Mobile glow effect on scroll intersection |
| `animate-orbit` | Slow floating aurora blobs |
| `animate-float` | Alternative floating animation |

#### Animation Parameters (MANDATORY — do NOT change)

The `AnimationsProvider` component (`src/components/AnimationsProvider.tsx`) uses GSAP ScrollTrigger with these tuned parameters. These values are the result of performance testing — do NOT revert them to slower values.

| Parameter | Value | Why |
|-----------|-------|-----|
| `reveal-up` duration | **0.7s** | Snappy, premium feel. >1s feels sluggish |
| `reveal-up` offset (y) | **30px** | Subtle lift. >50px feels heavy |
| `reveal-scale` scale | **0.97** | Barely perceptible zoom. <0.95 looks jarring |
| `stagger-item` duration | **0.5s** | Fast cascade. >0.8s creates visible lag on 6+ cards |
| `stagger` delay | **0.06s** | Quick succession. >0.1s makes the last card wait too long |
| `stagger-item` offset (y) | **20px** | Minimal shift for list items |
| ScrollTrigger start | **"top 88%"** | Triggers slightly before full visibility |
| Easing | **"power2.out"** | Smooth deceleration without bounce |

> [!CAUTION]
> **CRITICAL ANTI-PATTERNS — NEVER DO THESE:**
> 1. **NEVER place `<AnimationsProvider />` twice** in the same component. This creates duplicate GSAP ScrollTriggers that fight each other, causing visible stutter and delay.
> 2. **NEVER use `duration > 1.0s`** for reveal animations. Feels sluggish and unprofessional.
> 3. **NEVER use `y > 40px`** for reveal offset. Feels heavy and floaty.
> 4. **NEVER use `stagger > 0.08`** for card grids. With 6-8 cards, the last card waits 500ms+ to appear.
> 5. **NEVER use `power3.out` or `power4.out`** easing for scroll reveals. Too aggressive — use `power2.out`.
> 6. **NEVER modify AnimationsProvider parameters** without testing on a page with 8+ stagger items.

---

## Step 6: Mandatory Quality Checks

### Before Considering the Page Complete:

- [ ] **No empty sections** — Every JSON block is rendered. No placeholder text.
- [ ] **All images load** — Check each `img src` actually works. If external URL fails, generate a replacement or use a different image.
- [ ] **Images bound to correct blocks** — Each image appears in the section it belongs to, not floating elsewhere.
- [ ] **Icons on every card (CRITICAL)** — Use ONLY verified Solar icons from the whitelist above. After writing the page, scan ALL icon names and verify each one exists in the whitelist. Missing icons render as invisible empty squares — this is UNACCEPTABLE.
- [ ] **Font readability (CRITICAL)** — No body text smaller than 16px. Verify:
  - Card descriptions: `text-base` minimum (16px)
  - FAQ answers: `text-[17px]` minimum
  - Step descriptions: `text-[17px]` minimum
  - Doctor roles: `text-base` minimum (16px)
  - Aftercare text: `text-base` minimum (16px)
  - Text color: `text-slate-600` minimum on light backgrounds (never `text-slate-500` for body)
- [ ] **Mobile responsive** — Test at 500px viewport width:
  - Text not cut off
  - Images fill width properly
  - Cards stack vertically
  - Hero text readable over dark background
  - Buttons full-width on mobile
  - Price rows don't overflow
- [ ] **CTA block present** — Page ends with dark premium CTA. Button triggers booking modal.
- [ ] **Booking popup works** — All buttons with `onClick` dispatch `open-booking-modal` event.
- [ ] **Breadcrumbs correct** — Category and page name match the service.
- [ ] **Section labels** — Each section has the category label (`— Показания`, `— Технологии`, etc.)
- [ ] **Heading pattern** — Every H2 splits into: `Normal text` + `<span className="font-serif italic text-slate-400">accented</span>`
- [ ] **No horizontal scroll** — Check at all breakpoints.
- [ ] **Content rewrite** — Texts from JSON should be rewritten into premium marketing copy. Don't use raw parsed text as-is — rewrite it to sound professional and polished.
- [ ] **Equipment highlighting** — Any specific laser/equipment names (PicoCare, CO2 Bison, Zimmer, etc.) must be highlighted with `<span className="font-medium text-[#60c2ff]">EquipmentName</span>` in the text.

### Visual Audit (Browser Check):

1. Open page in browser at desktop width (1920px)
2. Resize to mobile width (500px)
3. Scroll through entire page
4. Verify:
   - Aurora background visible and animated
   - Cards have hover glow effects
   - Staggered animation plays
   - All images visible and properly sized
   - No clipped text or overflow
   - CTA button opens booking modal

---

## Step 7: Content Rewrite Guidelines

When building the page, **rewrite** the parsed text content to match the premium clinic tone:

### Tone & Voice
- Professional but warm
- Confidence without arrogance
- Focus on patient benefits, not technical jargon
- Use «мы» (we) for the clinic, «Вы» (you, capitalized) for the patient
- Numbers and statistics add credibility

### Structure
- Hero: One powerful headline + one supporting paragraph
- Feature cards: Short titles (2-3 words) + optional one-line description
- Advantages: Bold title + 1-2 sentence explanation
- Steps: Action verb + clear outcome

### DO:
- "Безупречно ровный тон кожи без агрессивной шлифовки"
- "Результат за 1 процедуру"
- "Более 2400 пациентов доверили нам свою кожу"

### DON'T:
- "Мы делаем процедуру лазером" (too simple)
- "Наш лазер PicoCare имеет длину волны 1064нм" (too technical)
- Copying raw parsed text without polishing

---

## Quick Reference: File Naming Convention

For slug `udalenie-pigmentnyh-pyaten`:
```
src/app/services/lazernaya-kosmetologiya/udalenie-pigmentnyh-pyaten/
  ├── page.tsx                    (server component with metadata)
  └── PigmentRemovalClient.tsx    (client component with all UI)
```

Component name: Convert slug to PascalCase in English, e.g.:
- `lazernaya-shlifovka` → `LaserShlifovkaClient`
- `udalenie-pigmentnyh-pyaten` → `PigmentRemovalClient`
- `lazernaya-blefaroplastika` → `LaserBlepharoClient`
- `udalenie-tatu` → `TattooRemovalClient`

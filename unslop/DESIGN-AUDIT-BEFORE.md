# Design Audit

Audited 9 November 2026 with the Unslop anti-slop checklist. Visual review covers the homepage at 375, 768, 1024, and 1440px; source checks also cover the other app routes.

## Score

**Overall: 22/28 applicable checks pass (79%).** Two checks are not applicable: C5 (no status meaning is communicated by color alone on the audited public UI) and L3 (the homepage has one featured card, so card-grid hierarchy does not apply).

| Category | Passes / applicable | Score |
|---|---:|---:|
| Typography | 1 / 5 | 20% |
| Spacing | 2 / 3 | 67% |
| Color | 3 / 4 | 75% |
| Surfaces | 3 / 3 | 100% |
| Icons & imagery | 3 / 3 | 100% |
| Motion | 4 / 4 | 100% |
| States & robustness | 3 / 3 | 100% |
| Layout tells | 3 / 3 | 100% |

## Checklist results

| ID | Result | Evidence |
|---|---|---|
| T1 | FAIL | Four rendered weights are used: body default 400, brand/button 650, headings 600, and eyebrow 700. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:4) |
| T2 | FAIL | The site uses one system stack (`Arial, Helvetica, sans-serif`) with no distinct heading/body pairing. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:4) |
| T3 | FAIL | Body copy reaches 1.8 line-height while display headings use 1.04 and 1.02, outside the checklist ranges. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:4) |
| T4 | PASS | Display and section headings use negative letter spacing in the reviewed homepage styles. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:4) |
| T5 | FAIL | Typography uses many one-off sizes (9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 24, 27px and multiple `clamp()` ranges), rather than a clear scale. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:4) |
| S1 | PASS | Bundled static scan found no arbitrary Tailwind spacing values. |
| S2 | PASS | Section spacing varies: the hero, featured work, and about strip use distinct vertical padding. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:4) |
| S3 | FAIL | At mobile sizes, the menu button is 42×42px, below the 44×44px target. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:127) |
| C1 | PASS | Bundled scan found no stock Tailwind palette classes; the site defines a charcoal, warm-neutral, and amber palette. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:2) |
| C2 | PASS | The homepage screenshot uses amber as its single accent against neutral surfaces. |
| C3 | FAIL | Footer text color `rgb(119,120,115)` on `rgb(17,18,20)` measures 4.21:1, below 4.5:1 for 11px copy. Contrast script checked 8 unique pairs. |
| C4 | PASS | Page background and foreground use tinted near-black and off-white tokens, not pure black and white. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:2) |
| C5 | N/A | No status meaning conveyed by color alone was identified on the public pages reviewed. |
| R1 | PASS | Radius values vary by role, from compact controls to 18px cards and pill tags. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:4) |
| R2 | PASS | Shadows are limited to the brand marker, a decorative mock window, and card hover state; they are not applied uniformly. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:4) |
| R3 | PASS | No element stacks border, shadow, and ring together; focus rings are reserved for keyboard focus. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:4) |
| I1 | PASS | UI arrows are text glyphs; no competing icon packages or systems were found in the app sources. |
| I2 | PASS | No emoji are used as interface icons. |
| I3 | PASS | The featured project uses a relevant Medi-Clinic interface image with descriptive alt text. [page.tsx](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/page.tsx:15) |
| M1 | PASS | No repeated scroll entrance animation system was found in the reviewed pages. |
| M2 | PASS | Bundled static scan found no `transition-all`; transitions name specific properties. |
| M3 | PASS | A reduced-motion media query disables smooth scrolling and nearly all transition/animation duration. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:6) |
| M4 | PASS | Links and buttons have visible focus styling; the featured card and primary button also have hover treatment. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:4) |
| X1 | PASS | Project data has loading, connection/setup, error, and empty states. [projects/page.tsx](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/projects/page.tsx:30) |
| X2 | PASS | Screenshot script reports 0px horizontal overflow at 375, 768, 1024, and 1440px. |
| X3 | PASS | Admin and login forms use visible labels associated by nesting with their inputs. [admin/page.tsx](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/admin/page.tsx:10) |
| L1 | PASS | The hero is left-aligned and the first section is a single split image-and-copy feature, rather than the centered headline plus icon-grid pattern. Screenshots at 375/768/1024/1440px. |
| L2 | PASS | Containers vary in width and composition: the main shell is 1120px, projects page 1400px, and about strip 680px. [globals.css](/C:/Users/Angele/Desktop/Legion/portfolio_v3/src/app/globals.css:4) |
| L3 | N/A | The homepage has a single featured project card, not a card grid. |
| L4 | PASS | Although the base background is restrained, the featured project image supplies real visual texture and depth in the first content section. Screenshots at 375/768/1024/1440px. |

## Top 5 fixes by impact

1. Raise the muted footer token until the rendered small copy reaches at least 4.5:1 contrast. **C3**
2. Define a compact type scale and reduce the number of one-off font sizes across routes. **T5**
3. Choose an intentional heading/body type pairing and lock the design to three or fewer weights. **T1, T2**
4. Bring body and display line-heights into the checklist’s readable ranges. **T3**
5. Increase the mobile menu hit area from 42×42px to at least 44×44px. **S3**

## Screenshots

- [375px](screenshots/375.png)
- [768px](screenshots/768.png)
- [1024px](screenshots/1024.png)
- [1440px](screenshots/1440.png)

The Next.js development indicator is visible in the screenshots and is not part of the portfolio UI.

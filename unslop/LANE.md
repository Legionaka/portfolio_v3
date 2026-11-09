# Design Lane: Warm Editorial Portfolio

Approved by the user through the request to implement `unslop/DESIGN-SOLUTIONS.md`.

## Direction

Keep the portfolio's charcoal surfaces and warm amber accent. Make the typography more editorial and structured while retaining the existing left-aligned hero and split featured-project card. Avoid decorative gradients, extra accent colors, new UI sections, and changes to the portfolio copy.

## Foundations

- **Background:** `#111214`
- **Panel:** `#191a1d`
- **Primary text:** `#f1eee9`
- **Muted text:** `#a4a19b`
- **Soft text:** `#858680`, adjusted for WCAG AA on the page background
- **Accent:** `#d8aa7d`
- **Display type:** Georgia with Times New Roman fallback
- **Body type:** Arial with Helvetica and sans-serif fallbacks
- **Weights:** 400 for body; 700 for headings, controls, and labels
- **Type scale:** 12, 14, 16, 20, 24, 32, 40, 48, 64px
- **Line-height:** 1.6 body; 1.12 display headings; 1.25 compact headings
- **Mobile controls:** minimum 44×44px touch target

## Acceptance checks

- No more than two rendered font weights.
- Display and body type use the defined pairing.
- All font sizes use the type scale or responsive clamps between scale steps.
- Body copy line-height is 1.5–1.7; display headings are 1.1–1.3.
- Small muted text meets 4.5:1 contrast against its rendered background.
- The mobile menu target is at least 44×44px.
- No horizontal overflow at 375, 768, 1024, or 1440px.
- The production build passes.

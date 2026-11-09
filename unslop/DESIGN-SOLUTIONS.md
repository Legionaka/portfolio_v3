# Design Audit Solutions

This solution set addresses each failure in `DESIGN-AUDIT.md` while keeping the current charcoal background, warm amber accent, left-aligned hero, and featured project composition.

## T1 — Reduce the number of font weights

Use two weights across the site: **400 for body and supporting copy; 700 for headings, buttons, and eyebrow labels**. Change current `600` and `650` declarations to `700`; retain `700` where already used. Avoid synthetic values such as `650` so the browser has one clear emphasis weight.

## T2 — Introduce a deliberate type pairing

Use a restrained editorial pairing that suits the warm palette:

- **Headings:** `Georgia, "Times New Roman", serif`
- **Body and controls:** `Arial, Helvetica, sans-serif`

Define these as `--font-display` and `--font-body` in `:root`; apply the display face to page titles and section headings, with the body face on paragraphs, navigation, labels, and buttons. Keep the existing negative heading tracking modest (around `-0.03em`) because serif letterforms need more room than the current sans headings.

## T3 — Normalize line-height

Set body copy to `line-height: 1.6`. Use `1.12` for display headings and `1.25` for smaller card and section headings. This brings paragraphs into the checklist's 1.5–1.7 range and display text into its 1.1–1.3 range while keeping the hero compact.

## T5 — Establish a reusable type scale

Use **12, 14, 16, 20, 24, 32, 40, 48, and 64px** as the only text sizes. Map the current roles this way:

| Role | Size |
|---|---:|
| Eyebrows, tags, safety notes, footer | 12px |
| Navigation, buttons, metadata | 14px |
| Body copy, project summaries | 16px |
| Intro/lead copy and compact headings | 20px |
| Section headings | 24px |
| Card titles | 24–32px |
| Page titles | `clamp(40px, 6vw, 64px)` |

Use the same role sizes across routes instead of adding page-specific values such as 9, 10, 11, 13, 15, 17, 18, 21, or 27px. Keep the existing responsive layout and let long headings wrap naturally.

## S3 — Meet the mobile touch target

Change `.mobile-menu-toggle` from 42×42px to **44×44px**. Center the three bars in the button and keep the current border, color, and focus outline. This clears the checklist minimum without changing the navigation layout.

## C3 — Raise footer contrast

Change `--soft` from `#777873` to **`#858680`**. This keeps the muted warm-gray role while increasing contrast against `--bg: #111214` above the 4.5:1 AA threshold. Re-run the contrast checker after applying it, because the token is also used by small secondary labels; tune upward further if any rendered pair still fails.

## Application order

1. Define the two font tokens and type scale.
2. Apply the font pairing and two-weight rule to headings, body copy, labels, and controls.
3. Apply the line-height values and replace one-off sizes by role.
4. Adjust the `--soft` contrast token and 44px mobile menu target.
5. Re-capture 375px and 1440px screenshots, then run the contrast checker and confirm all audited widths still have zero horizontal overflow.

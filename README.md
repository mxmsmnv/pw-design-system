# ProcessWire AdminThemeUikit Konkat Design System

Static reference kit for building ProcessWire modules that feel native in the Konkat default AdminThemeUikit skin.

Author of this design-system reference: Maxim Semenov.

ProcessWire, UIkit, AdminThemeUikit, Konkat theme assets, code samples, class names, trademarks, and any referenced third-party work remain the property of their respective creators.

**Author:** Maxim Semenov  
**Website:** [smnv.org](https://smnv.org)  
**Email:** [maxim@smnv.org](mailto:maxim@smnv.org)

If this project helps your work, consider supporting future development: [GitHub Sponsors](https://github.com/sponsors/mxmsmnv) or [smnv.org/sponsor](https://smnv.org/sponsor/).  

## Structure

- `index.html` - generated page for opening in a browser.
- `Draft-AdminThemeUikit-DesignSystem-UIKit.html` - generated compatibility copy with the original file name.
- `src/layout/start.html` - document start, side navigation, page shell, and hero.
- `src/layout/end.html` - page closing markup and theme switcher.
- `src/components/*.html` - one component or pattern per file.
- `assets/css/design-system.css` - shared tokens and visual overrides.
- `assets/js/design-system.js` - small interactions for theme, accent, and mobile nav.
- `scripts/build.js` - dependency-free builder that assembles the generated HTML files.

## Editing

Edit the source files, not the generated HTML.

For example:

- Buttons: `src/components/04-buttons.html`
- Forms and fieldset: `src/components/05-forms.html`
- Cards: `src/components/10-cards.html`
- Inputfield wrappers: `src/components/24-inputfields.html`
- Comment: `src/components/34-comment.html`
- Theme config notes: `src/components/36-overrides.html`
- CSS fixes shared by all sections: `assets/css/design-system.css`

After editing, rebuild:

```sh
npm run build
```

No npm install is required; the build script uses only Node.js built-ins.

## Source Notes

This kit is a reference, not a replacement for ProcessWire core rendering. For real modules, prefer ProcessWire's Inputfield API and AdminThemeUikit/UIkit classes first, then add scoped custom CSS using `--pw-*` variables only where needed.

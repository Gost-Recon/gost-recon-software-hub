# Gost Recon software hub

A dependency-free, static software hub for Gost Recon. It supports:

- a public landing page and filterable software catalog
- product detail pages with version metadata and GitHub Releases links
- browser-app launch paths that can be enabled by setting `launchUrl` in `data.js`
- free, GitHub Pages-compatible hosting with no paid services or dependencies
- clear extension points for future product, pricing, checkout, sponsorship, affiliate, advertising, analytics, and legal-policy modules

## Publishing

Upload the repository to GitHub and enable **Settings → Pages → Deploy from a branch**. Update the `SOFTWARE` array in `data.js` as releases become available. For desktop software, set `downloadUrl` to a GitHub Release asset. For browser apps, set `launchUrl` to the public app URL.

The current catalog intentionally uses placeholder release links until public binaries and app URLs exist. No analytics, advertising, payment, or paid infrastructure is enabled.

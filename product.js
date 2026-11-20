const params = new URLSearchParams(window.location.search);
const product = SOFTWARE.find((item) => item.id === params.get("id")) || SOFTWARE[0];
const detail = document.querySelector("#product-detail");
const launch = document.querySelector("#app-launch");

function featureList(items) {
  return items.map((item) => `<li><span>✓</span>${item}</li>`).join("");
}

if (detail) {
  document.title = `${product.name} — Gost Recon`;
  const action = product.downloadUrl
    ? `<a class="button" href="${product.downloadUrl}">Download ${product.name} <span>↓</span></a>`
    : product.launchUrl
      ? `<a class="button" href="app.html?id=${product.id}">Open in browser <span>↗</span></a>`
      : `<a class="button button-disabled" href="${product.releaseUrl}">Release coming soon <span>↗</span></a>`;
  detail.innerHTML = `<a class="back-link" href="index.html#software">← All software</a>
    <div class="detail-grid"><div class="detail-copy"><p class="eyebrow">${product.typeLabel}</p><h1>${product.name}</h1><p class="detail-tagline">${product.tagline}</p><p>${product.description}</p><div class="detail-actions">${action}<a class="text-link" href="${product.releaseUrl}" target="_blank" rel="noreferrer">View GitHub releases ↗</a></div></div>
    <aside class="detail-panel accent-${product.accent}"><span class="card-icon">${product.icon}</span><span class="panel-label">Latest information</span><strong>${product.version}</strong><span>${product.status}</span><div class="panel-rule"></div><span class="panel-label">Availability</span><span>Free during the MVP phase</span></aside></div>
    <section class="detail-features"><p class="eyebrow">At a glance</p><h2>Made to stay out of the way.</h2><ul>${featureList(product.features)}</ul></section>`;
}

if (launch) {
  document.title = `Open ${product.name} — Gost Recon`;
  launch.innerHTML = `<div class="launch-mark accent-${product.accent}"><span>${product.icon}</span></div><p class="eyebrow">${product.typeLabel}</p><h1>${product.name}</h1><p>${product.description}</p>${product.launchUrl ? `<a class="button" href="${product.launchUrl}" target="_blank" rel="noreferrer">Launch ${product.name} <span>↗</span></a>` : `<div class="notice"><strong>The browser app is being prepared.</strong><span>This launch path is wired and ready. Add the public app URL in <code>data.js</code> when the first release is live.</span></div>`}<a class="back-link" href="product.html?id=${product.id}">← Product details</a>`;
}

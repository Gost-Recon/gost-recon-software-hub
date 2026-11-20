const grid = document.querySelector("#product-grid");
const filters = document.querySelectorAll(".filter");

function productCard(product) {
  const action = product.type === "web" && product.launchUrl
    ? `<a class="card-action" href="app.html?id=${product.id}">Open app <span>↗</span></a>`
    : `<a class="card-action" href="product.html?id=${product.id}">View details <span>↗</span></a>`;
  return `<article class="product-card accent-${product.accent}">
    <div class="card-visual"><span class="card-icon">${product.icon}</span><span class="card-type">${product.typeLabel}</span><span class="card-status">${product.status}</span></div>
    <div class="card-body"><div class="card-meta"><span>${product.version}</span><span class="meta-line"></span><span>Free to start</span></div><h3>${product.name}</h3><p>${product.tagline}</p>${action}</div>
  </article>`;
}

function render(filter = "all") {
  const products = filter === "all" ? SOFTWARE : SOFTWARE.filter((product) => product.type === filter);
  grid.innerHTML = products.map(productCard).join("");
}

filters.forEach((filter) => filter.addEventListener("click", () => {
  filters.forEach((button) => button.classList.remove("active"));
  filter.classList.add("active");
  render(filter.dataset.filter);
}));

render();

const publishedGrid = document.querySelector("#published-grid");

if (publishedGrid) {
  if (PUBLISHED_WORK.length === 0) {
    publishedGrid.innerHTML = `<article class="published-empty"><span class="published-number">Author archive</span><h3>No publications added yet.</h3><p>Geopolitics and strategic studies work will appear here when it is ready to share.</p></article>`;
  } else {
    publishedGrid.innerHTML = PUBLISHED_WORK.map((work, index) => {
      const action = work.url
        ? `<a class="published-link" href="${work.url}" target="_blank" rel="noreferrer">Read publication <span aria-hidden="true">↗</span></a>`
        : `<span class="published-link published-link-muted">Link to be added</span>`;
      return `<article class="published-card">
        <div class="published-card-top"><span class="published-number">${String(index + 1).padStart(2, "0")}</span><span class="published-status">${work.status}</span></div>
        <p class="published-type">${work.type}</p>
        <h3>${work.title}</h3>
        <p class="published-description">${work.description}</p>
        <div class="published-card-foot"><time>${work.date}</time>${action}</div>
      </article>`;
    }).join("");
  }
}

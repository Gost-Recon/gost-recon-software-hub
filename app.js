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

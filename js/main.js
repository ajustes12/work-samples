const year = document.getElementById('yr');

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll('[data-search-input]').forEach((input) => {
  const list = document.querySelector(input.getAttribute('aria-controls') || '[data-search-list]');

  if (!list) {
    return;
  }

  const items = Array.from(list.querySelectorAll('[data-search-item]'));
  const count = document.querySelector('[data-result-count]');
  const emptyState = document.querySelector('[data-search-empty]');

  const filterItems = () => {
    const query = input.value.trim().toLocaleLowerCase();
    let visibleItems = 0;

    items.forEach((item) => {
      const matches = item.textContent.toLocaleLowerCase().includes(query);
      item.hidden = !matches;
      visibleItems += Number(matches);
    });

    if (count) {
      count.textContent = `Showing ${visibleItems} of ${items.length} ${items.length === 1 ? 'result' : 'results'}`;
    }

    if (emptyState) {
      emptyState.hidden = visibleItems > 0;
    }
  };

  input.addEventListener('input', filterItems);
  filterItems();
});
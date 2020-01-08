const h1 = document.querySelector('h1');
const p = document.querySelector('p');

document.addEventListener('click', async function(e) {
  e.preventDefault();
  const page = e.target.textContent;
  if (window.history.state && window.history.state.page === page) return;
  const url = '/' + page.toLowerCase();
  const contentUrl = `${url}Content`;
  window.history.replaceState({ page, contentUrl }, '', url);
  const response = await fetch(contentUrl);
  const pageData = await response.json();
  h1.textContent = pageData.pageTitle;
  p.textContent = pageData.pageContent;
});
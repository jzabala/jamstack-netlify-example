const fetchRepos = (username) =>
  fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch(console.error);

const createReposMarkup = (repos) =>
  repos
    .map(
      (repo) => `
    <li>
      <a href="${repo.html_url}" >${repo.name}</a>
      (⭐️ ${repo.stargazers_count})
    </li>
  `
    )
    .join("");

fetchRepos("jlengstorf")
  .then(createReposMarkup)
  .then((markup) => {
    const contentEl = document.getElementById("content");
    contentEl.innerHTML = markup;
  });

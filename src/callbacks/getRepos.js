// asynchronous
const { getCommitsSync } = require('./getCommits');
exports.getReposAsync = (username, callback) => {
  const repos = [`${username} repo1`, `${username} repo2`, `${username} repo3`];
  setTimeout(() => {
    callback(repos);
  }, 2000);
};

// synchronous
exports.getReposSync = (username) => {
  const repos = [`${username} repo1`, `${username} repo2`, `${username} repo3`];
  console.log('Repos: ', repos);
  repos.forEach((repo) => getCommitsSync(repo));
};

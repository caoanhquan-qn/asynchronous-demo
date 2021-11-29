const displayCommits = require('./displayCommits');
const { getCommitsAsync } = require('./getCommits');

const displayRepos = (repos) => {
  console.log('Repos: ', repos);
  repos.forEach((repo) => getCommitsAsync(repo, displayCommits));
};

module.exports = displayRepos;

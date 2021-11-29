const displayRepos = require('./displayRepos');
const { getReposAsync, getReposSync } = require('./getRepos');

const displayUser = (user) => {
  console.log('User: ', user);
  getReposAsync(user.gitHubUsername, displayRepos);
  //   getReposSync(user.gitHubUsername);
};

module.exports = displayUser;

const getReposPromise = require('./getReposPromise');
const getCommitsPromise = require('./getCommitsPromise');

const displayUser = (user) => {
  console.log('User: ', user);
  getReposPromise(user.gitHubUsername).then((res) => {
    console.log('Repos: ', res);
    const commitsPromise = res.map((repo) => {
      return getCommitsPromise(repo);
    });
    Promise.all(commitsPromise).then((values) => {
      values.forEach((commits) => console.log('Commits: ', commits));
    });
  });
};
module.exports = displayUser;

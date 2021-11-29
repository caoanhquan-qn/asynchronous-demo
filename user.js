// callbacks
const { getUserCallback } = require('./src/callbacks/getUser');
const displayUser = require('./src/callbacks/displayUser');
//promises
const { getUserPromise } = require('./src/promises/getUser');
const displayUserPromise = require('./src/promises/displayUser');
const getReposPromise = require('./src/promises/getReposPromise');
const getCommitsPromise = require('./src/promises/getCommitsPromise');

console.log('Before');

//Promise
getUserPromise(1)
  .then(displayUserPromise)
  .catch((err) => console.log(err.message));
// Promise chaining
getUserPromise(1)
  .then((user) => {
    console.log('User: ', user);
    return getReposPromise(user.gitHubUsername);
  })
  .then((repos) => {
    console.log('Repos[0]: ', repos[0]);
    return getCommitsPromise(repos[0]);
  })
  .then((commits) => console.log('Commits: ', commits))
  .catch((err) => console.log(err.message));

// async await
const displayCommits = async () => {
  try {
    const user = await getUserPromise(1);
    const repos = await getReposPromise(user.gitHubUsername);
    const commitsPromise = repos.map((repo) => getCommitsPromise(repo));
    const commits = await Promise.all(commitsPromise);
    console.log('User: ', user);
    console.log('Repos: ', repos);
    console.log('Commits', commits);
  } catch (err) {
    console.log(err.message);
  }
};
displayCommits();

// Callback
getUserCallback(2, displayUser);

console.log('After');

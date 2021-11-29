const getReposPromise = (username) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([`${username} repo1`, `${username} repo2`, `${username} repo3`]);
    }, 2000)
  );
};

module.exports = getReposPromise;

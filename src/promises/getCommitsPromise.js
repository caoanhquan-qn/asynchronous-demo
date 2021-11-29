const getCommitsPromise = (repo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        repoName: repo,
        commits: ['commit 1', 'commit 2', 'commit 3'],
      });
    }, 2000);
  });
};

module.exports = getCommitsPromise;

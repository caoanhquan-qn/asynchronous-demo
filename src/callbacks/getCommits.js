exports.getCommitsAsync = (repo, callback) => {
  setTimeout(() => {
    callback({
      repoName: repo,
      commits: ['commit 1', 'commit 2', 'commit 3'],
    });
  }, 2000);
};
exports.getCommitsSync = (repo) => {
  console.log('Commits: ', {
    repoName: repo,
    commits: ['commit 1', 'commit 2', 'commit 3'],
  });
};

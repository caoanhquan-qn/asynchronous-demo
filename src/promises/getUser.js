// Promise
exports.getUserPromise = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Reading a user from DB...');
      resolve({ id: userId, gitHubUsername: 'David' });
    }, 2000);
  });
};

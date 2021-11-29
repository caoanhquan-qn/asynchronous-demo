// Callback
exports.getUserCallback = (userId, callback) => {
  setTimeout(() => {
    console.log('Reading a user from DB...');
    callback({ id: userId, gitHubUsername: 'Mosh' });
  }, 2000);
};

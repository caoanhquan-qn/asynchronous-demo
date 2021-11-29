const getCustomer = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: 'Mosh Hamedani',
        isGold: true,
        email: 'mosh@gmail.com',
      });
    }, 2000);
  });
};

const getTopMovies = (movies) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies);
    }, 2000);
  });
};

const sendEmail = (email, movies) => {
  return new Promise((resolve) => {
    resolve(`Email sent to ${email}. List of top movies: ${movies.join(', ')}`);
  });
};

const bestMovies = ['Squid game', 'My name'];
const displayCustomerInfo = async (id) => {
  try {
    const customer = await getCustomer(id);
    console.log('Customer: ', customer);
    if (customer.isGold) {
      const topMovies = await getTopMovies(bestMovies);
      console.log('Top movies: ', topMovies);
      const emailMessage = await sendEmail(customer.email, topMovies);
      console.log(emailMessage);
    }
  } catch (err) {
    console.log(err.message);
  }
};
displayCustomerInfo(1);

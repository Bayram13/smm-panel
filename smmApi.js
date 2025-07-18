const axios = require('axios');
require('dotenv').config();

module.exports = {
  createOrder: async (service, link, quantity) => {
    const response = await axios.post(process.env.API_URL, {
      key: process.env.API_KEY,
      action: 'add',
      service,
      link,
      quantity
    });
    return response.data;
  }
};

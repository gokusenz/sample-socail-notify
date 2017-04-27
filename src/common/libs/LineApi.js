const axios = require('axios')
const qs = require('qs')

export default {
  lineNotify(token, message) {
    return axios.post(`${process.env.LINE_URL}`,
      qs.stringify(
        {
          msg: message,
          token,
        }
      ),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
  },
}

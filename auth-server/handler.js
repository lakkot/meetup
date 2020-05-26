'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=bt14a1nk1ggt2ckt29fd56kfut'
    + '&client_secret=8n60nvcg9f9epskkmi5nq413e9'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://lakkot.github.io/meetup/'
    + '&code=' + event.pathParameters.code;
    //+ '&code=d7c8ffd4af91550bf54167d3964386dd';

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
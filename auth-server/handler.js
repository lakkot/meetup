'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=bt14a1nk1ggt2ckt29fd56kfut'
    + '&client_secret=8n60nvcg9f9epskkmi5nq413e9'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://lakkot.github.io/meetup/'
    + '&code=' + event.pathParameters.code;
    //+ '&code=0cfcc087ba6950838ae37e66e0bf4095';

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
/*hej*/
module.exports.refreshAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=bt14a1nk1ggt2ckt29fd56kfut'
    + '&client_secret=8n60nvcg9f9epskkmi5nq413e9'
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.refresh_token;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Refresh Token
*
* refreshTokenRequest RefreshTokenRequest 
* returns RefreshTokenResponse
* */
const refresh_token_auth_refresh_post = ({ refreshTokenRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        refreshTokenRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  refresh_token_auth_refresh_post,
};

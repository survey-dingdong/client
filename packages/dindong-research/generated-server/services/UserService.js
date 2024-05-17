/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create User
*
* createUserRequest CreateUserRequest 
* returns CreateUserResponse
* */
const create_user_users_post = ({ createUserRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createUserRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get User List
*
* page Integer  (optional)
* size Integer  (optional)
* returns List
* */
const get_user_list_users_get = ({ page, size }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        page,
        size,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get User Me
*
* returns GetUserListResponse
* */
const get_user_me_users_me_get = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Login
*
* loginRequest LoginRequest 
* returns LoginResponse
* */
const login_users_login_post = ({ loginRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        loginRequest,
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
  create_user_users_post,
  get_user_list_users_get,
  get_user_me_users_me_get,
  login_users_login_post,
};

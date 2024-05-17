/**
 * The UserController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UserService');
const create_user_users_post = async (request, response) => {
  await Controller.handleRequest(request, response, service.create_user_users_post);
};

const get_user_list_users_get = async (request, response) => {
  await Controller.handleRequest(request, response, service.get_user_list_users_get);
};

const get_user_me_users_me_get = async (request, response) => {
  await Controller.handleRequest(request, response, service.get_user_me_users_me_get);
};

const login_users_login_post = async (request, response) => {
  await Controller.handleRequest(request, response, service.login_users_login_post);
};


module.exports = {
  create_user_users_post,
  get_user_list_users_get,
  get_user_me_users_me_get,
  login_users_login_post,
};

/**
 * The WorkspaceController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/WorkspaceService');
const create_workspace_workspaces_post = async (request, response) => {
  await Controller.handleRequest(request, response, service.create_workspace_workspaces_post);
};

const delete_workspace_workspaces__workspace_id__delete = async (request, response) => {
  await Controller.handleRequest(request, response, service.delete_workspace_workspaces__workspace_id__delete);
};

const get_workspace_list_workspaces_get = async (request, response) => {
  await Controller.handleRequest(request, response, service.get_workspace_list_workspaces_get);
};

const update_workspace_workspaces__workspace_id__patch = async (request, response) => {
  await Controller.handleRequest(request, response, service.update_workspace_workspaces__workspace_id__patch);
};


module.exports = {
  create_workspace_workspaces_post,
  delete_workspace_workspaces__workspace_id__delete,
  get_workspace_list_workspaces_get,
  update_workspace_workspaces__workspace_id__patch,
};

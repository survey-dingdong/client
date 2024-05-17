/**
 * The ProjectController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProjectService');
const create_project_workspaces__workspace_id__projects_post = async (request, response) => {
  await Controller.handleRequest(request, response, service.create_project_workspaces__workspace_id__projects_post);
};

const delete_project_participant_workspaces__workspace_id__projects__project_id__participants__participant_id__delete = async (request, response) => {
  await Controller.handleRequest(request, response, service.delete_project_participant_workspaces__workspace_id__projects__project_id__participants__participant_id__delete);
};

const delete_project_workspaces__workspace_id__projects__project_id__delete = async (request, response) => {
  await Controller.handleRequest(request, response, service.delete_project_workspaces__workspace_id__projects__project_id__delete);
};

const get_project_list_workspaces__workspace_id__projects_get = async (request, response) => {
  await Controller.handleRequest(request, response, service.get_project_list_workspaces__workspace_id__projects_get);
};

const get_project_participant_list_workspaces__workspace_id__projects__project_id__participants_get = async (request, response) => {
  await Controller.handleRequest(request, response, service.get_project_participant_list_workspaces__workspace_id__projects__project_id__participants_get);
};

const get_project_workspaces__workspace_id__projects__project_id__get = async (request, response) => {
  await Controller.handleRequest(request, response, service.get_project_workspaces__workspace_id__projects__project_id__get);
};

const update_project_workspaces__workspace_id__projects__project_id__put = async (request, response) => {
  await Controller.handleRequest(request, response, service.update_project_workspaces__workspace_id__projects__project_id__put);
};


module.exports = {
  create_project_workspaces__workspace_id__projects_post,
  delete_project_participant_workspaces__workspace_id__projects__project_id__participants__participant_id__delete,
  delete_project_workspaces__workspace_id__projects__project_id__delete,
  get_project_list_workspaces__workspace_id__projects_get,
  get_project_participant_list_workspaces__workspace_id__projects__project_id__participants_get,
  get_project_workspaces__workspace_id__projects__project_id__get,
  update_project_workspaces__workspace_id__projects__project_id__put,
};

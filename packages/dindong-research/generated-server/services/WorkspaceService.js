/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create Workspace
*
* createWorkspaceRequest CreateWorkspaceRequest 
* returns CreateWorkspaceResponse
* */
const create_workspace_workspaces_post = ({ createWorkspaceRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createWorkspaceRequest,
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
* Delete Workspace
*
* workspaceUnderscoreid Integer 
* returns oas_any_type_not_mapped
* */
const delete_workspace_workspaces__workspace_id__delete = ({ workspaceUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        workspaceUnderscoreid,
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
* Get Workspace List
*
* returns List
* */
const get_workspace_list_workspaces_get = () => new Promise(
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
* Update Workspace
*
* workspaceUnderscoreid Integer 
* updateWorkspaceRequest UpdateWorkspaceRequest 
* returns oas_any_type_not_mapped
* */
const update_workspace_workspaces__workspace_id__patch = ({ workspaceUnderscoreid, updateWorkspaceRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        workspaceUnderscoreid,
        updateWorkspaceRequest,
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
  create_workspace_workspaces_post,
  delete_workspace_workspaces__workspace_id__delete,
  get_workspace_list_workspaces_get,
  update_workspace_workspaces__workspace_id__patch,
};

/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create Project
*
* workspaceUnderscoreid Integer 
* projectUnderscoretype ProjectTypeEnum 
* createProjectRequest CreateProjectRequest 
* returns CreateProjectResponse
* */
const create_project_workspaces__workspace_id__projects_post = ({ workspaceUnderscoreid, projectUnderscoretype, createProjectRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        workspaceUnderscoreid,
        projectUnderscoretype,
        createProjectRequest,
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
* Delete Project Participant
*
* workspaceUnderscoreid Integer 
* projectUnderscoreid Integer 
* participantUnderscoreid Integer 
* projectUnderscoretype ProjectTypeEnum 
* returns oas_any_type_not_mapped
* */
const delete_project_participant_workspaces__workspace_id__projects__project_id__participants__participant_id__delete = ({ workspaceUnderscoreid, projectUnderscoreid, participantUnderscoreid, projectUnderscoretype }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        workspaceUnderscoreid,
        projectUnderscoreid,
        participantUnderscoreid,
        projectUnderscoretype,
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
* Delete Project
*
* workspaceUnderscoreid Integer 
* projectUnderscoreid Integer 
* projectUnderscoretype ProjectTypeEnum 
* returns oas_any_type_not_mapped
* */
const delete_project_workspaces__workspace_id__projects__project_id__delete = ({ workspaceUnderscoreid, projectUnderscoreid, projectUnderscoretype }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        workspaceUnderscoreid,
        projectUnderscoreid,
        projectUnderscoretype,
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
* Get Project List
*
* workspaceUnderscoreid Integer 
* projectUnderscoretype ProjectTypeEnum 
* page Integer  (optional)
* size Integer  (optional)
* returns List
* */
const get_project_list_workspaces__workspace_id__projects_get = ({ workspaceUnderscoreid, projectUnderscoretype, page, size }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        workspaceUnderscoreid,
        projectUnderscoretype,
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
* Get Project Participant List
*
* workspaceUnderscoreid Integer 
* projectUnderscoreid Integer 
* projectUnderscoretype ProjectTypeEnum 
* page Integer  (optional)
* size Integer  (optional)
* returns List
* */
const get_project_participant_list_workspaces__workspace_id__projects__project_id__participants_get = ({ workspaceUnderscoreid, projectUnderscoreid, projectUnderscoretype, page, size }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        workspaceUnderscoreid,
        projectUnderscoreid,
        projectUnderscoretype,
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
* Get Project
*
* workspaceUnderscoreid Integer 
* projectUnderscoreid Integer 
* projectUnderscoretype ProjectTypeEnum 
* returns GetExperimentProjectResponse
* */
const get_project_workspaces__workspace_id__projects__project_id__get = ({ workspaceUnderscoreid, projectUnderscoreid, projectUnderscoretype }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        workspaceUnderscoreid,
        projectUnderscoreid,
        projectUnderscoretype,
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
* Update Project
*
* workspaceUnderscoreid Integer 
* projectUnderscoreid Integer 
* projectUnderscoretype ProjectTypeEnum 
* putProjectRequest PutProjectRequest 
* returns oas_any_type_not_mapped
* */
const update_project_workspaces__workspace_id__projects__project_id__put = ({ workspaceUnderscoreid, projectUnderscoreid, projectUnderscoretype, putProjectRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        workspaceUnderscoreid,
        projectUnderscoreid,
        projectUnderscoretype,
        putProjectRequest,
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
  create_project_workspaces__workspace_id__projects_post,
  delete_project_participant_workspaces__workspace_id__projects__project_id__participants__participant_id__delete,
  delete_project_workspaces__workspace_id__projects__project_id__delete,
  get_project_list_workspaces__workspace_id__projects_get,
  get_project_participant_list_workspaces__workspace_id__projects__project_id__participants_get,
  get_project_workspaces__workspace_id__projects__project_id__get,
  update_project_workspaces__workspace_id__projects__project_id__put,
};

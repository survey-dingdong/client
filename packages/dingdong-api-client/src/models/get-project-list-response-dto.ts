/* tslint:disable */
/* eslint-disable */
/**
 * DingDong Survey
 * dingdong-survey API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface GetProjectListResponseDTO
 */
export interface GetProjectListResponseDTO {
    /**
     * 
     * @type {number}
     * @memberof GetProjectListResponseDTO
     */
    'id': number;
    /**
     * 
     * @type {number}
     * @memberof GetProjectListResponseDTO
     */
    'workspace_id': number;
    /**
     * 
     * @type {string}
     * @memberof GetProjectListResponseDTO
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof GetProjectListResponseDTO
     */
    'description': string | null;
    /**
     * 
     * @type {boolean}
     * @memberof GetProjectListResponseDTO
     */
    'is_public': boolean;
    /**
     * Number of experiment participants
     * @type {number}
     * @memberof GetProjectListResponseDTO
     */
    'joined_participants': number;
    /**
     * Maximum number of experiment participants
     * @type {number}
     * @memberof GetProjectListResponseDTO
     */
    'max_participants': number;
    /**
     * 
     * @type {string}
     * @memberof GetProjectListResponseDTO
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof GetProjectListResponseDTO
     */
    'updated_at': string | null;
}


/* tslint:disable */
/* eslint-disable */
/**
 * Survey DingDong
 * survey-dingdong API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateProjectRequest
 */
export interface CreateProjectRequest {
    /**
     * Title
     * @type {string}
     * @memberof CreateProjectRequest
     */
    title: string;
}

/**
 * Check if a given object implements the CreateProjectRequest interface.
 */
export function instanceOfCreateProjectRequest(value: object): boolean {
    if (!('title' in value)) return false;
    return true;
}

export function CreateProjectRequestFromJSON(json: any): CreateProjectRequest {
    return CreateProjectRequestFromJSONTyped(json, false);
}

export function CreateProjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProjectRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
    };
}

export function CreateProjectRequestToJSON(value?: CreateProjectRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
    };
}


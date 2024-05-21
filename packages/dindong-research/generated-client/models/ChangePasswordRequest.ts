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
 * @interface ChangePasswordRequest
 */
export interface ChangePasswordRequest {
    /**
     * Origin Password
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    oldPassword: string;
    /**
     * New Password
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    newPassword: string;
}

/**
 * Check if a given object implements the ChangePasswordRequest interface.
 */
export function instanceOfChangePasswordRequest(value: object): boolean {
    if (!('oldPassword' in value)) return false;
    if (!('newPassword' in value)) return false;
    return true;
}

export function ChangePasswordRequestFromJSON(json: any): ChangePasswordRequest {
    return ChangePasswordRequestFromJSONTyped(json, false);
}

export function ChangePasswordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangePasswordRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'oldPassword': json['old_password'],
        'newPassword': json['new_password'],
    };
}

export function ChangePasswordRequestToJSON(value?: ChangePasswordRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'old_password': value['oldPassword'],
        'new_password': value['newPassword'],
    };
}


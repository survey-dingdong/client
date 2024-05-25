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
 * @interface ValidateEmailResponse
 */
export interface ValidateEmailResponse {
    /**
     * Email Availability
     * @type {boolean}
     * @memberof ValidateEmailResponse
     */
    availability: boolean;
}

/**
 * Check if a given object implements the ValidateEmailResponse interface.
 */
export function instanceOfValidateEmailResponse(value: object): boolean {
    if (!('availability' in value)) return false;
    return true;
}

export function ValidateEmailResponseFromJSON(json: any): ValidateEmailResponse {
    return ValidateEmailResponseFromJSONTyped(json, false);
}

export function ValidateEmailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidateEmailResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'availability': json['availability'],
    };
}

export function ValidateEmailResponseToJSON(value?: ValidateEmailResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'availability': value['availability'],
    };
}


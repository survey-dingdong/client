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
 * @interface ValidationErrorLocInner
 */
export interface ValidationErrorLocInner {
}

/**
 * Check if a given object implements the ValidationErrorLocInner interface.
 */
export function instanceOfValidationErrorLocInner(value: object): boolean {
    return true;
}

export function ValidationErrorLocInnerFromJSON(json: any): ValidationErrorLocInner {
    return ValidationErrorLocInnerFromJSONTyped(json, false);
}

export function ValidationErrorLocInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationErrorLocInner {
    return json;
}

export function ValidationErrorLocInnerToJSON(value?: ValidationErrorLocInner | null): any {
    return value;
}

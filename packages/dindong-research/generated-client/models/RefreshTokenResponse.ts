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
 * @interface RefreshTokenResponse
 */
export interface RefreshTokenResponse {
    /**
     * Token
     * @type {string}
     * @memberof RefreshTokenResponse
     */
    token: string;
    /**
     * Refresh token
     * @type {string}
     * @memberof RefreshTokenResponse
     */
    refreshToken: string;
}

/**
 * Check if a given object implements the RefreshTokenResponse interface.
 */
export function instanceOfRefreshTokenResponse(value: object): boolean {
    if (!('token' in value)) return false;
    if (!('refreshToken' in value)) return false;
    return true;
}

export function RefreshTokenResponseFromJSON(json: any): RefreshTokenResponse {
    return RefreshTokenResponseFromJSONTyped(json, false);
}

export function RefreshTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefreshTokenResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'],
        'refreshToken': json['refresh_token'],
    };
}

export function RefreshTokenResponseToJSON(value?: RefreshTokenResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
        'refresh_token': value['refreshToken'],
    };
}


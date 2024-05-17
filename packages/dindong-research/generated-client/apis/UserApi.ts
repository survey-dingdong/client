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


import * as runtime from '../runtime';
import type {
  CreateUserRequest,
  CreateUserResponse,
  GetUserListResponse,
  HTTPValidationError,
  LoginRequest,
  LoginResponse,
} from '../models/index';
import {
    CreateUserRequestFromJSON,
    CreateUserRequestToJSON,
    CreateUserResponseFromJSON,
    CreateUserResponseToJSON,
    GetUserListResponseFromJSON,
    GetUserListResponseToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    LoginRequestFromJSON,
    LoginRequestToJSON,
    LoginResponseFromJSON,
    LoginResponseToJSON,
} from '../models/index';

export interface CreateUserUsersPostRequest {
    createUserRequest: CreateUserRequest;
}

export interface GetUserListUsersGetRequest {
    page?: number;
    size?: number;
}

export interface LoginUsersLoginPostRequest {
    loginRequest: LoginRequest;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Create User
     */
    async createUserUsersPostRaw(requestParameters: CreateUserUsersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateUserResponse>> {
        if (requestParameters['createUserRequest'] == null) {
            throw new runtime.RequiredError(
                'createUserRequest',
                'Required parameter "createUserRequest" was null or undefined when calling createUserUsersPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateUserRequestToJSON(requestParameters['createUserRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateUserResponseFromJSON(jsonValue));
    }

    /**
     * Create User
     */
    async createUserUsersPost(requestParameters: CreateUserUsersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateUserResponse> {
        const response = await this.createUserUsersPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get User List
     */
    async getUserListUsersGetRaw(requestParameters: GetUserListUsersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetUserListResponse>>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // PermissionDependency authentication
        }

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetUserListResponseFromJSON));
    }

    /**
     * Get User List
     */
    async getUserListUsersGet(requestParameters: GetUserListUsersGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetUserListResponse>> {
        const response = await this.getUserListUsersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get User Me
     */
    async getUserMeUsersMeGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUserListResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // PermissionDependency authentication
        }

        const response = await this.request({
            path: `/users/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUserListResponseFromJSON(jsonValue));
    }

    /**
     * Get User Me
     */
    async getUserMeUsersMeGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUserListResponse> {
        const response = await this.getUserMeUsersMeGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Login
     */
    async loginUsersLoginPostRaw(requestParameters: LoginUsersLoginPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginResponse>> {
        if (requestParameters['loginRequest'] == null) {
            throw new runtime.RequiredError(
                'loginRequest',
                'Required parameter "loginRequest" was null or undefined when calling loginUsersLoginPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginRequestToJSON(requestParameters['loginRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResponseFromJSON(jsonValue));
    }

    /**
     * Login
     */
    async loginUsersLoginPost(requestParameters: LoginUsersLoginPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginResponse> {
        const response = await this.loginUsersLoginPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
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
import type { ExperimentTimeslotRequest } from './ExperimentTimeslotRequest';
import {
    ExperimentTimeslotRequestFromJSON,
    ExperimentTimeslotRequestFromJSONTyped,
    ExperimentTimeslotRequestToJSON,
} from './ExperimentTimeslotRequest';
import type { ExperimentTypeEnum } from './ExperimentTypeEnum';
import {
    ExperimentTypeEnumFromJSON,
    ExperimentTypeEnumFromJSONTyped,
    ExperimentTypeEnumToJSON,
} from './ExperimentTypeEnum';

/**
 * 
 * @export
 * @interface PutProjectRequest
 */
export interface PutProjectRequest {
    /**
     * Title
     * @type {string}
     * @memberof PutProjectRequest
     */
    title: string;
    /**
     * Description
     * @type {string}
     * @memberof PutProjectRequest
     */
    description: string;
    /**
     * Whether the project is public
     * @type {boolean}
     * @memberof PutProjectRequest
     */
    isPublic: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PutProjectRequest
     */
    startDate: Date;
    /**
     * Experiment end date
     * @type {Date}
     * @memberof PutProjectRequest
     */
    endDate: Date;
    /**
     * Experimental exclusion days
     * @type {Array<Date>}
     * @memberof PutProjectRequest
     */
    excludedDates: Array<Date>;
    /**
     * Time information of experiment
     * @type {Array<ExperimentTimeslotRequest>}
     * @memberof PutProjectRequest
     */
    experimentTimeslots: Array<ExperimentTimeslotRequest>;
    /**
     * 
     * @type {ExperimentTypeEnum}
     * @memberof PutProjectRequest
     */
    experimentType: ExperimentTypeEnum;
    /**
     * Experiment location
     * @type {string}
     * @memberof PutProjectRequest
     */
    location: string;
}

/**
 * Check if a given object implements the PutProjectRequest interface.
 */
export function instanceOfPutProjectRequest(value: object): boolean {
    if (!('title' in value)) return false;
    if (!('description' in value)) return false;
    if (!('isPublic' in value)) return false;
    if (!('startDate' in value)) return false;
    if (!('endDate' in value)) return false;
    if (!('excludedDates' in value)) return false;
    if (!('experimentTimeslots' in value)) return false;
    if (!('experimentType' in value)) return false;
    if (!('location' in value)) return false;
    return true;
}

export function PutProjectRequestFromJSON(json: any): PutProjectRequest {
    return PutProjectRequestFromJSONTyped(json, false);
}

export function PutProjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutProjectRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'description': json['description'],
        'isPublic': json['is_public'],
        'startDate': (new Date(json['start_date'])),
        'endDate': (new Date(json['end_date'])),
        'excludedDates': json['excluded_dates'],
        'experimentTimeslots': ((json['experiment_timeslots'] as Array<any>).map(ExperimentTimeslotRequestFromJSON)),
        'experimentType': ExperimentTypeEnumFromJSON(json['experiment_type']),
        'location': json['location'],
    };
}

export function PutProjectRequestToJSON(value?: PutProjectRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'description': value['description'],
        'is_public': value['isPublic'],
        'start_date': ((value['startDate']).toISOString().substring(0,10)),
        'end_date': ((value['endDate']).toISOString().substring(0,10)),
        'excluded_dates': value['excludedDates'],
        'experiment_timeslots': ((value['experimentTimeslots'] as Array<any>).map(ExperimentTimeslotRequestToJSON)),
        'experiment_type': ExperimentTypeEnumToJSON(value['experimentType']),
        'location': value['location'],
    };
}

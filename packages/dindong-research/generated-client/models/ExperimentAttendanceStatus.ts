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


/**
 * 
 * @export
 */
export const ExperimentAttendanceStatus = {
    Scheduled: 'scheduled',
    NotAttended: 'not_attended',
    Attended: 'attended'
} as const;
export type ExperimentAttendanceStatus = typeof ExperimentAttendanceStatus[keyof typeof ExperimentAttendanceStatus];


export function instanceOfExperimentAttendanceStatus(value: any): boolean {
    return Object.values(ExperimentAttendanceStatus).includes(value);
}

export function ExperimentAttendanceStatusFromJSON(json: any): ExperimentAttendanceStatus {
    return ExperimentAttendanceStatusFromJSONTyped(json, false);
}

export function ExperimentAttendanceStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExperimentAttendanceStatus {
    return json as ExperimentAttendanceStatus;
}

export function ExperimentAttendanceStatusToJSON(value?: ExperimentAttendanceStatus | null): any {
    return value as any;
}

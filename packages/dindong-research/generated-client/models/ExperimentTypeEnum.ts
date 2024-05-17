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
export const ExperimentTypeEnum = {
    Online: 'online',
    Offline: 'offline'
} as const;
export type ExperimentTypeEnum = typeof ExperimentTypeEnum[keyof typeof ExperimentTypeEnum];


export function instanceOfExperimentTypeEnum(value: any): boolean {
    return Object.values(ExperimentTypeEnum).includes(value);
}

export function ExperimentTypeEnumFromJSON(json: any): ExperimentTypeEnum {
    return ExperimentTypeEnumFromJSONTyped(json, false);
}

export function ExperimentTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExperimentTypeEnum {
    return json as ExperimentTypeEnum;
}

export function ExperimentTypeEnumToJSON(value?: ExperimentTypeEnum | null): any {
    return value as any;
}


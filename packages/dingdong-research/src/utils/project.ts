import { GetExperimentProjectResponse } from "src/client";

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K;
}[keyof T];

type RequiredFields<T> = RequiredKeys<T>[];

const REQUIRED_FIELDS: RequiredFields<GetExperimentProjectResponse> = [
  "id",
  "title",
  "startDate",
  "endDate",
  "maxParticipants",
  "location",
  "experimentTimeslots",
];

export function isProjectFulfilled(
  project?: GetExperimentProjectResponse
): boolean {
  if (!project) {
    return false;
  }

  for (const field of REQUIRED_FIELDS) {
    if (project[field] === undefined || project[field] === null) {
      return false;
    }
  }
  return true;
}

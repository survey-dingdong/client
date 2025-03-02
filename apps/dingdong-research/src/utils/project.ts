import { GetProjectResponseDTO } from "dingdong-api-client";

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K;
}[keyof T];

type RequiredFields<T> = RequiredKeys<T>[];

const REQUIRED_FIELDS: RequiredFields<GetProjectResponseDTO> = [
  "id",
  "title",
  "startDate",
  "endDate",
  "maxParticipants",
  "location",
  "experimentTimeslots",
];

export function isProjectFulfilled(project?: GetProjectResponseDTO): boolean {
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

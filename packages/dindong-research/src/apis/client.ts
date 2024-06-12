import {
  AuthApi,
  Configuration,
  ProjectApi,
  UserApi,
  WorkspaceApi,
} from "generated-client";
import { token } from "src/utils/token";

export const basePath = "https://survey-dingdong.site";

const configuration = new Configuration({
  basePath,
  headers: {
    Authorization: `Bearer ${token.get("token")}`,
  },
});

export const userApi = new UserApi(configuration);

export const authApi = new AuthApi(configuration);

export const projectApi = new ProjectApi(configuration);

export const workspaceApi = new WorkspaceApi(configuration);

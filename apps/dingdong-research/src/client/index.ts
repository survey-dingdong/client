import {
  ProjectApi,
  AuthApi,
  Configuration,
  WorkspaceApi,
  UserApi,
} from "@dingdong/api-client";
import { TOKEN_KEY } from "src/constants/token";
import { token } from "src/utils/token";

const config = new Configuration({
  basePath: "https://survey-dingdong.site",
  accessToken: token.get(TOKEN_KEY) || "",
});

export const projectApi = new ProjectApi(config);
export const authApi = new AuthApi(config);
export const workspaceApi = new WorkspaceApi(config);
export const userApi = new UserApi(config);

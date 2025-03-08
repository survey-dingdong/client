import {
  ProjectApi,
  AuthApi,
  Configuration,
  WorkspaceApi,
  UserApi,
} from "@dingdong/api-client";
import camelCase from "lodash/camelCase";
import { TOKEN_KEY } from "src/constants/token";
import { token } from "src/utils/token";
console.log(token.get(TOKEN_KEY));

// camelCase 변환 함수
const toCamelCase = (str: string): string => {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "")
  );
};

// 객체의 모든 key를 camelCase로 변환하는 함수
const keysToCamelCase = (obj: any): any => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(keysToCamelCase);
  }

  return Object.keys(obj).reduce((acc, key) => {
    const camelKey = camelCase(key);
    acc[camelKey] = keysToCamelCase(obj[key]);
    return acc;
  }, {} as any);
};

const config = new Configuration({
  basePath: "https://survey-dingdong.site",
  baseOptions: {
    headers: {
      Authorization: `Bearer ${token.get(TOKEN_KEY)}`,
    },
    transformResponse: [
      (data: any) => {
        try {
          const jsonData = JSON.parse(data);
          return keysToCamelCase(jsonData);
        } catch (e) {
          return data;
        }
      },
    ],
  },
});

export const projectApi = new ProjectApi(config);
export const authApi = new AuthApi(config);
export const workspaceApi = new WorkspaceApi(config);
export const userApi = new UserApi(config);

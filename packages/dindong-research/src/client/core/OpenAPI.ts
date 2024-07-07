import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { ApiRequestOptions } from "./ApiRequestOptions";
import { token } from "src/utils/token";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "src/constants/token";
import {
  camelToSnake,
  snakeToCamel,
  toSnakeCaseQueryParams,
} from "src/utils/snakeToCamel";
import { refreshTokenAuthRefreshPost } from "../services.gen";

type Headers = Record<string, string>;
type Middleware<T> = (value: T) => T | Promise<T>;
type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;

export class Interceptors<T> {
  Fns: Middleware<T>[];

  constructor() {
    this.Fns = [];
  }

  eject(fn: Middleware<T>): void {
    const index = this.Fns.indexOf(fn);
    if (index !== -1) {
      this.Fns = [...this.Fns.slice(0, index), ...this.Fns.slice(index + 1)];
    }
  }

  use(fn: Middleware<T>): void {
    this.Fns = [...this.Fns, fn];
  }
}

export type OpenAPIConfig = {
  BASE: string;
  CREDENTIALS: "include" | "omit" | "same-origin";
  ENCODE_PATH?: ((path: string) => string) | undefined;
  HEADERS?: Headers | Resolver<Headers> | undefined;
  PASSWORD?: string | Resolver<string> | undefined;
  TOKEN?: string | Resolver<string> | undefined;
  USERNAME?: string | Resolver<string> | undefined;
  VERSION: string;
  WITH_CREDENTIALS: boolean;
  interceptors: {
    request: Interceptors<AxiosRequestConfig>;
    response: Interceptors<AxiosResponse>;
  };
};

const requestInterceptor = () => {
  const interceptors = new Interceptors<AxiosRequestConfig>();
  interceptors.use(async (config: AxiosRequestConfig) => {
    if (config.data) {
      config.data = camelToSnake(config.data);
    }
    const url = new URL(config.url ?? "");

    if (config.params) {
      config.params = camelToSnake(config.params);
    }

    if (config.url) {
      config.url = toSnakeCaseQueryParams(config.url).href;
    }

    return config;
  });
  return interceptors;
};

const responseInterceptor = () => {
  const interceptors = new Interceptors<AxiosResponse>();
  interceptors.use(async (response: AxiosResponse) => {
    if (response.status === 401) {
      const accessToken = token.get(TOKEN_KEY);
      const refreshToken = token.get(REFRESH_TOKEN_KEY);

      if (!accessToken || !refreshToken) {
        token.clear();
        window.location.href = `/`;

        return response;
      }

      refreshTokenAuthRefreshPost({
        requestBody: {
          token: accessToken,
          refreshToken,
        },
      }).catch(() => {
        token.clear();
        window.location.href = `/`;
      });

      response.request();

      return response;
    }

    if (response.data) {
      response.data = snakeToCamel(response.data);
    }

    return response;
  });
  return interceptors;
};

export const OpenAPI: OpenAPIConfig = {
  // BASE: "https://survey-dingdong.site",
  BASE: "https://survey-dingdong.site",
  CREDENTIALS: "include",
  ENCODE_PATH: undefined,
  HEADERS: undefined,
  PASSWORD: undefined,
  TOKEN: token.get(TOKEN_KEY) ?? "",
  USERNAME: undefined,
  VERSION: "1.0.0",
  WITH_CREDENTIALS: false,
  interceptors: {
    request: requestInterceptor(),
    response: responseInterceptor(),
  },
};

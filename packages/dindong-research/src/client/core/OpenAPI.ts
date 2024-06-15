import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { ApiRequestOptions } from './ApiRequestOptions';

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
	CREDENTIALS: 'include' | 'omit' | 'same-origin';
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

export const OpenAPI: OpenAPIConfig = {
	BASE: '',
	CREDENTIALS: 'include',
	ENCODE_PATH: undefined,
	HEADERS: undefined,
	PASSWORD: undefined,
	TOKEN: undefined,
	USERNAME: undefined,
	VERSION: '1.0.0',
	WITH_CREDENTIALS: false,
	interceptors: {
		request: new Interceptors(),
		response: new Interceptors(),
	},
};
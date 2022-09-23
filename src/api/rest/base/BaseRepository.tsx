import { BaseRequest } from "./BaseRequest";
import { BaseErrorResponse, BaseResponse } from "./BaseResponse";
import axios, { Axios } from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json';

export abstract class BaseRepository {
  protected readonly restClient: Axios;

  constructor() {
    const baseUrl = import.meta.env.VITE_API_URL;
    if (!baseUrl) {
      throw new Error('baseUrl is "null" or "undefindned"');
    }
    this.restClient = axios.create({
      baseURL: baseUrl,
    });
  }

  abstract post(req: BaseRequest): Promise<BaseResponse | BaseErrorResponse>;
  abstract get(...args: any): Promise<BaseResponse | BaseErrorResponse>;
  abstract patch(req: BaseRequest): BaseResponse;
  abstract delete(...args: any): BaseResponse;
}

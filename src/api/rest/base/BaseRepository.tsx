import { BaseRequest } from "./BaseRequest";
import { BaseErrorResponse, BaseResponse } from "./BaseResponse";

export abstract class BaseRepository {
  protected readonly baseUrl: string | undefined;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL;
    if (this.baseUrl === null || this.baseUrl === undefined) {
      throw new Error('baseUrl is "null" or "undefindned"');
    }
  }

  abstract post(req: BaseRequest): Promise<BaseResponse | BaseErrorResponse>;
  abstract get(...args: any): BaseResponse;
  abstract patch(req: BaseRequest): BaseResponse;
  abstract delete(...args: any): BaseResponse;
}

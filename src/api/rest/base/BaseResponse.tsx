import { AxiosError, AxiosResponse, AxiosResponseHeaders } from "axios";

export abstract class BaseResponse {
  public readonly headers: AxiosResponseHeaders;
  public readonly status: number;
  public readonly data: any;
  constructor(headers: AxiosResponseHeaders, status: number, data: any) {
    this.headers = headers;
    this.status = status;
    this.data = data;
  }
}

export abstract class BaseErrorResponse {
  public readonly error: AxiosError;
  constructor(error: AxiosError<unknown, any>) {
    this.error = error;
  }
}

export class CommonResponse extends BaseResponse {
  constructor(res: AxiosResponse<any, any>) {
    super(res.headers, res.status, res.data);
  }
}

export class CommonErrorResponse extends BaseErrorResponse {
  constructor(error: AxiosError<unknown, any>) {
    super(error);
  }
}

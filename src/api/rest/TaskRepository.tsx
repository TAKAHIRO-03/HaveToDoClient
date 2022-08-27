import axios, { AxiosResponseHeaders } from "axios";
import { BaseRepository } from "./base/BaseRepository";
import { BaseRequest } from "./base/BaseRequest";
import {
  BaseErrorResponse,
  BaseResponse,
  CommonErrorResponse,
  CommonResponse,
} from "./base/BaseResponse";

export class TaskPostRequest extends BaseRequest {
  public readonly username: string;
  public readonly confirmUsername: string;
  public readonly password: string;
  public readonly confirmPassword: string;
  public readonly acceptTerms: boolean;

  constructor(
    username: string,
    confirmUsername: string,
    password: string,
    confirmPassword: string,
    acceptTerms: boolean
  ) {
    super();
    this.username = username;
    this.confirmUsername = confirmUsername;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.acceptTerms = acceptTerms;
  }
}

export class TaskGetRequest extends BaseRequest {
  public readonly page: number;
  public readonly size: number;
  public readonly startTime: Date | null | undefined;
  public readonly endTime: Date;

  constructor(
    page: number,
    size: number,
    startTime: Date | null | undefined,
    endTime: Date
  ) {
    super();
    this.page = page;
    this.size = size;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

export type Task = {
  id: number;
  accountId: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  cost: number;
  isRepeat: boolean;
};

export class TaskGetResponse extends BaseResponse {
  public readonly data: Task[];
  constructor(headers: AxiosResponseHeaders, status: number, data: any) {
    super(headers, status, null);
    this.data = data ? (data as Task[]) : [];
  }
}

export class TaskRepository extends BaseRepository {
  public async post(
    req: TaskPostRequest
  ): Promise<BaseResponse | BaseErrorResponse> {
    const res = await axios
      .post(this.baseUrl! + "/api/v1.0/tasks", JSON.stringify(req), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });

    if (axios.isAxiosError(res)) {
      return new CommonErrorResponse(res);
    }

    return new CommonResponse(res);
  }
  public async get(
    req: TaskGetRequest
  ): Promise<BaseResponse | BaseErrorResponse> {
    const res = await axios
      .get(this.baseUrl! + "/api/v1.0/tasks", {
        params: {
          page: req.page,
          size: req.size,
          startTime: req.startTime?.toISOString(),
          endTime: req.endTime.toISOString(),
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });

    if (axios.isAxiosError(res)) {
      return new CommonErrorResponse(res);
    }

    return new TaskGetResponse(res.headers, res.status, res.data);
  }
  public patch(args: unknown): CommonResponse {
    throw new Error("Method not implemented.");
  }
  public delete(...args: any): CommonResponse {
    throw new Error("Method not implemented.");
  }
}

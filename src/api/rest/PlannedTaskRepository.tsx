import axios, { AxiosResponseHeaders } from "axios";
import { BaseRepository } from "./base/BaseRepository";
import { BaseRequest } from "./base/BaseRequest";
import {
  BaseErrorResponse,
  BaseResponse,
  CommonErrorResponse,
  CommonResponse,
} from "./base/BaseResponse";

export class PlannedTaskPostRequest extends BaseRequest {
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

export class PlannedTaskGetRequest extends BaseRequest {
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

export type PlannedTask = {
  id: number;
  accountId: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  cost: number;
  isRepeat: boolean;
};

export class PlannedTaskGetResponse extends BaseResponse {
  public readonly data: PlannedTask[];
  constructor(headers: AxiosResponseHeaders, status: number, data: any) {
    super(headers, status, null);
    this.data = data as PlannedTask[];
  }
}

export class PlannedTaskRepository extends BaseRepository {
  public async post(
    req: PlannedTaskPostRequest
  ): Promise<BaseResponse | BaseErrorResponse> {
    const res = await axios
      .post(this.baseUrl! + "/api/v1.0/plannedTasks", JSON.stringify(req), {
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
    req: PlannedTaskGetRequest
  ): Promise<BaseResponse | BaseErrorResponse> {
    const res = await axios
      .get(this.baseUrl! + "/api/v1.0/plannedTasks", {
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

    return new PlannedTaskGetResponse(res.headers, res.status, res.data);
  }
  public patch(args: unknown): CommonResponse {
    throw new Error("Method not implemented.");
  }
  public delete(...args: any): CommonResponse {
    throw new Error("Method not implemented.");
  }
}

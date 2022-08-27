import axios from "axios";
import { BaseRepository } from "./base/BaseRepository";
import { BaseRequest } from "./base/BaseRequest";
import {
  BaseErrorResponse,
  BaseResponse,
  CommonErrorResponse,
  CommonResponse,
} from "./base/BaseResponse";

export class LoginRequest extends BaseRequest {
  public readonly username: string;
  public readonly password: string;

  constructor(username: string, password: string) {
    super();
    this.username = username;
    this.password = password;
  }
}

export class LoginRepository extends BaseRepository {
  public async post(
    req: LoginRequest
  ): Promise<BaseResponse | BaseErrorResponse> {
    const res = await axios
      .post(this.baseUrl! + "/api/v1.0/login", JSON.stringify(req), {
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
  public get(...args: any): Promise<BaseResponse | BaseErrorResponse> {
    throw new Error("Method not implemented.");
  }
  public patch(args: unknown): CommonResponse {
    throw new Error("Method not implemented.");
  }
  public delete(...args: any): CommonResponse {
    throw new Error("Method not implemented.");
  }
}

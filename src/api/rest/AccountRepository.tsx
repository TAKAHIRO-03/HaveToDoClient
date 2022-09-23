import axios from "axios";
import { BaseRepository } from "./base/BaseRepository";
import { BaseRequest } from "./base/BaseRequest";
import {
  BaseErrorResponse,
  BaseResponse,
  CommonErrorResponse,
  CommonResponse,
} from "./base/BaseResponse";

export class AccountRequest extends BaseRequest {
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

export class AccountRepository extends BaseRepository {
  public async post(
    req: AccountRequest
  ): Promise<BaseResponse | BaseErrorResponse> {
    const res = await this.restClient
      .post("/api/v1.0/accounts", JSON.stringify(req), {
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

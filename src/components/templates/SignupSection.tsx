import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputValue from "../parts/InputValue";
import FormGroup from "../parts/FormGroup";
import Button from "../parts/Button";
import {
  validateAcceptTerms,
  validateConfirmEmail,
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "../../util/ValidationUtil";
import {
  AccountRepository,
  AccountRequest,
} from "../../api/rest/AccountRepository";
import { useContext } from "react";
import axios from "axios";
import { BaseResponse } from "../../api/rest/base/BaseResponse";
import { DiConteinerContext } from "../../App";
import { resolveDiConteinerContext } from "../../di/DiConteinerContextResolver";

type SignupForm = {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const SignupSection = () => {
  const validationSchema = Yup.object().shape({
    email: validateEmail,
    confirmEmail: validateConfirmEmail,
    password: validatePassword,
    confirmPassword: validateConfirmPassword,
    acceptTerms: validateAcceptTerms,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: yupResolver(validationSchema),
  });

  const accountRepo: AccountRepository = resolveDiConteinerContext(
    useContext(DiConteinerContext)
  ).resolve("accountRepo");

  const onSubmit = (data: SignupForm) => {
    const req: AccountRequest = new AccountRequest(
      data.email,
      data.confirmEmail,
      data.password,
      data.confirmPassword,
      data.acceptTerms
    );

    accountRepo.post(req).then((res) => {
      if (axios.isAxiosError(res) || (res as BaseResponse).status !== 201) {
        // TODO リダイレクトする
      }
    });
  };

  return (
    <div className="signup">
      <div className="signup-title">アカウント登録</div>
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup errorMsg={errors.email?.message}>
            <InputValue
              label={{
                text: "Email",
              }}
              type="text"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              register={register}
            />
          </FormGroup>
          <FormGroup errorMsg={errors.confirmEmail?.message}>
            <InputValue
              label={{
                text: "Confirm Email",
              }}
              type="text"
              className={`form-control ${
                errors.confirmEmail ? "is-invalid" : ""
              }`}
              name="confirmEmail"
              register={register}
            />
          </FormGroup>
          <FormGroup errorMsg={errors.password?.message}>
            <InputValue
              label={{
                text: "Password",
              }}
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              name="password"
              register={register}
            />
          </FormGroup>
          <FormGroup errorMsg={errors.confirmPassword?.message}>
            <InputValue
              label={{
                text: "Confirm Password",
              }}
              type="password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              name="confirmPassword"
              register={register}
            />
          </FormGroup>
          <FormGroup
            errorMsg={errors.acceptTerms?.message}
            className="form-group form-check"
          >
            <InputValue
              label={{
                text: "I have read and agree to the Terms",
                htmlFor: "acceptTerms",
                className: "form-check-label",
              }}
              type="checkbox"
              id="acceptTerms"
              className={`form-check-input ${
                errors.acceptTerms ? "is-invalid" : ""
              }`}
              name="acceptTerms"
              register={register}
            />
          </FormGroup>
          <FormGroup>
            <Button
              type="submit"
              className="btn btn-primary"
              btnName="Register"
            />
            <Button
              type="button"
              onClick={() => reset()}
              className="btn btn-warning float-right"
              btnName="Reset"
            />
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default SignupSection;

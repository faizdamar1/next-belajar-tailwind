import Link from "next/link";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import CheckComponent from "../components/CheckComponent";
import InputComponent from "../components/InputComponent";
import LabelComponent from "../components/LabelComponent";
import Guest from "../layouts/Guest";

export default function Login() {
  return (
    <div>
      <form>
        <div className="mb-6">
          <LabelComponent forInput="email">Email</LabelComponent>
          <InputComponent
            type="email"
            name="email"
            id="email"
            placeholder="john@doe.com"
          />
        </div>
        <div className="mb-6">
          <LabelComponent forInput="password">Password</LabelComponent>
          <InputComponent type="password" name="password" id="password" />
        </div>
        <div className="mb-5 flex justify-between">
          <CheckComponent
            label="Remember Me"
            name="remember"
            htmlFor="remember"
            id="remember"
          />
          <a href="#">Forgot Password?</a>
        </div>
        <div className="flex item-center justify-between mt-11">
          <span>
            Already have account ?{"  "}
            <Link href="/register">
              <a href="" className="text-indigo-500 font-medium">
                Register
              </a>
            </Link>
          </span>
          <ButtonComponent>Login</ButtonComponent>
        </div>
      </form>
    </div>
  );
}

Login.getLayout = (page) => (
  <Guest cardClassName="md:w-1/2 lg:w-1/3" header="Login" title="Login" children={page}></Guest>
);

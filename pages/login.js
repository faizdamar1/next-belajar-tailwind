import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";
import LabelComponent from "../components/LabelComponent";
import Guest from "../layouts/Guest";

export default function Login() {
  return (
    <div>
      <form>
        <div className="mb-6">
          <LabelComponent forInput="email">Email</LabelComponent>
          <InputComponent type="email" id="email" placeholder="john@doe.com" />
        </div>
        <div className="mb-6">
          <LabelComponent forInput="password">Password</LabelComponent>
          <InputComponent type="password" id="password" />
        </div>
        <div className="mb-5 flex justify-between">
          <div>
            <input
              className="accent-sky-500 mr-3"
              type="checkbox"
              id="remember"
            />
            <label htmlFor="remember">Remember</label>
          </div>
          <a href="#">Forgot Password</a>
        </div>
        <div className="flex justify-end">
          <ButtonComponent>Login</ButtonComponent>
        </div>
      </form>
    </div>
  );
}

Login.getLayout = (page) => (
  <Guest header="Login" title="Login" children={page}></Guest>
);

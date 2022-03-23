import Link from "next/link";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import CheckComponent from "../components/CheckComponent";
import InputComponent from "../components/InputComponent";
import LabelComponent from "../components/LabelComponent";
import SelectComponent from "../components/SelectComponent";
import Guest from "../layouts/Guest";

export default function Register() {
  return (
    <div>
      <form>
        <div className="mb-6">
          <LabelComponent forInput="name">Name</LabelComponent>
          <InputComponent name="name" id="name" placeholder="John Doe" />
        </div>
        <div className="mb-6">
          <LabelComponent forInput="email">Email</LabelComponent>
          <InputComponent
            type="email"
            name="email"
            id="email"
            placeholder="john@doe.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3">
          <div className="mb-6">
            <LabelComponent forInput="password">Password</LabelComponent>
            <InputComponent type="password" name="password" id="password" />
          </div>

          <div className="mb-6">
            <LabelComponent forInput="password_confirmation">
              Comfirm Password
            </LabelComponent>
            <InputComponent
              type="password"
              name="password_confirmation"
              id="password_confirmation"
            />
          </div>
        </div>

        <div className="mb-6">
          <LabelComponent forInput={"gender"}>Gender</LabelComponent>
          <SelectComponent>
            <option>Male</option>
            <option>Female</option>
          </SelectComponent>
        </div>

        <div className="mb-5 flex justify-between">
          <CheckComponent
            label="Aggree with Privacy and Terms"
            htmlFor="acceptance"
            name="acceptance"
            id="acceptance"
          />
        </div>

        <div className="flex item-center justify-between mt-10">
          <ButtonComponent>Register</ButtonComponent>
          <span>
              Already have account ?{"  "}
              <Link href="/login">
                  <a href="" className="text-indigo-500 font-medium">Login</a>
              </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

Register.getLayout = (page) => (
  <Guest cardClassName="md:w-1/2 lg:w-1/3" header="Register" title="Register" children={page}></Guest>
);

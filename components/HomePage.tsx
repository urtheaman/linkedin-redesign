import { NextPage } from "next";
import Image from "next/image";
import BlueButtonFilled from "./BlueButtonFilled";
import InputElement from "./InputElement";
import SingleColorButton from "./SingleColorButton";
const HomePage: NextPage = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-none  nineHbr:grid-rows-none nineHbr:grid-cols-8">
      <div className="nineHbr:col-start-2 nineHbr:col-end-5 z-9 flex flex-col items-center nineHbr:items-start">
        <h1 className="text-4xl text-[#8f5849] nineHbr:text-5xl font-light my-6 text-center nineHbr:text-left">
          Welcome to your professional community
        </h1>
        <div className="w-[380px]">
          <InputElement type="text" placeholder="Email or phone number" />
          <InputElement type="password" placeholder="Password" />

          <button className="hover:underline hover:text-linkedin">
            Forgot password?
          </button>

          <SingleColorButton
            bgColor="bg-linkedin"
            color="text-white"
            hover="hover:bg-linkedin_dark"
          >
            Sign in
          </SingleColorButton>

          <div className="flex items-center">
            <div className="border-t w-full"></div>
            <p className="mx-2">or</p>
            <div className="border-t w-full"></div>
          </div>

          <SingleColorButton
            border="border-2"
            bgColor="bg-white"
            color="text-gray-500"
            hover="hover:border-gray-400 hover:bg-gray-50"
          >
            <div className="relative w-5 h-5 mr-4">
              <Image src="/google.png" layout="fill" alt="google sign in" />
            </div>
            Sign in with google
          </SingleColorButton>
        </div>
      </div>

      <div className="relative md:col-start-5 md:col-end-9 -z-1">
        <Image
          src="/home_illustration.svg"
          layout="fill"
          objectFit="contain"
          alt="Linkedin login"
        />
      </div>
    </div>
  );
};

export default HomePage;

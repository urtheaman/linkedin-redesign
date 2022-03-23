import Head from "next/head";
import Image from "next/image";

import {
  BriefcaseIcon,
  ChatAlt2Icon,
  GlobeAltIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/outline";
import BlueButton from "../components/BlueButton";
import GrayButton from "../components/GrayButton";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Linkedin Redesign</title>
      </Head>

      <header className="flex items-center justify-around">
        <div className="relative w-48 h-32">
          <Image
            src="/linkedin.svg"
            alt="linkedin logo"
            layout="fill"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-[24]">
            {/* Headers Link */}
            <div className="cursor-pointer flex space-x-2 text-gray-500 group">
              <GlobeAltIcon className="h-6 w-6 outline-1 stroke-gray-500 group-hover:stroke-black" />
              <p className="group-hover:text-black">Explore</p>
            </div>
            <div className="cursor-pointer flex space-x-2 text-gray-500 group">
              <ChatAlt2Icon className="h-6 w-6 outline-1 stroke-gray-500 group-hover:stroke-black" />
              <p className="group-hover:text-black">People</p>
            </div>
            <div className="cursor-pointer flex space-x-2 text-gray-500 group">
              <PresentationChartLineIcon className="h-6 w-6 outline-1 stroke-gray-500 group-hover:stroke-black" />
              <p className="group-hover:text-black">Learning</p>
            </div>
            <div className="cursor-pointer flex space-x-2 text-gray-500 group">
              <BriefcaseIcon className="h-6 w-6 outline-1 stroke-gray-500 group-hover:stroke-black" />
              <p className="group-hover:text-black">Jobs</p>
            </div>
          </div>

          <div className="ml-4">
            <GrayButton>Join now</GrayButton>
            <BlueButton>Sign in</BlueButton>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;

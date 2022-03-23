import { NextPage } from "next";

const BlueButtonFilled: NextPage = ({ children }) => {
  return (
    <button className="block my-6 w-full bg-linkedin text-xl text-white rounded-full h-14 hover:bg-linkedin_dark transition duration-100 ease-out">
      {children}
    </button>
  );
};

export default BlueButtonFilled;

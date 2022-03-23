import { NextPage } from "next";

const BlueButton: NextPage = ({ children }) => {
  return (
    <button className="w-24 mx-2 h-10 rounded-full border font-semibold transition-all duration-100 ease-in-out hover:border-[3px] hover:bg-[#0a66c21c] border-[#0a66c2] text-[#0a66c2]">
      {children}
    </button>
  );
};

export default BlueButton;

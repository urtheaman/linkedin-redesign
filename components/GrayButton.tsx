import { NextPage } from "next";

const GrayButton: NextPage = ({ children }) => {
  return (
    <button className="text-gray-500 px-4 py-[0.6rem] rounded-md mx-2 hover:bg-slate-100 hover:text-black transition duration-100 ease-out font-semibold">
      {children}
    </button>
  );
};

export default GrayButton;

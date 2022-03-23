import { NextPage } from "next";

type Props = {
  type: string;
  placeholder: string;
};
const InputElement: NextPage<Props> = ({ type, placeholder }) => {
  return (
    <input
      className="outline-none px-4 border text-[#202020] border-gray-600 focus:border-2 focus:border-[#0a66c2] transition-all duration-100 ease-in-out block my-4 w-full rounded h-14"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputElement;

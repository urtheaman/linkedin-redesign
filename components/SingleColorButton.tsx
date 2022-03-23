import { NextPage } from "next";

type Props = {
  className?: string;
  color?: string;
  bgColor?: string;
  hover: string;
  border?: string;
};
const SingleColorButton: NextPage<Props> = ({
  children,
  color,
  bgColor,
  hover,
  border,
  className,
}) => {
  return (
    <button
      className={`flex items-center justify-center my-6 w-full text-xl rounded-full h-14 transition duration-100 ease-out ${color} ${bgColor} ${hover} ${border} ${className}`}
    >
      {children}
    </button>
  );
};

export default SingleColorButton;

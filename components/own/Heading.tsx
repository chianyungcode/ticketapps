import React, { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description, ...rest }) => {
  return (
    <div {...rest}>
      <div className="text-3xl font-bold text-gray-900">{title}</div>
      <div className="text-sm font-medium text-gray-400">{description}</div>
    </div>
  );
};

export default Heading;

import React from "react";

const MidLayout = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <div
      className="mx-auto w-full max-w-7xl bg-[#F5F5F7] px-10 pb-10 pt-20"
      {...props}
    >
      {children}
    </div>
  );
};

export default MidLayout;

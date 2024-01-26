import React from "react";

const MidLayout = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
  className?: string;
}) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-10 pb-10 pt-20 ${className}`}
      {...props}
    >
      {/*<div className="mid-gradient" />*/}
      {children}
    </div>
  );
};

export default MidLayout;

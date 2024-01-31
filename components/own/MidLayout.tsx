import React from "react";

interface MidLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const MidLayout = ({ children, className, ...props }: MidLayoutProps) => {
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

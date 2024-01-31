import SessionProvider from "@/provider/SessionProvider";

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProvider />
      {children}
    </>
  );
};

export default LoggedInLayout;

import Sidebar from "@/components/own/Sidebar";
import SessionProvider from "@/provider/SessionProvider";

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <SessionProvider />
      {children}
    </>
  );
};

export default LoggedInLayout;

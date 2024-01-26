import Navbar from "@/components/own/Navbar";

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LoggedInLayout;

import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
import React from "react";

const SSOCallbackPage = () => {
  return <AuthenticateWithRedirectCallback />;
};

export default SSOCallbackPage;

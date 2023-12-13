"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
  return (
    <SessionProvider basePath={process.env.NEXTAUTH_URL}>
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;

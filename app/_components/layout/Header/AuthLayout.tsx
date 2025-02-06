"use client";

import React from "react";
import AuthHeader from "@/_components//Login/AuthHeader";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthHeader />
      <main className="flex flex-1 items-center justify-center">{children}</main>
    </div>
  );
};

export default AuthLayout;


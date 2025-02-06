"use client";

import React from "react";
import LoginForm from "@/_components/Login/LoginForm";
import SimpleLogin from "@/_components/Login/SimpleLogin";
import AuthLayout from "@/_components/layout/Header/AuthLayout";

const Page: React.FC = () => {
  return (
    <AuthLayout>
      <div className="space-y-8">
        <LoginForm />
        <SimpleLogin />
      </div>
    </AuthLayout>
  );
};

export default Page;

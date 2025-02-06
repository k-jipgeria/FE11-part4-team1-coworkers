"use client";

import React from 'react';
import SignupForm from '@/_components/Signup/SignupForm';
import SimpleLogin from '@/_components/Login/SimpleLogin';

const Page: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen ">
    <SignupForm />
    <SimpleLogin />
  </div>
);

export default Page;


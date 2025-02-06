import React from 'react';
import Image from 'next/image';

const SimpleLogin = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[40rem] mx-auto py-4">
      <div className="relative flex items-center w-full mb-4">
        <div className="flex-grow border-t border-border-primary"></div>
        <span className="mx-4 text-text-inverse text-[1.4rem]">OR</span>
        <div className="flex-grow border-t border-border-primary"></div>
      </div>
      <div className="flex items-center gap-20 mb-4">
        <p className=" text-left text-text-inverse text-[1rem] font-medium">간편 로그인하기</p>
        <div className="flex justify-center items-center gap-6">
          <button
            className="flex items-center justify-center w-[2.65rem] h-[2.65rem] bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md focus:outline-none"
            aria-label="Login with Google"
          >
            <Image src="/images/google.png" alt="Google" width={32} height={32} />
          </button>
          <button
            className="flex items-center justify-center w-[2.65rem] h-[2.65rem] border border-gray-300 rounded-full shadow-sm hover:shadow-md focus:outline-none"
            aria-label="Login with Kakao"
          >
            <Image src="/images/kakaotalk.png" alt="Kakao" width={32} height={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleLogin;



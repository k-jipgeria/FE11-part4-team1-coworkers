// components/LoginForm.tsx
import React from "react";
import EmailInput from "@/_components/common/Input/EmailInput";
import PasswordInput from "@/_components/common/Input/PasswordInput";
import Button from "@/_components/common/Button";

const LoginForm: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto pc:mt-[10rem] pc:w-[28rem] tablet:mt-[8rem] tablet:w-[22rem] mobile:mt-[4rem] mobile:w-[18rem]">
      <div className="w-full">
        {/* 제목 */}
        <h1 className="text-text-primary text-center mb-[3rem] pc:text-[2rem] pc:leading-[2.5rem] tablet:text-[1.5rem] tablet:leading-[2rem] mobile:text-[1.25rem] mobile:leading-[1.75rem] font-medium">
          로그인
        </h1>

        {/* 폼 영역 */}
        <form>
          <div className="flex flex-col pc:gap-[1.5rem] tablet:gap-[1.25rem] mobile:gap-[1rem]">
            {/* 이메일 입력 */}
            <EmailInput
              label="이메일"
              value=""
              onChange={() => {}}
              placeholder="이메일을 입력해주세요."
            />

            {/* 비밀번호 입력 */}
            <PasswordInput
              value=""
              onChange={() => {}}
              placeholder="비밀번호를 입력해주세요."
            />

            {/* 비밀번호 찾기 링크 */}
            <div className="mb-[1.5rem] text-right">
              <a
                href="#"
                className="text-brand-primary pc:text-[0.9rem] tablet:text-[0.8rem] mobile:text-[0.7rem] font-medium underline underline-offset-2 hover:opacity-80"
              >
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </div>

          {/* 로그인 버튼 */}
          <Button
            size="large"
            variant="default"
            className="w-full pc:h-[3rem] tablet:h-[2.75rem] mobile:h-[2.5rem] bg-brand-primary text-white pc:text-[1rem] tablet:text-[0.9rem] mobile:text-[0.8rem] font-semibold rounded-[0.5rem] hover:opacity-90"
            onClick={() => {}}
          >
            로그인
          </Button>
        </form>

        {/* 가입하기 링크 */}
        <div className="text-center mt-6 text-text-primary pc:text-[0.9rem] tablet:text-[0.8rem] mobile:text-[0.7rem] font-medium">
          아직 계정이 없으신가요?{" "}
          <a
            href="/signup"
            className="text-brand-primary font-medium underline underline-offset-2 hover:opacity-80 ml-5"
          >
            가입하기
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;



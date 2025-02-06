import React from 'react';
import EmailInput from '@/_components/common/Input/EmailInput';
import PasswordInput from '@/_components/common/Input/PasswordInput';
import Input from '@/_components/common/Input/Input';
import Button from '@/_components/common/Button';

const SignupForm: React.FC = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value); // 임시 동작
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-full pc:mt-[10rem] pc:w-[28rem] tablet:mt-[8rem] tablet:w-[22rem] mobile:mt-[4rem] mobile:w-[18rem]">
      <div className="w-full flex flex-col gap-3">
        <h2 className="text-text-primary text-center mb-[3rem] pc:text-[3rem] pc:leading-[2.5rem] tablet:text-[1.5rem] tablet:leading-[2rem] mobile:text-[1.25rem] mobile:leading-[1.75rem] font-medium">
          회원가입
        </h2>

        <Input
          label="이름"
          value=""
          placeholder="이름을 입력해 주세요."
          id="name"
          onChange={handleInputChange}
          className="text-[1rem]"
        />
        <EmailInput
          label="이메일"
          value=""
          placeholder="이메일을 입력해 주세요."
          id="email"
          onChange={handleInputChange}
          className="text-[1rem]"
        />
        <PasswordInput
          value=""
          placeholder="비밀번호를 입력해 주세요."
          id="password"
          onChange={handleInputChange}
        />
        <PasswordInput
          value=""
          placeholder="비밀번호를 다시 한 번 입력해 주세요."
          id="confirmPassword"
          onChange={handleInputChange}
        />

        <Button
          className="w-full pc:h-[3rem] mt-3 mb-8 tablet:h-[2.75rem] mobile:h-[2.5rem] bg-brand-primary text-white pc:text-[1rem] tablet:text-[0.9rem] mobile:text-[0.8rem] font-semibold rounded-[0.5rem] hover:opacity-90"
          size="large"
          variant="default"
        >
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;



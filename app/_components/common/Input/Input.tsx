import React, { InputHTMLAttributes, useId, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  errorMessage?: string;
  isAllowSpace?: boolean;
  rightIcon?: React.ReactNode;
  onValidate?: (value: string) => string | undefined; // 추가 유효성 검사 함수
}

const Input: React.FC<InputProps> = ({
  label,
  value = '',
  onChange,
  placeholder,
  id,
  type = 'text',
  error: externalError,
  errorMessage: externalErrorMessage,
  isAllowSpace = true,
  rightIcon,
  onValidate, // 추가 유효성 검사 함수
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const [internalError, setInternalError] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (isAllowSpace && newValue.length > 1) {
      newValue = newValue.replace(/\s{2,}/g, ' '); // 공백 두 개 이상을 하나로 치환
    } else if (!isAllowSpace) {
      newValue = newValue.replace(/\s/g, ''); // 공백 제거
    }

    // 부모의 onChange 호출
    onChange?.({
      ...e,
      target: {
        ...e.target,
        value: newValue,
      },
    });

    // 추가 유효성 검사 수행
    if (onValidate) {
      const customError = onValidate(newValue);
      setInternalError(customError ?? undefined);
    } else {
      setInternalError(undefined);
    }
  };

  // 최종 에러 상태 (내부 에러 vs 외부에서 전달된 에러)
  const finalError = externalError ?? !!internalError;
  const finalErrorMessage = externalErrorMessage ?? internalError;

  return (
    <div className="flex flex-col mb-4 relative">
      <label htmlFor={inputId} className="mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`text-text-primary border-none
            ${finalError ? 'border-status-danger focus:ring-status-danger' : 'border-border-primary focus:ring-interaction-hover'}
            bg-background-secondary rounded-xl px-2.5 focus:outline-none focus:ring-2 
            placeholder:text-text-default w-full max-w-[28.75rem] h-[2.8125rem] lg:h-[3rem] 
            text-[1rem] lg:text-[1.125rem] ${rightIcon ? 'pr-12' : ''} // 오른쪽 아이콘 공간 확보
          `}
        />
        
        {/* 오른쪽 아이콘 */}
        {rightIcon && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>

      {/* 에러 메시지 */}
      {finalError && finalErrorMessage && (
        <span className="text-status-danger text-sm mt-1">{finalErrorMessage}</span>
      )}
    </div>
  );
};

export default Input;


















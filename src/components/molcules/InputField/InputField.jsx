import { useState } from 'react';
import {
  ErrorMessage,
  PasswordIcon,
  UserInfoInput,
  UserInfoLabel,
} from '@/components/atoms';

function InputField({
  id,
  label,
  type,
  required,
  placeholder,
  message,
  setUser,
  validateInput,
  passwordVisible,
  setPasswordVisible,
}) {
  const [error, setError] = useState({
    borderColor: 'border-greyscale-100',
    message: '',
  });
  return (
    <div className="flex flex-col gap-2">
      <UserInfoLabel id={id} label={label} />
      <div
        className={`flex h-12 items-center rounded-xl border bg-white ${error.borderColor}`}
      >
        <UserInfoInput
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
          message={message}
          setUser={setUser}
          validateInput={validateInput}
          setError={setError}
        />
        {label.includes('비밀번호') && (
          <PasswordIcon
            passwordVisible={passwordVisible}
            setPasswordVisible={setPasswordVisible}
          />
        )}
      </div>

      <ErrorMessage message={error.message} />
    </div>
  );
}

export default InputField;

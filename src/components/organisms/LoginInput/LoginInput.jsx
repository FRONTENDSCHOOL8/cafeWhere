import { InputField } from '@/components/molcules';
import { useState } from 'react';

const isEmail = (email) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  return emailRegex.test(email);
};

/* 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 */
const isPassword = (password) => {
  const passwordRegex =
    /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

  return passwordRegex.test(password);
};

function LoginInput() {
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <div className="mx-auto my-20 w-full min-w-320pxr max-w-620pxr px-6">
      <form className="flex flex-col gap-4">
        <InputField
          id="userEmail"
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          required
          message="이메일 형식에 맞게 입력해주세요."
          setUser={setUserEmail}
          validateInput={isEmail}
        />
        <InputField
          id="userPassword"
          label="비밀번호"
          type={PasswordVisible ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          required
          message="특수문자를 포함하여 8~15자 이내로 입력해주세요."
          setUser={setUserPassword}
          validateInput={isPassword}
          passwordVisible={PasswordVisible}
          setPasswordVisible={setPasswordVisible}
        />
      </form>
    </div>
  );
}

export default LoginInput;

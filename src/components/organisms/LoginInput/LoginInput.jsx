import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import { InputField } from '@/components/molecules';
import { useLoginStore, useUserIdStore } from '@/store/useLoginStore';
import { useTabStore } from '@/store/useTabStore';
import pb from '@/utils/pocketbase';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

// 아이디 : test@naver.com
// 비밀번호 : test123@

function LoginInput() {
  const [PasswordVisible, setPasswordVisible] = useState(false);
  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');

  const { activeTabState, setHome } = useTabStore();

  const navigate = useNavigate();

  const { setLogIn } = useLoginStore();

  const { UserId, setUserId } = useUserIdStore();

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const fetchCafeData = () => {
    // pb.collection('users').authWithPassword(
    //   `${emailRef.current}`,
    //   `${passwordRef.current}`
    // );

    // console.log(pb.authStore.isValid);
    // console.log(pb.authStore.token);
    // console.log(pb.authStore.model.id);

    pb.collection('users')
      .authWithPassword(`${emailRef.current}`, `${passwordRef.current}`)

      .then((result) => {
        sessionStorage.setItem('token', 'login');
        setHome();
        setLogIn();
        setUserId(pb.authStore.model.id);
        navigate('/main');
      })
      .catch((err) => {
        console.log(err);
        alert('이메일과 비밀번호를 다시 입력해주세요');
      });
  };

  const handleLoginSumit = (e) => {
    e.preventDefault();
    const { userEmail, userPassword } = e.target.elements;

    emailRef.current = userEmail.value;
    passwordRef.current = userPassword.value;

    console.log(`${emailRef.current}`, `${passwordRef.current}`);

    fetchCafeData();
  };

  return (
    <div className="mx-auto my-20 w-full px-6">
      <form className="flex flex-col gap-4 " onSubmit={handleLoginSumit}>
        <InputField
          id="userEmail"
          name="userEmail"
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          required
          message="이메일 형식에 맞게 입력해주세요."
          // setUser={setUserEmail}
          validateInput={isEmail}
        />
        <InputField
          id="userPassword"
          name="userPassword"
          label="비밀번호"
          type={PasswordVisible ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          required
          message="특수문자를 포함하여 8~15자 이내로 입력해주세요."
          // setUser={setUserPassword}
          validateInput={isPassword}
          passwordVisible={PasswordVisible}
          setPasswordVisible={setPasswordVisible}
        />
        <div className="mx-0 mb-40pxr mt-14">
          <LoginButton> 로그인 </LoginButton>
        </div>
      </form>
    </div>
  );
}

export default LoginInput;

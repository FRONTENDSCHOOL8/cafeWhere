import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import { InputField } from '@/components/molecules';
import { useTabStore } from '@/store';
import {
  useLoginStore,
  useUserDataStore,
  useUserIdStore,
} from '@/store/useLoginStore';
import pb from '@/utils/pocketbase';
import { useRef, useState } from 'react';

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

  const { setActiveTab } = useTabStore();

  const { setLogIn } = useLoginStore();

  const { setUserId } = useUserIdStore();

  const { userDataState, setUserData } = useUserDataStore();

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleUserId = async (id) => {
    await pb
      .collection('users')
      .getOne(id)
      .then((view) => {
        console.log('현재 정보', view);
        setUserData(view);
        console.log(userDataState);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCafeData = () => {
    pb.collection('users')
      .authWithPassword(`${emailRef.current}`, `${passwordRef.current}`)

      .then((result) => {
        sessionStorage.setItem('token', 'login');
        setActiveTab('home');
        setLogIn();
        setUserId(pb.authStore.model.id);
        handleUserId(pb.authStore.model.id);
        history.back(-2);
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

    fetchCafeData();
  };

  return (
    <div className="mx-auto mt-10 w-full px-6 text-sm">
      <form className="flex flex-col gap-4" onSubmit={handleLoginSumit}>
        <InputField
          id="userEmail"
          name="userEmail"
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          required
          message="이메일 형식에 맞게 입력해주세요."
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
          validateInput={isPassword}
          passwordVisible={PasswordVisible}
          setPasswordVisible={setPasswordVisible}
        />
        <div className="mx-0 my-8">
          <LoginButton>로그인</LoginButton>
        </div>
      </form>
    </div>
  );
}

export default LoginInput;

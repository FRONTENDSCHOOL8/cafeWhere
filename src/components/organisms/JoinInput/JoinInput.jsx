import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import { InputField } from '@/components/molecules';
import pb from '@/utils/pocketbase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckBox from '../CheckBox/JoinInputCheckBox';

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
const isPhone = (phone) => {
  const phoneRegex = /^[0-9]{10,11}$/;

  return phoneRegex.test(phone);
};
const isBirth = (birth) => {
  const birthRegex = /^[0-9]{6,8}$/;

  return birthRegex.test(birth);
};

const isText = (text) => {
  return text;
};

function JoinInput() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    emailVisibility: true,
    password: '',
    passwordConfirm: '',
    nickname: '',
    birth: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    pb.collection('users')
      .create(userInfo)
      .then(() => {
        alert('회원 가입 완료 했습니다');
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        alert('정보 입력이 잘못 되었습니다');
      });
  };

  return (
    <div className="mx-auto mt-2 w-full min-w-375pxr max-w-680pxr px-6">
      <form className="flex flex-col gap-4">
        <InputField
          id="userEmail"
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          required
          message="이메일 형식에 맞게 입력해주세요."
          setUser={(value) =>
            setUserInfo({
              ...userInfo,
              email: value,
            })
          }
          validateInput={isEmail}
        />
        <InputField
          id="userPassword"
          label="비밀번호"
          type={passwordVisible ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          required
          message="특수문자를 포함하여 8~15자 이내로 입력해주세요."
          setUser={(value) =>
            setUserInfo({
              ...userInfo,
              password: value,
            })
          }
          validateInput={isPassword}
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
        />
        <InputField
          id="userPasswordChecked"
          label="비밀번호 재확인"
          type={confirmPasswordVisible ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          required
          message="비밀번호를 한 번 더 입력해주세요."
          setUser={(value) =>
            setUserInfo({
              ...userInfo,
              passwordConfirm: value,
            })
          }
          validateInput={isPassword}
          passwordVisible={confirmPasswordVisible}
          setPasswordVisible={setConfirmPasswordVisible}
        />
        <InputField
          id="userName"
          label="이름"
          type="text"
          placeholder="영어로 이름을 입력해주세요."
          setUser={(value) =>
            setUserInfo({
              ...userInfo,
              username: value,
            })
          }
          validateInput={isText}
        />
        <InputField
          id="userNickname"
          label="닉네임"
          type="text"
          placeholder="닉네임을 입력해주세요."
          setUser={(value) =>
            setUserInfo({
              ...userInfo,
              nickname: value,
            })
          }
          validateInput={isText}
        />
        <InputField
          id="userPhone"
          label="휴대전화"
          type="text"
          placeholder="- 제외하고 번호 입력"
          message="번호를 제대로 입력해주세요."
          setUser={(value) =>
            setUserInfo({
              ...userInfo,
              phone: value,
            })
          }
          validateInput={isPhone}
        />
        <InputField
          id="userBirth"
          label="생년월일"
          type="text"
          placeholder="YYYYMMDD"
          message="생년월일을 제대로 입력해주세요."
          setUser={(value) =>
            setUserInfo({
              ...userInfo,
              birth: value,
            })
          }
          validateInput={isBirth}
        />
        <div className="my-4 h-1pxr bg-greyscale-50"></div>
        <CheckBox />
        <div className="mb-10 mt-4" onClick={handleJoin}>
          <LoginButton>회원 가입</LoginButton>
        </div>
      </form>
    </div>
  );
}

export default JoinInput;

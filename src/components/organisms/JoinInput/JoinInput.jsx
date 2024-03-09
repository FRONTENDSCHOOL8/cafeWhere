import { InputField } from '@/components/molecules';
import { useState } from 'react';
import CheckBox from '../CheckBox/JoinInputCheckBox';
import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import { useNavigate } from 'react-router-dom';
import pb from '@/utils/pocketbase';

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
  const phoneRegex = /^\d{10,11}$/;

  return phoneRegex.test(phone);
};
const isBirth = (birth) => {
  const birthRegex =
    /^(?:19|20)\d{2}\/?(0[1-9]|1[0-2]|09)\/?(0[1-9]|[12][0-9]|3[01])$/;

  return birthRegex.test(birth);
};

const isText = (text) => {
  return text;
};

function JoinInput() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userInfo, setUserInfo] = useState({
    // userEmail: '',
    // userPassword: '',
    // userName: '',
    // userNickname: '',
    // userPhone: '',
    // userBirth: '',
    // "username": "test_username",
    // "email": "test@example.com",
    // "emailVisibility": true,
    // "password": "12345678",
    // "passwordConfirm": "12345678",
    // "nickname": "test",
    // "birth": "test",
    // "phone": "test"

    username: '',
    email: '',
    emailVisibility: true,
    password: '',
    passwordConfirm: '',
    nickname: '',
    birth: '',
    phone: '',
  });

  let data = {
    // email: userEmail,
    // emailVisibility: true,
    // password: userPassword,
    // passwordConfirm: userPassword,
    // nickname: 'test',
    // birth: 'test',
    // phone: 'test',

    username: 'test1234',
    email: userEmail,
    emailVisibility: true,
    password: userPassword,
    passwordConfirm: userPassword,
    nickname: 'test1234',
    birth: 'test1234',
    phone: '010-111-234',
  };

  const navigate = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    // console.log(data);
    console.log(userInfo);
    pb.collection('users')
      .create(userInfo)
      .then(() => {
        alert('회원 가입 완료 했습니다');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
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
          // setUser={setUserEmail}
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
          // setUser={setUserPassword}
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
          type={passwordVisible ? 'text' : 'password'}
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
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
        />
        <InputField
          id="userName"
          label="이름"
          type="text"
          placeholder="이름을 입력해주세요."
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
          setUser={(value) =>
            setUserInfo({
              ...userInfo,
              phone: value,
            })
          }
          validateInput={isText}
        />
        <InputField
          id="userBirth"
          label="생년월일"
          type="text"
          placeholder="YYYY / MM / DD"
          setUser={(value) =>
            setUserInfo({
              ...userInfo,
              birth: value,
            })
          }
          validateInput={isText}
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

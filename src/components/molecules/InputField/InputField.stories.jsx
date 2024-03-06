import PasswordIconConfig from '../../atoms/PasswordIcon/PasswordIcon.stories';
import UserInfoInputConfig from '../../atoms/UserInfoInput/UserInfoInput.stories';
import UserInfoLabelConfig from '../../atoms/UserInfoLabel/UserInfoLabel.stories';
import { isEmail, isPassword } from '../../organisms/LoginInput/LoginInput';
import InputField from './InputField';

export default {
  title: 'molecules/InputField',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'InputField은 입력 필드 컴포넌트입니다.',
    docs: {
      description: {
        component: [
          '- UserInfoInput, UserInfoLabel, PasswordIcon, ErrorMessage 아토믹 컴포넌트를 래핑하는 몰레큘 컴포넌트입니다.',
          '- `id`, `label`, `type`, `placeholder` 속성은 필수 입력입니다.',
        ].join('\n'),
      },
    },
  },
  args: {
    type: 'text',
    required: false,
    message: '',
    passwordVisible: false,
  },
  argTypes: {
    ...UserInfoInputConfig.argTypes,
    label: UserInfoLabelConfig.argTypes.label,
    ...PasswordIconConfig.argTypes,
  },
};

export const 이메일 = {
  args: {
    id: 'email',
    label: '이메일',
    type: 'email',
    placeholder: 'user@company.co.kr',
    message: '이메일 형식에 맞게 입력해주세요.',
    validateInput: isEmail,
  },
};

export const 패스워드 = {
  args: {
    id: 'password',
    label: '비밀번호',
    type: 'password',
    placeholder: '영어, 숫자, 특수문자 조합 8자리 이상 입력',
    message: '특수문자를 포함하여 8~15자 이내로 입력해주세요.',
    validateInput: isPassword,
  },
};

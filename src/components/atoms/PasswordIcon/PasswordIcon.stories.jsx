import PasswordIcon from './PasswordIcon';

export default {
  title: 'atoms/PasswordIcon',
  component: PasswordIcon,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'PasswordIcon은 패스워드 입력 필드에 표시될 아이콘 컴포넌트입니다.',
    docs: {
      description: {
        component: ['비밀번호 표시/감추기 모양 버튼입니다.'].join('\n'),
      },
    },
  },
  args: {
    passwordVisible: false,
    setPasswordVisible: () => {},
  },
  argTypes: {
    passwordVisible: {
      control: 'boolean',
      description: '패스워드 표시 여부',
      table: {
        type: {
          summary: 'boolean',
          required: true,
        },
      },
    },
    setPasswordVisible: {
      control: 'function',
      description: '패스워드 상태 변경 함수',
      table: {
        disable: true,
        type: {
          summary: 'function',
        },
      },
    },
  },
};

export const 패스워드_감춤 = {
  args: {
    passwordVisible: false,
  },
  parameters: {
    docs: {
      description: {
        story: '비밀번호 숨기기',
      },
    },
  },
};

export const 패스워드_표시 = {
  args: {
    passwordVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story: '비밀번호 표시',
      },
    },
  },
};

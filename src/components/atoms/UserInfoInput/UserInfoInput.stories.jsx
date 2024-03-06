import UserInfoInput from './UserInfoInput';

const INPUT_TYPES =
  'text password email password number tel url search color date time month week datetime-local range hidden file button checkbox image radio reset submit'.split(
    ' '
  );

export default {
  title: 'atoms/UserInfoInput',
  component: UserInfoInput,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'UserInfoInput은 사용자 정보 입력 컴포넌트입니다.',
    docs: {
      description: {
        component: [
          '- [\\<input\\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) 표준 요소를 래핑합니다.',
          '- `id` 속성은 필수 입력입니다.',
        ].join('\n'),
      },
    },
  },
  args: {
    placeholder: '내용을 입력하세요.',
    required: false,
  },
  argTypes: {
    id: {
      control: 'text',
      description: '고유 식별자',
      table: {
        type: {
          summary: 'string',
          required: true,
        },
      },
    },
    required: {
      control: 'boolean',
      description: '필수 입력',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    type: {
      control: 'select',
      description: '인풋 타입',
      options: INPUT_TYPES,
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    message: {
      control: 'text',
      description: '오류 메시지',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    validateInput: {
      control: 'function',
      description: '유효성 검사 함수',
      table: {
        disable: true,
        type: {
          summary: 'function',
        },
      },
    },
  },
};

export const 기본 = {
  args: {
    id: 'unique-id-1',
  },
};

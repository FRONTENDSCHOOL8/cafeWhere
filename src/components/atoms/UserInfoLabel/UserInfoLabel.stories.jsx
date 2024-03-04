import UserInfoLabel from './UserInfoLabel';

export default {
  title: 'atoms/UserInfoLabel',
  component: UserInfoLabel,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'UserInfoLabel은 사용자 정보 입력의 레이블 컴포넌트입니다.',
    docs: {
      description: {
        component: [
          '- [\\<label\\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) 표준 요소를 래핑합니다.',
          '- `id` 속성은 필수 입력입니다.',
        ].join('\n'),
      },
    },
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
    label: {
      control: 'text',
      description: '입력 레이블',
      table: {
        type: {
          summary: 'string',
          required: true,
        },
      },
    },
  },
};

export const 기본 = {
  args: {
    id: 'unique-id-1',
    label: '오늘 점심은 뭐 먹을까?',
  },
};

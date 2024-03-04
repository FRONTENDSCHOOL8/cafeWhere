import Divider from './Divider';

/**@type{import('@storybook/react').Meta} */
export default {
  title: 'atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Divider는 구분 메시지를 표시하는 컴포넌트입니다.',
    docs: {
      description: {
        component: '`children`으로 전달된 값이 구분 메시지로 설정됩니다.',
      },
    },
  },
  args: {
    children: '또는',
  },
  argTypes: {
    children: {
      control: 'text',
      description: '구분선 (텍스트 포함)',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

/**@type{import('@storybook/react').StoryObj} */
export const 기본표시 = {};
export const 메시지_변경 = {
  args: {
    children: '그리고',
  },
  parameters: {
    docs: {
      description: {
        story: '`children` 속성으로 전달된 값이 표시할 메시지가 됩니다.',
      },
    },
  },
};

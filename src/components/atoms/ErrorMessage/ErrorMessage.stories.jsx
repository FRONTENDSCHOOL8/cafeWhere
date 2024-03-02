import ErrorMessage from './ErrorMessage';

export default {
  title: 'atoms/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'ErrorMessage는 오류 메시지 표시 컴포넌트입니다.',
    docs: {
      description: {
        component: [
          '- `as`는 기본적으로 \\<span\\> 요소로 렌더링됩니다.',
          '- `as` 속성을 사용해 DOM에 적용될 요소를 변경할 수 있습니다.',
        ].join('\n'),
      },
    },
  },
  args: {
    children: '⚠️ 렌더링 오류',
  },
  argTypes: {
    as: {
      control: 'select',
      description: '오류 메시지 표시 요소',
      options: ['span', 'div', 'p', 'strong'],
      table: {
        type: {
          summary: 'string',
          required: true,
        },
      },
    },
    message: {
      control: 'text',
      description: '오류 메시지 표시',
      table: {
        type: {
          summary: 'string',
          required: true,
        },
      },
    },
  },
};

export const 기본 = {};

export const 메시지_변경 = {
  args: {
    message: '이런... 문제가 발생했습니다. 😳',
  },
  parameters: {
    docs: {
      description: {
        story: 'message 속성으로 전달된 메시지가 화면에 표시됩니다.',
      },
    },
  },
};

export const 요소_변경 = {
  args: {
    as: 'strong',
    message: '☢️ 심각성을 의미하는 <strong> 요소로 변경되었습니다.',
  },
  parameters: {
    docs: {
      description: {
        story: '`as` 속성을 지정해 렌더링 할 요소를 변경할 수 있습니다.',
      },
    },
  },
};

import { userEvent, within } from '@storybook/testing-library';

import LoginInput from './LoginInput';

export default {
  title: 'organisms/LoginInput',
  component: LoginInput,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'LoginInput은 로그인 입력 필드 컴포넌트입니다.',
    docs: {
      description: {
        component:
          'InputField 몰레큘 컴포넌트를 래핑하는 올가니즘 컴포넌트입니다.',
      },
    },
  },
};

export const 로그인_인풋 = {};

export const 로그인_인풋_플레이 = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText('이메일', {
      selector: 'input',
    });

    await userEvent.type(emailInput, 'yamoo9@naver.com', {
      delay: 100,
    });

    const passwordInput = canvas.getByLabelText('비밀번호', {
      selector: 'input',
    });

    await userEvent.type(passwordInput, 'qwerty@!23', {
      delay: 100,
    });

    const passwordToggleButton = canvas.getByRole('button');

    await userEvent.click(passwordToggleButton, {
      delay: 300,
    });

    await userEvent.click(passwordToggleButton, {
      delay: 500,
    });
  },
};

import HeaderSwiper from '@/components/HeaderSwiper/HeaderSwiper';
import { MainHeader } from '@/components/atoms';
import JoinPage from '@/pages/JoinPage/JoinPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import SelectLoginPage from '@/pages/SelectLoginPage/SelectLoginPage';

const navigationItems = [
  {
    id: 'login',
    path: '/login',
    text: '로그인 페이지',
    element: <LoginPage />,
  },
  {
    id: 'join',
    path: '/join',
    text: '회원가입 페이지 바로가기',
    element: <JoinPage />,
  },
  {
    id: 'test',
    path: '/test',
    text: '테스트용 탭바',
    element: <HeaderSwiper />,
  },
  {
    id: 'selectlogin',
    path: '/',
    text: '이메일 로그인과 소셜 로그인',
    element: <SelectLoginPage />,
  },
];

export default navigationItems;

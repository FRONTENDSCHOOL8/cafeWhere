import HeaderSwiper from '@/components/HeaderSwiper/HeaderSwiper';
import { MainHeader } from '@/components/atoms';
import JoinPage from '@/pages/JoinPage/JoinPage';
import LoginPage from '@/pages/LoginPage/LoginPage';

const navigationItems = [
  {
    id: 'login',
    path: '/',
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
];

export default navigationItems;

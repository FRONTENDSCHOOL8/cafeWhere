import HeaderSwiper from '@/components/HeaderSwiper/HeaderSwiper';
import { MainHeader } from '@/components/atoms';
import DetailPage from '@/pages/DetailPage/DetailPage';
import JoinPage from '@/pages/JoinPage/JoinPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import MainPage from '@/pages/MainPage/MainPage';
import SearchRegionList from '@/pages/SearchRegionList/SearchRegionList';
import MyPage from '@/pages/MyPage/MyPage';
import SelectLoginPage from '@/pages/SelectLoginPage/SelectLoginPage';
// import NoReview from '@/components/DetailReviewList/NoReview';

const navigationItems = [
  {
    id: 'searchRegionList',
    path: '/region',
    text: '지역검색 페이지',
    element: <SearchRegionList />,
  },
  {
    id: 'detail',
    path: '/detail/:id',
    text: '로그인 페이지',
    element: <DetailPage />,
  },
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
  {
    id: 'main',
    path: '/main',
    text: '메인 페이지 바로가기',
    element: <MainPage />,
  },
  // {
  //   id: 'NoReview',
  //   path: '/test2',
  //   text: '리뷰없음 작성하기',
  //   element: <NoReview />,
  // },
  // {
  //   id: 'review',
  //   path: '/review',
  //   text: '리뷰페이지 작성하기',
  //   element: <Review />,
  // },
  {
    id: 'mypage',
    path: '/mypage',
    text: '프로필 페이지 바로가기',
    element: <MyPage />,
  },
];

export default navigationItems;

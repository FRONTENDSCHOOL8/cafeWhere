import {
  CafeListPage,
  DetailPage,
  HashResultPage,
  HashSearchPage,
  JoinPage,
  LoginPage,
  MainPage,
  MyPage,
  MyWishPage,
  ReviewPage,
  SearchRegionList,
  SelectLoginPage,
  SearchPage,
} from '@/pages';
import MyReviewPage, {
  loader as rvLoder,
} from '@/pages/MyReviewPage/MyReviewPage';

const navigationItems = [
  {
    id: 'main',
    path: '/',
    text: '메인 페이지 바로가기',
    element: <MainPage />,
  },
  {
    id: 'selectlogin',
    path: '/selectLogin',
    text: '이메일 로그인과 소셜 로그인',
    element: <SelectLoginPage />,
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
    id: 'searchRegionList',
    path: '/region',
    text: '지역검색 페이지',
    element: <SearchRegionList />,
  },
  {
    id: 'detail',
    path: '/detail/:id',
    text: '카페 상세 페이지',
    element: <DetailPage />,
  },
  {
    id: 'cafe',
    path: '/cafeList/:keyword',
    text: '카페리스트 페이지',
    element: <CafeListPage />,
  },
  {
    id: 'hashSearch',
    path: '/hashSearch',
    text: '해시태그 검색 페이지 바로가기',
    element: <HashSearchPage />,
  },
  {
    id: 'hashSearchResult',
    path: '/hash',
    text: '해시태그 검색 결과 페이지',
    element: <HashResultPage />,
  },
  {
    id: 'myWish',
    path: '/myWish',
    text: '찜목록 페이지 바로가기',
    element: <MyWishPage />,
  },
  {
    id: 'review',
    path: '/review',
    text: '리뷰 페이지 바로가기',
    element: <ReviewPage />,
  },
  {
<<<<<<< HEAD
    id: 'search',
    path: '/search',
    text: '검색 페이지 바로가기',
    element: <SearchPage />,
  },
  {
    id: 'mypage',
    path: '/mypage',
    text: '프로필 페이지 바로가기',
    element: <MyPage />,

    // loader: reviewLoder,

    // loader: async () => {
    //   // 비동기 호출 코드 작성
    //   return await pb.collection('review').getList(1, 2, {
    //     sort: '-created',
    //   });
    // },
  },

  {
=======
>>>>>>> develop
    id: 'myreview',
    path: '/myreview',
    text: '내가 쓴 리뷰',
    element: <MyReviewPage />,

    loader: rvLoder,
  },
  {
    id: 'mypage',
    path: '/mypage',
    text: '프로필 페이지 바로가기',
    element: <MyPage />,
  },
];

export default navigationItems;

import CheckBox from './components/organisms/CheckBox/JoinInputCheckBox';
// import CheckBox from './components/atoms/CheckBox/LastCheckBox.jsx';
import HeaderBar from './components/atoms/HeaderBar/HeaderBar';
import HeaderSwiper from './components/HeaderSwiper/HeaderSwiper';
import Preparing from './pages/Preparing/Preparing';
import { LoginInput } from './components/organisms';
import MainHeader from './components/atoms/MainHeader/MainHeader';
import TabBar from './components/atoms/TabBar/TabBar';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import router from './routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import SwiperCafeList from './components/SwiperCafeList/SwiperCafeList';
import PreparingItem from './components/PreparingItem/PreparingItem';
import CategoryCafeList from './components/SwiperCafeList/CategoryCafeList';
import NoReview from './components/organisms/DetailReviewList/NoReview';
import { RouterProvider } from 'react-router-dom';
import CategoryListName from './components/SwiperCafeList/CategoryListName';
import CafeListItem from './components/organisms/CafeListItem/CafeListItem';
import ReviewList from './components/organisms/DetailReviewList/ReviewList';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 10,
    },
  },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      {/* <RouterProvider router={router} /> */}
      <CategoryListName>노트북하기 최적화?!</CategoryListName>
      <SwiperCafeList />
      <CategoryCafeList />
      <ReviewList />
      {/* <CafeListItem /> */}
      {/* <PreparingItem /> */}
      {/* <NoReview /> */}
    </div>
  );
}

export default App;

import CheckBox from './components/organisms/CheckBox/JoinInputCheckBox';
// import CheckBox from './components/atoms/CheckBox/LastCheckBox.jsx';
import HeaderBar from './components/atoms/HeaderBar/HeaderBar';
import HeaderSwiper from './components/HeaderSwiper/HeaderSwiper';
import Preparing from './pages/Preparing/Preparing';
import { LoginInput } from './components/organisms';
import MainHeader from './components/atoms/MainHeader/MainHeader';
import TabBar from './components/atoms/TabBar/TabBar';
import LoginPage from './pages/LoginPage/LoginPage';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import SwiperCafeList from './components/SwiperCafeList/SwiperCafeList';
import PreparingItem from './components/PreparingItem/PreparingItem';
import CategoryCafeList from './components/SwiperCafeList/CategoryCafeList';
import NoReview from './components/DetailReviewList/NoReview';

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      {/* <SwiperCafeList /> */}
      {/* <PreparingItem /> */}
      {/* <CategoryCafeList /> */}
      <NoReview />
    </div>
  );
}

export default App;

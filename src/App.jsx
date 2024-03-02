import CheckBox from './components/organisms/CheckBox/JoinInputCheckBox';
// import CheckBox from './components/atoms/CheckBox/LastCheckBox.jsx';
import HeaderBar from './components/atoms/HeaderBar/HeaderBar';
import HeaderSwiper from './components/HeaderSwiper/HeaderSwiper';
import Preparing from './pages/Preparing/Preparing';
import { LoginInput } from './components/organisms';
import MainHeader from './components/atoms/MainHeader/MainHeader';
import TabBar from './components/atoms/TabBar/TabBar';
import CategoryCafeList from './components/SwiperCafeList/CategoryCafeList';

function App() {
  return (
    <div>
      <CategoryCafeList />
    </div>
  );
}

export default App;

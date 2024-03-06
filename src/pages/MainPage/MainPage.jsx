import HeaderSwiper from '@/components/HeaderSwiper/HeaderSwiper';
import { MainHeader, TabBar } from '@/components/atoms';

function MainPage() {
  const [region, setRegion] = useState('종로구');

  return (
    <div>
      <div className="h-screen ">
        <div className="mx-auto h-full w-full min-w-375pxr max-w-680pxr bg-white">
          <MainHeader />

          <HeaderSwiper />
        </div>

        <TabBar />
      </div>
    </div>
  );
}

export default MainPage;

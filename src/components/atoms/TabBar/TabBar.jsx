import { useTabStore } from '@/store';
import { Link } from 'react-router-dom';

function TabBar() {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <div className="fixed bottom-0 z-50 flex h-88pxr w-full items-center justify-around rounded-t-[32px]  bg-stone-700 ">
      <div onClick={() => setActiveTab('home')}>
        <Link to="/">
          <img
            src={
              activeTab === 'home'
                ? '/images/main/tabbar/home-r.svg'
                : '/images/main/tabbar/home-w.svg'
            }
          />
        </Link>
      </div>

      <div onClick={() => setActiveTab('cafeicon')}>
        <Link to="/hashSearch">
          <img
            src={
              activeTab === 'cafeicon'
                ? '/images/main/tabbar/cafeicon-r.svg'
                : '/images/main/tabbar/cafeicon-w.svg'
            }
          />
        </Link>
      </div>

      <div onClick={() => setActiveTab('review')}>
        <Link to="/myreview">
          <img
            src={
              activeTab === 'review'
                ? '/images/main/tabbar/review-r.svg'
                : '/images/main/tabbar/review-w.svg'
            }
          />
        </Link>
      </div>

      <div onClick={() => setActiveTab('wish')}>
        <Link to="/myWish">
          <img
            src={
              activeTab === 'wish'
                ? '/images/main/tabbar/wish-r.svg'
                : '/images/main/tabbar/wish-w.svg'
            }
          />
        </Link>
      </div>

      <div onClick={() => setActiveTab('myicon')}>
        <Link to="/mypage">
          <img
            src={
              activeTab === 'myicon'
                ? '/images/main/tabbar/myicon-r.svg'
                : '/images/main/tabbar/myicon-w.svg'
            }
          />
        </Link>
      </div>
    </div>
  );
}

export default TabBar;

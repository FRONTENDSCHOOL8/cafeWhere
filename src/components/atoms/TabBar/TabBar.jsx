import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TabBar() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex justify-center">
      <div className="fixed bottom-0 z-50 flex h-88pxr w-full min-w-320pxr max-w-620pxr items-center justify-around rounded-t-[32px] bg-black shadow-lg">
        <div onClick={() => setActiveTab('home')}>
          <Link to="/main">
            <img
              src={
                activeTab === 'home'
                  ? '/images/main/tabbar/home-r.svg'
                  : '/images/main/tabbar/home-b.svg'
              }
            />
          </Link>
        </div>

        <div onClick={() => setActiveTab('cafeicon')}>
          <img
            src={
              activeTab === 'cafeicon'
                ? '/images/main/tabbar/cafeicon-r.svg'
                : '/images/main/tabbar/cafeicon-b.svg'
            }
          />
        </div>

        <div onClick={() => setActiveTab('review')}>
          <img
            src={
              activeTab === 'review'
                ? '/images/main/tabbar/review-r.svg'
                : '/images/main/tabbar/review-b.svg'
            }
          />
        </div>

        <div onClick={() => setActiveTab('wish')}>
          <img
            src={
              activeTab === 'wish'
                ? '/images/main/tabbar/wish-r.svg'
                : '/images/main/tabbar/wish-b.svg'
            }
          />
        </div>

        <div onClick={() => setActiveTab('myicon')}>
          <img
            src={
              activeTab === 'myicon'
                ? '/images/main/tabbar/myicon-r.svg'
                : '/images/main/tabbar/myicon-b.svg'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TabBar;

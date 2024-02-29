import React, { useState } from 'react';

function TabBar() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div>
      <div className="flex h-88pxr min-w-375pxr max-w-680pxr items-center justify-around rounded-t-[32px] bg-white">
        <div onClick={() => setActiveTab('home')}>
          <img
            src={
              activeTab === 'home'
                ? '/images/main/tabbar/home-r.svg'
                : '/images/main/tabbar/home-b.svg'
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

        <div onClick={() => setActiveTab('cafeicon')}>
          <img
            src={
              activeTab === 'cafeicon'
                ? '/images/main/tabbar/cafeicon-r.svg'
                : '/images/main/tabbar/cafeicon-b.svg'
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

        <div onClick={() => setActiveTab('review')}>
          <img
            src={
              activeTab === 'review'
                ? '/images/main/tabbar/review-r.svg'
                : '/images/main/tabbar/review-b.svg'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TabBar;

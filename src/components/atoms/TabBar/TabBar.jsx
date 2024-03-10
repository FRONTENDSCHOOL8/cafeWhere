import { useTabStore } from '@/store';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TabBar() {
  const { activeTabState, setHome, setCafe, setReview, setWish, setMyicon } =
    useTabStore();
  return (
    <div className="fixed bottom-0 z-50 flex h-88pxr w-full min-w-375pxr max-w-680pxr items-center justify-around rounded-t-[32px]  bg-stone-700 shadow-lg">
      <div onClick={setHome}>
        <Link to="/main">
          <img
            src={
              activeTabState === 'home'
                ? '/images/main/tabbar/home-r.svg'
                : '/images/main/tabbar/home-b.svg'
            }
          />
        </Link>
      </div>

      <div onClick={setCafe}>
        <Link to="/hashSearch">
          <img
            src={
              activeTabState === 'cafeicon'
                ? '/images/main/tabbar/cafeicon-r.svg'
                : '/images/main/tabbar/cafeicon-b.svg'
            }
          />
        </Link>
      </div>

      <div onClick={setReview}>
        <Link to="/myreview">
          <img
            src={
              activeTabState === 'review'
                ? '/images/main/tabbar/review-r.svg'
                : '/images/main/tabbar/review-b.svg'
            }
          />
        </Link>
      </div>

      <div onClick={setWish}>
        <Link to="/myWish">
          <img
            src={
              activeTabState === 'wish'
                ? '/images/main/tabbar/wish-r.svg'
                : '/images/main/tabbar/wish-b.svg'
            }
          />
        </Link>
      </div>

      <div onClick={setMyicon}>
        <Link to="/mypage">
          <img
            src={
              activeTabState === 'myicon'
                ? '/images/main/tabbar/myicon-r.svg'
                : '/images/main/tabbar/myicon-b.svg'
            }
          />
        </Link>
      </div>
    </div>
  );
}

export default TabBar;

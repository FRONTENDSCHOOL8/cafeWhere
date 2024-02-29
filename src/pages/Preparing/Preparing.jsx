import HeaderBar from '@/components/atoms/HeaderBar/HeaderBar';
import PreparingItem from '@/components/PreparingItem/PreparingItem';
import React from 'react';

function Preparing() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <HeaderBar name={'돌아가기'} showHomeBtn={false} />
        <PreparingItem />
      </div>
    </div>
  );
}

export default Preparing;

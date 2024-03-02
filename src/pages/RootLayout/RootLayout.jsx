import { TabBar } from '@/components/atoms';
import React from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <Outlet />
      <TabBar />
    </div>
  );
}

export default RootLayout;

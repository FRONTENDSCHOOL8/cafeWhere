// CafeInfoTab.js
import { useState } from 'react';
import TabButton from '../TabButton/TabButton';

function CafeInfoTab() {
  const [activeTab, setActiveTab] = useState('info');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center text-15pxr">
      <TabButton
        active={activeTab === 'info'}
        onClick={() => handleTabClick('info')}
      >
        정보
      </TabButton>
      <TabButton
        active={activeTab === 'review'}
        onClick={() => handleTabClick('review')}
      >
        리뷰
      </TabButton>
    </div>
  );
}

export default CafeInfoTab;

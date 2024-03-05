import { useState } from 'react';

function CafeInfoTab() {
  const [activeTab, setActiveTab] = useState('info'); // 초기값으로 'info' 탭을 활성화

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center text-15pxr">
      <button
        className={`w-full rounded-t-lg border border-l border-r border-t border-[#999] bg-white px-4 py-3 text-center leading-5
        ${activeTab === 'info' ? 'border-b-0' : ''}`}
        onClick={() => handleTabClick('info')}
      >
        정보
      </button>
      <button
        className={`w-full rounded-t-lg border border-l border-r border-t border-[#999] bg-white px-4 py-3 text-center leading-5
        ${activeTab === 'review' ? 'border-b-0' : ''}`}
        onClick={() => handleTabClick('review')}
      >
        리뷰
      </button>
    </div>
  );
}

export default CafeInfoTab;

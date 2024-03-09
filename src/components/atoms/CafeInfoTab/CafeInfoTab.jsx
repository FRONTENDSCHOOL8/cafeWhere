// CafeInfoTab.js
import TabButton from '../TabButton/TabButton';
import { useActiveTabStore } from '@/store';

function CafeInfoTab() {
  const { activeTab, setActiveTab } = useActiveTabStore();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex text-15pxr">
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

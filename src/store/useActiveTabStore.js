import { create } from 'zustand';

const useActiveTabStore = create((set) => ({
  activeTab: 'info',
  setActiveTab: (newActiveTab) => set({ activeTab: newActiveTab }),
}));
export default useActiveTabStore;

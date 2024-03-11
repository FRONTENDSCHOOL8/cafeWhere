import { create } from 'zustand';

const useTabStore = create((set) => ({
  activeTab: 'home',

  setActiveTab: (newActiveTab) => set({ activeTab: newActiveTab }),
}));

export default useTabStore;

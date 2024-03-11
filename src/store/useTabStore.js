import { create } from 'zustand';

const initialState = {};

const useTabStore = create((set) => ({
  activeTabState: 'home',

  setHome: () => set((state) => ({ activeTabState: 'home' })),
  setCafe: () => set((state) => ({ activeTabState: 'cafeicon' })),
  setReview: () => set((state) => ({ activeTabState: 'review' })),
  setWish: () => set((state) => ({ activeTabState: 'wish' })),
  setMyicon: () => set((state) => ({ activeTabState: 'myicon' })),
  setTabState: (tab) => set((state) => ({ activeTabState: tab })),
}));

export default useTabStore;

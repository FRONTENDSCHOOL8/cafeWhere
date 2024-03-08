import { create } from 'zustand';

const useCafeListStore = create((set) => ({
  cafeList: {},
  setCafeList: (newCafeList) => set({ cafeList: newCafeList }),
}));
export default useCafeListStore;

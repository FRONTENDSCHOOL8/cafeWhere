import { create } from 'zustand';

const useSearchCafeListStore = create((set) => ({
  searchCafeList: [],
  setSearchCafeList: (newSearchCafe) => set({ searchCafeList: newSearchCafe }),
}));
export default useSearchCafeListStore;

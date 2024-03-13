import { create } from 'zustand';

const useSearchTermStore = create((set) => ({
  searchTerm: '',

  setSearchTerm: (newSearchTerm) => set({ searchTerm: newSearchTerm }),
}));

export default useSearchTermStore;

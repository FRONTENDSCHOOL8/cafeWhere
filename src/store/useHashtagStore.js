import { create } from 'zustand';

const useHashtagStore = create((set) => ({
  hashtag: [],
  setHashtag: (newHashtag) => set({ hashtag: newHashtag }),
  searchHashtag: { item: [] },
  setSearchHashtag: (newSearchHashtag) =>
    set(() => ({ searchHashtag: newSearchHashtag })),
}));
export default useHashtagStore;

import { create } from 'zustand';

const useHashtagStore = create((set) => ({
  hashtag: [],
  setHashtag: (newHashtag) => set({ hashtag: newHashtag }),
}));
export default useHashtagStore;

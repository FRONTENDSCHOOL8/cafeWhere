import { create } from 'zustand';

const useWordStore = create((set) => ({
  words: [],

  setWords: (newWords) => set({ words: newWords }),
}));

export default useWordStore;

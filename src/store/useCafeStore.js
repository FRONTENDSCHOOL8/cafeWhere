import { create } from 'zustand';

const useCafeStore = create((set) => ({
  cafe: null,
  setCafe: (newCafe) => set({ cafe: newCafe }),
}));
export default useCafeStore;

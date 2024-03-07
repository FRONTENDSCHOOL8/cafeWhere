import { create } from 'zustand';

const useRegionStore = create((set) => ({
  region: '종로구',
  setRegion: (newRegion) => set({ region: newRegion }),
}));
export default useRegionStore;

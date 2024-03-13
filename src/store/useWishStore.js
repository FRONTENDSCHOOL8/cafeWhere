import { create } from 'zustand';

const useWishStore = create((set) => ({
  WishList: [],

  setWish: (wish) => set((state) => ({ WishList: [...state.WishList, wish] })),
}));

export default useWishStore;

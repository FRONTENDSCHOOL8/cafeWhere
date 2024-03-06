import { create } from 'zustand';

const initialState = {};

export const useLoginStore = create((set) => ({
  loginState: false,

  setLogIn: () => set((state) => ({ loginState: true })),
  setLogOut: () => set((state) => ({ loginState: false })),
  setLogState: (isState) => set((state) => ({ loginState: isState })),
}));

export const useUserIdStore = create((set) => ({
  UserId: '',

  setUserId: (id) => set((state) => ({ UserId: id })),
  setDeleteUserId: (id) => set((state) => ({ UserId: '' })),
}));

import { create } from 'zustand';

const userDataState = {};

export const useLoginStore = create((set) => ({
  loginState: false,

  setLogIn: () => set((state) => ({ loginState: true })),
  setLogOut: () => set((state) => ({ loginState: false })),
  setLogState: (isState) => set((state) => ({ loginState: isState })),
}));

export const useUserDataStore = create((set) => ({
  userDataState: {},

  setUserData: (data) =>
    set((state) => ({ userDataState: { ...state.userDataState, ...data } })),
  setDeleteUserId: (id) => set((state) => ({ UserId: '' })),
}));

export const useUserIdStore = create((set) => ({
  UserId: '',

  setUserId: (id) => set((state) => ({ UserId: id })),
  setDeleteUserId: (id) => set((state) => ({ UserId: '' })),
}));

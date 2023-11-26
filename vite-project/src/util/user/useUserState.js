import { create } from "zustand";

const useUserState = create((set) => ({
    isLogined: false,
    userId: null,
    userPw: null,
    setLogin: () => set({isLogined: true}),
    setUserId: () => set(state => ({userId: }))
}))
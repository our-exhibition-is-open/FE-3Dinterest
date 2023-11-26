import { create } from "zustand";

export const useUserStore = create((set) => ({
    isLoggedIn: false,
    userId: "",
    loginUser: (Id) => set({isLoggedIn: true, userId: Id}),
    logoutUser: () => set({isLoggedIn: false, userId: ""})
}))
import { create } from "zustand";

export const useUploadImageStore = create((set) => ({
  image: "",
  setImage: (data) => {
    set({ image: data });
  },
}));

import { create } from "zustand";

export const useUploadStore = create((set) => ({
  file: null,
  thumbnailImage: "",
  title: "",
  userId: sessionStorage.getItem("userId"),
  setFile: (file) => set({ file: file }),
  setThumbnailImage: (image) => set({ thumbnailImage: image }),
  setTitle: (title) => set({ title: title }),
  setUserId: (userId) => set({ userId: userId }),
  resetUploadStore: () =>
    set({ file: null, thumbnailImage: "", title: "", userId: "" }),
}));

export const useGageLevelStore = create((set) => ({
  gageLevel: "Nothing", //upload페이지에서 단계별 게이지 수의 상태를 나타낸다. "Nothing", "FirstStep" : file upload 인풋 활성화, "LastStep" : Input upload 버튼 활성화
  setFileGage: () => set({ gageLevel: "FirstStep" }),
  setInputGage: () => set({ gageLevel: "LastStep" }),
  resetGageStore: () => set({ gageLevel: "Nothing"}),
}));

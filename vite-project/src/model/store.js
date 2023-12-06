import { create } from "zustand";

export const useUploadStore = create((set) => ({
  file: null,
  thumbnailImage: "",
  title: "",
  userId: sessionStorage.getItem("userId"),
  uploadState: false,
  setFile: (file) => set({ file: file }),
  setThumbnailImage: (image) => set({ thumbnailImage: image }),
  setTitle: (title) => set({ title: title }),
  setUserId: (userId) => set({ userId: userId }),
  setUploadState: (uploadState) => set({uploadState: uploadState}),
  resetUploadStore: () =>
    set({ file: null, thumbnailImage: "", title: "", userId: "", uploadState: false }),
}));

export const useLoadedModel = create((set) => ({
  fileUrl: "",
  file: null,
  type: "",
  setFileName: (fileUrl) => set({fileUrl: fileUrl}),
  setFile: (file) => set({file: file}),
  setType: (fileType) => set({type: fileType}),
  resetLoadedModel: () => set({fileUrl: "", file: null, type: ""})
}))

import { create } from 'zustand'

export const useModalStore = create((set) => ({
  activeModal: null,
  modalData: null,
  openModal: (id, data = null) => set({ activeModal: id, modalData: data }),
  closeModal: () => set({ activeModal: null, modalData: null }),
}))

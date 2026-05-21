import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/** Ready for future preferences; brand colors stay fixed per design system. */
export const useThemeStore = create(
  persist(
    (set) => ({
      reducedMotion: false,
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
    }),
    { name: 'astha-theme' },
  ),
)

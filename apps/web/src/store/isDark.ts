import create from "zustand";
import { persist } from "zustand/middleware";

type IsDarkState = {
  isDark: boolean;
  toggleDark: () => void;
};

const useIsDarkStore = create<IsDarkState>()(
  persist(
    (set) => ({
      isDark: false,
      toggleDark: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: "isDark",
    }
  )
);

export default useIsDarkStore;

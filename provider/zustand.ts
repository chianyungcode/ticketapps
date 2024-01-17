import { useSignUp } from "@clerk/nextjs";
import { create } from "zustand";

interface CodeState {
  code: string;
  setCode: (code: string) => void;
}

interface ActiveState {
  active: boolean;
  setActive: (active: boolean) => void;
}

export const useCodeStore = create<CodeState>((set) => ({
  code: "",
  setCode: (code) => set({ code }),
}));

export const useActiveStore = create<ActiveState>((set) => ({
  active: false,
  setActive: (active) => set({ active }),
}));

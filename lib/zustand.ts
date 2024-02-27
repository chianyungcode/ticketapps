import { create } from "zustand";

interface LocationState {
  location: string | null;
  setLocation: (location: string | null) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  location: "",
  setLocation: (location) => set({ location }),
}));

interface EventFilterState {
  location: string | null;
  active: string;
  setLocation: (loc: string | null) => void;
  setActive: (active: string) => void;
}

export const useFilterStore = create<EventFilterState>((set) => ({
  location: "",
  active: "",
  setLocation: (loc) => set({ location: loc }),
  setActive: (active) => set({ active }),
}));

// Zustand
import { create } from "zustand";
// Dummy data
import { getPools } from "@/apis/pool";

interface ComputePoolState {
  isGetting: boolean;
  computePoolData: any[];
  getComputePool: () => Promise<void>;
}

export const useComputePool = create<ComputePoolState>((set) => ({
  isGetting: false,
  computePoolData: [],

  getComputePool: async () => {
    set({ isGetting: true });
    try {
      const data = await getPools();
      set({ computePoolData: data });
    } catch (error) {
      console.error("Failed to fetch compute pool data", error);
    }
    set({ isGetting: false });
  },
}));

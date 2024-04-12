import { create } from "zustand";
export const useProductsStore = create((set) => ({
  data: [],
  copyData: [],
  limit: 10,

  setCopyData: (newData: any) => set({ copyData: newData }),
  setLimit: (limit: any) => set({ limit: limit }),

  fetchData: async (limit: any) => {
    console.log(limit.limit);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit.limit}`
      );
      const val = await res.json();
      // console.log(val);
      return set((state: any) => ({ data: val, copyData: val }));
    } catch (error) {
      console.log(error);
    }
  },
}));

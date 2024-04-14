import { create } from "zustand";
export const useProductsStore = create((set, get) => ({
  data: [],
  copyData: [],
  newData: [],
  limit: 10,
  value: "",
  searched: false,
  searchedLeng: 0,

  setCopyData: (newData: any) => set({ copyData: newData }),
  setLimit: (limit: any) => set({ limit: limit }),
  setValue: (val: any) => set({ value: val }),
  checkSearch: () => set({ searched: true }),

  fetchSearchedData: async (product: any) => {
    const state: any = get();
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${product}&limit=${state.limit}`
      );
      const val = await res.json();

      return set((state: any) => ({ copyData: val, searchedLeng: val.total }));
    } catch (error) {
      console.log(error);
    }
  },
  fetchAllData: async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=100`);
      const val = await res.json();
      return set((state: any) => ({ newData: val }));
    } catch (error) {
      console.log(error);
    }
  },
  fetchData: async (limit: any) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit.limit}`
      );
      const val = await res.json();
      return set((state: any) => ({ data: val, copyData: val }));
    } catch (error) {
      console.log(error);
    }
  },
}));

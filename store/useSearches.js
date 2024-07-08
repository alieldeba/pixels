import { create } from "zustand";

export const useSearches = create((set) => ({
  images: [],
  page: 1,
  search: "",
  category: "",
  refetch: true,
  updateSearch: (value) =>
    set(() => ({
      search: value,
    })),
  updateCategory: (value) =>
    set(() => ({
      category: value,
    })),
  nextPage: () =>
    set((state) => ({
      page: state.page + 1,
    })),
  prevPage: () =>
    set((state) => ({
      page: state.page - 1,
    })),
  enableRefetch: () =>
    set(() => ({
      refetch: true,
    })),
  disableRefetch: () =>
    set(() => ({
      refetch: false,
    })),
  updateImages: (images) =>
    set(() => ({
      images: images,
    })),
}));

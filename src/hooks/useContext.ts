import { create } from 'zustand';

type TypeActions = {
  value: TypeOptions
  setValue: (value: TypeOptions) => void
}

export const useType = create<TypeActions>() ((set) => ({
  value: "character",
  setValue: (value) => set(() => ({ value }))
}))
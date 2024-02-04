import { create } from "zustand"

type CharacterActions = {
  character?: Character
  setCharacter: (target: Character) => void
}

export const useCharacter = create<CharacterActions>() (set => ({
  setCharacter(target) {
    set(() => ({ character: target }))
  }
}))
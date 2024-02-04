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

type LocationActions = {
  location?: Location
  setLocation: (target: Location) => void
}

export const useLocation = create<LocationActions>() (set => ({
  setLocation(target) {
    set(() => ({ location: target }))
  }
}))

type EpisodeActions = {
  episode?: Episode
  setEpisode: (target: Episode) => void
}

export const useEpisode = create<EpisodeActions>() (set => ({
  setEpisode(target) {
    set(() => ({ episode: target }))
  }
}))
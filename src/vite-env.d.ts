/// <reference types="vite/client" />

type TypeOptions = "character" | "episode" | "location"

interface ResponseAPI<T> {
  info: Info
  results: T[]
}

interface Info {
  count: number
  pages: number
  next: string
  prev: unknown
}

interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: SpecificLocation
  image: string
  episode: string[]
  url: string
  created: string
}

interface Origin {
  name: string
  url: string
}

interface SpecificLocation {
  name: string
  url: string
}

interface Titles {
  [key: string]: string
}
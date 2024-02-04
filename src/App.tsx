import { useEffect, useState } from "react"

import useFetch from "./hooks/useFetch"
import { shuffle } from "./utils"
import { API, titles } from "./utils/constants"
import "./styles/app.css"
import CharacterCard from "./components/CharacterCard"
import { useCharacter } from "./hooks/useContext"

const charId = shuffle({ max: 800 })
const locId = shuffle({ max: 120 })
const epId = shuffle({ max: 50 })
const carouselTimer = 1500

const App = () => {
  const { character, setCharacter } = useCharacter()
  const [, charLoading, charData] = useFetch<Character>({ type: "character", target: charId })
  const [, , locData] = useFetch<Location>({ type: "location", target: locId })
  const [, , epData] = useFetch<Episode>({ type: "episode", target: epId })

  const [title, setTitle] = useState<string>()
  const [isTitleAnimated, setIsTitleAnimated] = useState<boolean>(false)

  const [active, setActive] = useState<number>(0)

  const titleManager = (index: number) => {
    setIsTitleAnimated(true)

    setTimeout(() => {
      setIsTitleAnimated(false)

      const title = titles[index]
      setTitle(title)
    }, 200)
  }

  const next = () => {
    setActive((prev) => {
      const active = prev + 1

      if (active > 2) {
        const RESET = 0

        titleManager(RESET)
        return RESET
      }

      titleManager(active)
      return active
    })
  }

  const back = () => {
    setActive((prev) => {
      const active = prev - 1

      if (active < 0) {
        const RESET = 2

        titleManager(RESET)
        return RESET
      }

      titleManager(active)
      return active
    })
  }

  useEffect(() => {
    charData && setCharacter(charData)
    //locData && setLocation(locData)
    //epData && setEpisode(epData)

  }, [charData, setCharacter])

  useEffect(() => {
    const title = titles[0]
    setTitle(title)

    setInterval(() => {
      // rotar carousel
    }, carouselTimer)
  }, [])

  return (
    <section className="container">
      <h2 className={`title ${ isTitleAnimated && "text-transition" }`}>{title}</h2>
      <div className="carousel-container">
        { <CharacterCard /> }
      </div>
      <div className="controls">
        <button className="btn-left" onClick={back}>{"<"}</button>
        <button className="btn-right" onClick={next}>{">"}</button>
      </div>
    </section>
  )
}

export default App

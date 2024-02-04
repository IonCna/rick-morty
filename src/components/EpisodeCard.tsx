import { useState } from "react"
import { useEpisode } from "../hooks/useContext"
import CardLoading from "./CardLoading"
import { shuffle } from "../utils"
import { API } from "../utils/constants"
import Thumbnail from "./Thumbnail"

const EpisodeCard = () => {
  const { episode, setEpisode } = useEpisode()
  const [loading, setLoading] = useState<boolean>(false)

  if (!episode || loading) return <CardLoading />

  const episodeHandler = async () => {
    setLoading(true)
    const target = shuffle({ max: 50 })
    const response = await fetch(`${API}episode/${target}`)

    const data = await response.json() as Episode
    setLoading(false)
    setEpisode(data)
  }

  return (
    <div className="card">
      <div className="content">
        <div>
          <h4 className="subtitle">Personajes</h4>
          <div className="thumbnail-container">
            {
              episode.characters.map((character, index) => <Thumbnail key={index} url={character} />)
            }
          </div>
        </div>
        <div>
          <h4 className="subtitle">{episode.name}</h4>
          <b>{episode.episode}</b>
        </div>
      </div>
      <button onClick={episodeHandler} className="btn">Otro</button>
    </div>
  )
}

export default EpisodeCard
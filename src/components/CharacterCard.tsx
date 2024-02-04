import { useState } from "react"
import { API, speciesTypes, states } from "../utils/constants"
import CardLoading from "./CardLoading"
import { shuffle } from "../utils"
import { useCharacter } from "../hooks/useContext"

const CharacterCard = () => {
  const { character, setCharacter } = useCharacter()
  const [loading, setLoading] = useState<boolean>(false)

  if (!character || loading) return <CardLoading />

  const characterHandler = async () => {
    setLoading(true)
    const target = shuffle({ max: 800 })
    const response = await fetch(`${API}character/${target}`)

    const data = await response.json() as Character
    setLoading(false)
    setCharacter(data)
  }

  const formatStatus = character.status.toLowerCase()
  const state = states[formatStatus]
  const translatedSpecies = speciesTypes[character.species]

  return (
    <div className="card">
      <div className="banner" style={{ backgroundImage: `url(${character.image})` }}></div>
      <div className="content">
        <div>
          <h4 className="subtitle">{character.name}</h4>
          <b> <span className={`status ${formatStatus}`}></span>{state} - {translatedSpecies}</b>
        </div>
        <div>
          <h4 className="subtitle">Origen</h4>
          <b>{character.origin.name}</b>
        </div>
      </div>
      <button onClick={characterHandler} className="btn">¡Dame otro!</button>
    </div>
  )
}

export default CharacterCard
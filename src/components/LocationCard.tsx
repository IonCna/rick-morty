import { useEffect, useState } from "react"
import { useLocation } from "../hooks/useContext"
import useFetch from "../hooks/useFetch"
import CardLoading from "./CardLoading"
import { shuffle } from "../utils"
import { API } from "../utils/constants"
import Thumbnail from "./Thumbnail"

const LocationCard = () => {
  const { location, setLocation } = useLocation()
  const [loading, setLoading] = useState<boolean>(false)

  if (!location || loading) return <CardLoading />

  const { length } = location.residents

  const locationHandler = async () => {
    setLoading(true)
    const target = shuffle({ max: 120 })
    const response = await fetch(`${API}location/${target}`)

    const data = await response.json()
    setLoading(false)
    setLocation(data)
  }

  return (
    <div className="card">
      <div className="content">
        <div>
          <h4 className="subtitle">
            { length > 0 ? "Habitantes" : "Sin Habitantes" }
          </h4>
          <div className="thumbnail-container">
            {
              length > 0
                ? location.residents.map((resident, index) => <Thumbnail key={index} url={resident} />)
                : <img alt="sin habitantes" />
            }
          </div>
        </div>
        <div>
          <h4 className="subtitle">{location.name}</h4>
          <b>{location.dimension}</b>
        </div>
      </div>
      <button onClick={locationHandler} className="btn">Vamos a otro lado</button>
    </div>
  )
}

export default LocationCard
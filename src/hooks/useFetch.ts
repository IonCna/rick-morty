import { useEffect, useState } from "react"
import { API } from "../utils/constants"

interface Props {
  type?: TypeOptions
  target?: number
}

const useFetch = <T>({ type = "character", target = 0 }: Props) => {
  const [data, setData] = useState<ResponseAPI<T>>()
  const [error, setError] = useState<Error>()
  const [loading, isLoading] = useState<boolean>(true)

  const endpoint = target > 0 ? `${API}${type}/${target}` : API + type

  useEffect(() => {
    fetch(endpoint)
    .then((response) => response.json())
    .then(data => setData(data))
    .catch((error) => setError(error))
    .finally(() => isLoading(false))
  }, [endpoint])

  return { error, loading, data }
}

export default useFetch
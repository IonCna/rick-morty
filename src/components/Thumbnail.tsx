import { useState, useEffect } from "react"

const Thumbnail = ({ url }: { url: string }) => {
  const [data, setData] = useState<Character>()

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(data => setData(data))
  }, [url])

  return <img className="thumbnail" src={data?.image} alt="" />
}

export default Thumbnail

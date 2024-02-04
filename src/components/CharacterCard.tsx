type Props = {
  character: Character,
  loading: boolean
}

const CharacterCard = ({ character, loading }: Props) => {
  console.log(character, loading)
  return (
    <div className="card">
      <div className="banner"></div>
      <div className="content">
        <h2>{"oa"}</h2>
      </div>
    </div>
  )
}

export default CharacterCard
import { useType } from "./hooks/useContext"

function App() {
  const { value } = useType()
  console.log(value)

  return (
    <>
    <button>Atrás</button>
    <button>Dame otro</button>
    <button>Siguiente</button>
    </>
  )
}

export default App

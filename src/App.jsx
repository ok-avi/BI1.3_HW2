import HotelByTitle from "./components/HotelByTitle"
import HotelForm from "./components/HotelForm"
import Hotels from "./components/Hotels"

const App = () => {
  return (
    <div>
      <HotelForm />
      <Hotels />
      <HotelByTitle title="Sunset Resort" />
    </div>
  )
}

export default App
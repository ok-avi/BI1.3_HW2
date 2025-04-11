import { useState } from "react"
import useFetch from "../useFetch"
const Hotels = () => {
    const [successMessage,setSuccessMessage] = useState("")
    const {data,loading,error} = useFetch("https://be-4-4-hw-2-iota.vercel.app/hotels")
    async function btnDeleteHandler(e){
      e.preventDefault()
      const {dataset:{id}} = e.target
      try {
        const response = await fetch(`https://be-4-4-hw-2-iota.vercel.app/hotels/${id}`,{method:"DELETE"})
        if(!response.ok){
          throw "Failed to delete hotel data"
        }
        const data = await response.json()
        if(data){
          setSuccessMessage("Hotel deleted successfully")
          window.location.reload()
        }
        
        console.log(id,data)
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
        <h1>All Hotels</h1>
        <ul>
            {data?.map(hotel=><li>{hotel.name} <button data-id={hotel._id} onClick={btnDeleteHandler}>Delete</button></li>)}
        </ul>
        <p>{successMessage}</p>
    </div>
  )
}

export default Hotels
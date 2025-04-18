import useFetch from "../useFetch"

const HotelByTitle = ({title})=>{
    const {data,loading,error} = useFetch("https://be-4-4-hw-2-iota.vercel.app/hotels")
    const matchedHotel = data?.find(hotel=>hotel.name===title)
    // console.log(matchedHotel,data)
    return(
        <div>
            {matchedHotel&&(<>
                <h1>{title}</h1>
                <p><strong>Location:</strong> {matchedHotel.location}</p>
                <p><strong>Rating:</strong> {matchedHotel.rating}</p>
                <p><strong>Price Range:</strong> {matchedHotel.priceRange}</p>
            </>)}
        </div>
    )
}

export default HotelByTitle
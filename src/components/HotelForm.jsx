import { useState } from "react"

const HotelForm = () => {
    const [formData,setFormData] = useState({
        name:"",
        category:"Budget",
        location:"",
        rating:"",
        website:"",
        phoneNumber :"",
        checkInTime :"",
        checkOutTime :"",
        amenities :"",
        priceRange :"$$ (11-30)",
        reservationsNeeded :false,
        isParkingAvailable :false,
        isWifiAvailable :false,
        isPoolAvailable :false,
        isSpaAvailable :false,
        isRestaurantAvailable :false,
        photos :"",
    })
    function changeHandler(e){
        let {value,id,checked} = e.target
        if( id==="isParkingAvailable" ||
            id==="reservationsNeeded" ||
            id==="isWifiAvailable" ||
            id==="isPoolAvailable" ||
            id==="isSpaAvailable" ||
            id==="isRestaurantAvailable"
        ){
            value = checked
        }
        if(id==="rating"){
            value=parseInt(value)
        }
        setFormData(prev=>({
            ...prev,
            [id]:value
        }))
    }
    async function formHandler(e){
        e.preventDefault()
        // console.log(formData)
        try {
            const response = await fetch("https://bi-1-3-hw-2-ruddy.vercel.app/hotels",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            })
            if(!response.ok){
                throw "Hotel not created"
            }
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h1>Hotel Form</h1>
        <form onSubmit={formHandler}>
            <label htmlFor="name">
                Name: <br />
                <input type="text" onChange={changeHandler} value={formData.name} id="name" />
            </label>
            <br /><br />
            <label htmlFor="category">Category: </label>
            <br />
            <select  id="category" onChange={changeHandler} value={formData.category }>
                <option value="Budget" >Budget</option>
                <option value="Mid-Range">Mid-Range</option>
                <option value="Luxury">Luxury</option>
                <option value="Boutique">Boutique</option>
                <option value="Resort">Resort</option>
                <option value="Other">Other</option>
            </select>
            <br /><br />
            <label htmlFor="location">
                Location: <br />
                <input type="text" onChange={changeHandler} value={formData.location} id="location" />
            </label>
            <br /><br />
            <label htmlFor="rating">
                Rating: <br />
                <input type="number" onChange={changeHandler} value={formData.rating} id="rating" />
            </label>
            <br /><br />
            <label htmlFor="website">
                Website: <br />
                <input type="text" onChange={changeHandler} value={formData.website} id="website" />
            </label>
            <br /><br />
            <label htmlFor="phoneNumber">
                Phone Number: <br />
                <input type="text" onChange={changeHandler} value={formData.phoneNumber} id="phoneNumber" />
            </label>
            <br /><br />
            <label htmlFor="checkInTime">
                Check in Time: <br />
                <input type="text" onChange={changeHandler} value={formData.checkInTime} id="checkInTime" />
            </label>
            <br /><br />
            <label htmlFor="checkOutTime">
                Check out Time: <br />
                <input type="text" onChange={changeHandler} value={formData.checkOutTime} id="checkOutTime" />
            </label>
            <br /><br />
            <label htmlFor="amenities">
                Amenities: <br />
                <input type="text" onChange={changeHandler} value={formData.amenities} id="amenities" />
            </label>
            <br /><br />
            <label htmlFor="priceRange">Price Range:</label>
            <br />
            <select onChange={changeHandler} value={formData.priceRange} id="priceRange">
                <option value="$$ (11-30)">$$ (11-30)</option>
                <option value="$$$ (31-60)">$$$ (31-60)</option>
                <option value="$$$$ (61+)">$$$$ (61+)</option>
                <option value="Other">Other</option>
            </select>
            <br /><br />
            <label htmlFor="reservationsNeeded">
                Reservation Needed: 
                <input type="checkbox" value={formData.reservationsNeeded} onChange={changeHandler} id="reservationsNeeded" />
            </label>
            <br /><br />
            <label htmlFor="isParkingAvailable">
                Parking Available: 
                <input type="checkbox"  value={formData.isParkingAvailable} onChange={changeHandler} id="isParkingAvailable" />
            </label>
            <br /><br />
            <label htmlFor="isWifiAvailable">
                Wifi Available: 
                <input type="checkbox" value={formData.isWifiAvailable} onChange={changeHandler} id="isWifiAvailable" />
            </label>
            <br /><br />
            <label htmlFor="isPoolAvailable">
                Pool Available: 
                <input type="checkbox" value={formData.isPoolAvailable} onChange={changeHandler} id="isPoolAvailable" />
            </label>
            <br /><br />
            <label htmlFor="isSpaAvailable">
                Spa Available: 
                <input type="checkbox" value={formData.isSpaAvailable} onChange={changeHandler} id="isSpaAvailable" />
            </label>
            <br /><br />
            <label htmlFor="isRestaurantAvailable">
                Restaurant Available: 
                <input type="checkbox" value={formData.isRestaurantAvailable} onChange={changeHandler} id="isRestaurantAvailable" />
            </label>
            <br /><br />
            <label htmlFor="photos">
                Photos: <br />
                <input type="text" value={formData.photos} onChange={changeHandler} id="photos" />
            </label>

            <br /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default HotelForm
import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'

function Inputs(props) {
    const { query, setQuery, setUnits, setWeather } = props;
    const [city, setCity] = useState("");

    const onSearchClick = (e) => {
        if (city !== "") {
            setQuery({ ...query, q: city });
        }
    }

    const onLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({ lat, lon });
            })
        }
    }

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input onChange={(e) => { setCity(e.currentTarget.value) }} type="text" className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' placeholder='search' />
                <UilSearch onClick={onSearchClick} size={25} className="text-white cursor-pointer ease-out transition  hover:scale-125 duration-500" />
                <UilLocationPoint onClick={onLocationClick} size={25} className="text-white cursor-pointer ease-out transition duration-500 hover:scale-125" />
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button onClick={() => { setUnits("metric") }} name="metric" className='mr-3 text-xl text-white ease-out transition duration-500 hover:scale-110'>&deg;C</button>

                <button onClick={() => { setUnits("imperial") }} name='imperial' className='text-xl text-white ease-out transition duration-500 hover:scale-110'>&deg;F</button>
            </div>
        </div>
    )
}

export default Inputs
import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons"
import { iconUrlFromCode, formatToLocalTime } from '../services/weatherService';

function TemperatureAndDetails(props) {

    const { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone } = props.weather;

    return <div>
        <div className='flex items-center justify-center pb-2 text-xl text-cyan-300'>
            <p className='text-3xl font-extralight'>{details}</p>
        </div>


        <div className='flex flex-row items-center justify-between text-white'>
            <img src={`${iconUrlFromCode(icon)}`} alt="image" className='w-30 scale-150' />
            <p className='text-8xl '>{temp.toFixed()}&deg;</p>
        </div>


        <div className='flex flex-row items-center justify-center text-white text-sm'>

            <div className='flex flex-col space-y-0.5 w-1/2 items-start justify-center'>
                <div className='flex flex-row'>
                    <UilSun size={27} className="leading- mr-2" />
                    <span className='translate-y-1 font-light'>Rise:&nbsp;</span>
                    <span className='translate-y-1 font-medium'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>

                </div>
                <div className='flex flex-row'>
                    <UilSunset size={27} className="mr-2" />
                    <span className='translate-y-1 font-light'>Set:&nbsp;</span>
                    <span className='translate-y-1 font-medium'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>

                </div>
                <div className='flex flex-row'>
                    <UilArrowUp size={30} className="translate-x-[-3.5px] mr-1" />
                    <span className='translate-y-1 font-light'>High:&nbsp;</span>
                    <span className='translate-y-1 font-medium'>{temp_max.toFixed()}&deg;</span>
                </div>
                <div className='flex flex-row'>

                    <UilArrowDown size={30} className="mr-1 translate-x-[-3px]" />
                    <span className='translate-y-1 font-light'>Low:&nbsp;</span>
                    <span className='translate-y-1 font-medium'>{temp_min.toFixed()}&deg;</span>

                </div>
            </div>
            <div className='flex flex-col w-1/2 items-end justify-center space-y-4'>
                <div className='flex flex-col space-y-2'>

                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTemperature size={18} className="mr-1">
                        </UilTemperature>
                        <span>Real feel:</span>
                        <span className='font-semibold ml-1'>{feels_like}&deg;</span>
                    </div>

                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className="mr-1">
                        </UilTear>
                        <span>Humidity:</span>
                        <span className='font-semibold ml-1'>{humidity}%</span>
                    </div>

                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilWind size={18} className="mr-1">
                        </UilWind>
                        <span>Wind:</span>
                        <span className='font-semibold ml-1'>{speed} km/h</span>
                    </div>


                </div>

            </div>
        </div>

    </div>
}

export default TemperatureAndDetails
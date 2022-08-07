import React from 'react'
import { iconUrlFromCode } from '../services/weatherService';
import ForecastCard from './ForecastCard'

function Forecast(props) {
    const items = props.items;
    return <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{props.title}</p>
        </div>
        <hr className='text-white my-2' />
        <div className='flex flex-row items-center justify-between text-white'>
            {
                items.map((item) => {
                    return <ForecastCard key={Math.random()} title={item.title} temp={item.temp} icon={iconUrlFromCode(item.icon)} />
                })
            }
        </div>
    </div>
}

export default Forecast
import React from 'react'

function ForecastCard(props) {

    return (

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>{props.title}</p>
            <img src={props.icon} className='w-12 my-1' />
            <p className='font-medium'>{props.temp.toFixed()}&deg;</p>
        </div>

    )
}

export default ForecastCard
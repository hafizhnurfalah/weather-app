import React from 'react'
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import "./descriptions.css"

const Descriptions = ({weather, units}) => {

    const tempUnit = units === 'metric' ? '°C' : '°F'
    const windUnit = units === 'metric' ? 'm/s' : 'm/h'

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: " Minimum Temperature",
            data: weather.temp_min.toFixed(),
            unit:tempUnit,
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: " Maximum Temperature",
            data: weather.temp_max.toFixed(),
            unit:tempUnit,
        },
        {
            id: 3,
            icon: <FaWind />,
            title: " Wind Speed",
            data: weather.speed.toFixed(),
            unit:windUnit,
        },
        {
            id: 4,
            icon: <BiHappy />,
            title: " Feels Like",
            data: weather.feels_like.toFixed(),          
            unit:tempUnit,
        },
        {
            id: 5,
            icon: <MdCompress />,
            title: " Pressure",
            data: weather.pressure,
            unit:"hPa",
        },
        {
            id: 6,
            icon: <MdOutlineWaterDrop />,
            title: " Humidity",
            data: weather.humidity,
            unit:" %",
        },
    ];

  return ( 
    <div className='section section__descriptions'>
        {cards.map(({id, icon, title, data, unit}) => (
        <div key={id} className='card'>
            <div className='descrpition__card-icon'>
            {icon}
            <small>{title}</small>
            </div>
            <h2>{`${data} ${unit}`}</h2>
        </div>
        ))}   
    </div>   
    );
};

export default Descriptions
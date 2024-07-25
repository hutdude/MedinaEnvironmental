import React from 'react';
import noise from '../../assets/noise.png'

export default function Noise({z10=false}) {
    return (
        <div 
            className={`absolute ${z10 ? 'z-10' : ''} inset-0 bg-repeat bg-center`} 
            style={{backgroundImage: `url(${noise})`}}
        ></div>
    )
}
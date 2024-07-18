import './ServiceBubble.css'
import 'animate.css'
import React, {useMemo} from 'react';
export default function ServiceBubble({text, gradient, size, fontSize, }) {
    const randomDuration = useMemo(() => {
        return (Math.random() * 2 + 1).toFixed(2);
    }, [])
    return(

        <div style={{ '--animate-duration': `${randomDuration}s`}} className={`animate__animated animate__slower animate__infinite animate__pulse transform relative z-20 h-fit w-fit `}> 
            <svg width={size} height={size} viewBox="-10 -10 120 120"  className='hover:scale-110'>
                <defs>
                    <linearGradient  id='small-blue-gradient'  x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="28.67%" stopColor="#1E90FF" />
                                <stop offset="33.27%" stopColor="#1D90FF" />
                                <stop offset="37.87%" stopColor="#1892FF" />
                                <stop offset="42.47%" stopColor="#0D94FF" />
                                <stop offset="47.06%" stopColor="#0098FF" />
                                <stop offset="51.66%" stopColor="#009CFF" />
                                <stop offset="56.26%" stopColor="#00A1FF" />
                                <stop offset="60.86%" stopColor="#00A7FF" />
                                <stop offset="65.45%" stopColor="#00AEFF" />
                                <stop offset="70.05%" stopColor="#00B5FF" />
                                <stop offset="74.65%" stopColor="#00BDFF" />
                                <stop offset="79.25%" stopColor="#00C6FF" />
                                <stop offset="83.84%" stopColor="#00CFFF" />
                                <stop offset="88.44%" stopColor="#26D9FF" />
                                <stop offset="93.04%" stopColor="#46E3FF" />
                                <stop offset="97.64%" stopColor="#62EEFF" />
                                <stop offset="102.23%" stopColor="#7DF9FF" />
                    </linearGradient>
                    <linearGradient id="pearl-blue-gradient" gradientTransform="">
                        <stop offset="28.67%" stopColor="#7DF9FF" />
                        <stop offset="33.27%" stopColor="#7EF9FF" />
                        <stop offset="37.87%" stopColor="#80F9FF" />
                        <stop offset="42.47%" stopColor="#83F9FF" />
                        <stop offset="47.06%" stopColor="#88FAFF" />
                        <stop offset="51.66%" stopColor="#8EFAFF" />
                        <stop offset="56.26%" stopColor="#95FAFF" />
                        <stop offset="60.86%" stopColor="#9CFBFF" />
                        <stop offset="65.45%" stopColor="#A5FBFF" />
                        <stop offset="70.05%" stopColor="#AEFCFF" />
                        <stop offset="74.65%" stopColor="#B8FCFF" />
                        <stop offset="79.25%" stopColor="#C2FDFF" />
                        <stop offset="83.84%" stopColor="#CEFDFF" />
                        <stop offset="88.44%" stopColor="#D9FEFF" />
                        <stop offset="93.04%" stopColor="#E5FEFF" />
                        <stop offset="97.64%" stopColor="#F2FFFF" />
                        <stop offset="102.23%" stopColor="#FFF" />
                        </linearGradient>
                    <linearGradient id="green-pearl-gradient" >
                        <stop offset="0%" stopColor="#B0E0E6" />
                        <stop offset="33.27%" stopColor="#B0E0E6" />
                        <stop offset="37.87%" stopColor="#AFE0E6" />
                        <stop offset="42.47%" stopColor="#AFE1E7" />
                        <stop offset="47.06%" stopColor="#AEE2E8" />
                        <stop offset="51.66%" stopColor="#ACE2E9" />
                        <stop offset="56.26%" stopColor="#AAE4EA" />
                        <stop offset="60.86%" stopColor="#A8E5EB" />
                        <stop offset="65.45%" stopColor="#A6E6ED" />
                        <stop offset="70.05%" stopColor="#A3E8EF" />
                        <stop offset="74.65%" stopColor="#9FEAF1" />
                        <stop offset="79.25%" stopColor="#9BECF3" />
                        <stop offset="83.84%" stopColor="#97EEF5" />
                        <stop offset="88.44%" stopColor="#92F1F7" />
                        <stop offset="93.04%" stopColor="#8CF3FA" />
                        <stop offset="97.64%" stopColor="#85F6FC" />
                        <stop offset="100%" stopColor="#7DF9FF" />
                        </linearGradient>
                        <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
                            <feOffset dx="3" dy="-2" result="offsetblur"/>
                            <feFlood floodColor="rgba(0,0,0,0.25)"/>
                            <feComposite in2="offsetblur" operator="in"/>
                            <feMerge>
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                </defs>
                <circle cx="50" 
                    cy="50" 
                    r="50" filter="url(#drop-shadow)" fill={`url(#${gradient})`} 
                    />
                <text 
                    x="50" 
                    y="50" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    fill="black"
                    fontSize={fontSize}
                    className=" font-bold"
                    >
                    {text.split('\n').map((line, index) => (
                        <tspan key={index} x="50" dy={index === 0 ? 0 : '1.2em'}>
                        {line}
                        </tspan>
                    ))}
                </text>
            </svg>
        </div>
    )
}
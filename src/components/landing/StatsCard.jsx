

const StatsCard = ({bg, title, subtitle, text, height}) => {

    return (
        <div className="flex items-end h-110">
            <div className={`${bg} w-full grid grid-rows-3 px-10 text-Title-Dark-Gray h-96 md:h-72${height} rounded-rounded-5`}>
                <h1 className='  text-Title-Dark-Gray row-span-1 pt-8 text-left font-bold text-3xl md:text-4xl'>{title}</h1>
            
                <div className="row-span-1 pb-8 flex items-end align-text-bottom">
                    <h2 className=' text-Title-Dark-Gray row-span-1 font-semibold'>{subtitle}</h2>
                </div>
                <div className="row-span-1 pb-8 flex items-end align-text-bottom opacity-75">
                    <p >{text}</p>
                </div>
            </div>
        </div>
    )
}

export default StatsCard;
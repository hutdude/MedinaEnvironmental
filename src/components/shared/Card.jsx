import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { IoMdPin } from "@react-icons/all-files/io/IoMdPin";

export default function Card({title, imageURL, category, location, date, bg, textColor, text} ) {
    return (
        <div className={`flex rounded-rounded-6 flex-col mt-6 text-gray-700 ${bg ? bg : 'bg-gray-50'} shadow-md bg-clip-border rounded-xl w-full max-w-sm`}>
            <div className="relative rounded-t-rounded-6 h-64 overflow-hidden rounded-t-xl bg-gray-200">
                <img
                    src={imageURL}
                    alt="card-image" 
                    className="w-full h-full object-contain"
                />
                <span className="absolute top-2 right-2 z-20 inline-flex items-center rounded-rounded-3 bg-gray-50 px-2 py-1 text-xs font-medium lowercase text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    {category}
                </span>
            </div>
            <div className="p-4 sm:p-6">
                <h5 className={`block mb-2 font-sans text-base sm:text-lg antialiased font-bold leading-snug tracking-normal ${textColor ? textColor : 'text-Dark-Navy'}`}>
                    {title}
                </h5>
                {date && (
                    <div className="flex items-center gap-2 py-2">
                        <FaCalendarAlt className="text-gray-500" />
                        <p className="text-xs sm:text-sm text-gray-600">{date}</p>
                    </div>
                )}
                {location && (
                    <div className="flex items-center gap-2">
                        <IoMdPin className="text-gray-500" />
                        <p className="text-xs sm:text-sm text-gray-600">{location}</p>
                    </div>
                )}
                
                {text && (
                    <div className="flex items-center gap-2 mt-2">
                        <p className={`text-xs sm:text-sm opacity-80 ${textColor ? textColor : 'text-gray-600'}`}>{text}</p>
                    </div>
                )}
            </div>
        </div>  
    )
}
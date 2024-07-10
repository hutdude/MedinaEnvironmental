
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

export default function Card({title, imageURL, category, location, date} ) {
    return (
        

  <div className="h-full relative rounded-7 flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
    <div
      className="relative h-64 rounded-t-7  -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
      <img
        src={imageURL}
        alt="card-image" 
        className="w-full"/>
    </div>
  <span className="absolute top-0 right-8 rounded-7 z-20 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium lowercase text-gray-600 ring-1 ring-inset ring-gray-500/10">{category}</span>
  <div className="p-8">
    <h5 className="block mb-2 font-sans text-lg antialiased font-bold leading-snug tracking-normal text-Dark-Navy">
      {title}
    </h5>
    <div className="flex justify-start items-center gap-4 py-4">
        <FaCalendarAlt />
        <p className="text-[1.25rem]">{date}</p>
    </div>
    <div className="flex justify-start items-center gap-4">
        <IoMdPin />
        <p className="text-[1.25rem]">{location}</p>
    </div>
  </div>
  
</div>  

    )
}
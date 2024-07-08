

export default function TimelineItem({year, text}) {
    return <div>
        <div className="flex lg:justify-center items-center w-full">
                <hr className="block lg:hidden text-Electric-Blue w-10 mr-2 lg:ml-4"/>
                <p className="text-Electric-Blue font-extrabold">•</p>
                <p className="text-Electric-Blue pl-4 tracking-widest">{year}</p>
                <hr className="hidden lg:block text-Electric-Blue w-full mr-2 ml-4"/>
        </div>
        <p className="text-white pb-10 pt-2 ml-16 lg:ml-0 lg:pt-4 lg:pl-5 lg:text-[1.25rem] font-light tracking-wide lg:pr-4">{text}</p>
    </div>
}
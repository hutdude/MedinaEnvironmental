import { useState, useEffect } from "react"
import { IoClose } from "react-icons/io5"
import { GrAnnounce } from "react-icons/gr"
import '../shared/gradients.css'

export default function Announcement() {
    const [isShown, setIsShown] = useState(false)
    const [announcements, setAnnouncements] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleClose = () => {
        setIsShown(false)
        if (announcements) {
            localStorage.setItem('lastShownAnnouncementId', announcements.id.toString())
        }
    }

    const handleLearnMore = () => {
        if (announcements) {
            localStorage.setItem('lastShownAnnouncementId', announcements.id.toString())
        }
    }

    const announcementsURL = `/api/wp-json/wp/v2/announcements?acf_format=standard&_fields=id,title,acf&timestamp=${Date.now()}`

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {                
                const req = await fetch(announcementsURL, {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'no-cache, no-store, must-revalidate',
                    }
                })

                if (!req.ok) {
                    throw new Error(`HTTP error! status: ${req.status}`)
                }

                const announcementsData = await req.json()

                // Sort announcements by id in descending order
                const sortedAnnouncements = announcementsData.sort((a, b) => b.id - a.id)
                
                const latestAnnouncement = sortedAnnouncements[0]
                setAnnouncements(latestAnnouncement)
                
                // Check if this announcement has been shown before
                const lastShownAnnouncementId = localStorage.getItem('lastShownAnnouncementId')
                if (lastShownAnnouncementId !== latestAnnouncement.id.toString()) {
                    setIsShown(true)
                    console.log("Showing new announcement")
                } else {
                    console.log("This announcement has already been shown")
                }
                
                setLoading(false)
            } catch (error) {
                console.error('Error fetching announcements:', error)
                setLoading(false)
            }
        }
        fetchAnnouncements()
    }, [])

    if (loading || !announcements) {
        return null
    }

    return(
        <div id="announcement-bar" className={`
            flex flex-wrap items-center gap-2 sm:gap-4 justify-center award-winning-bg
            transition-all duration-300 ease-in-out 
            ${isShown ? 'max-h-none p-3 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}
          `}>
            <GrAnnounce className="h-5 hidden lg:block w-5 sm:h-6 sm:w-6 flex-shrink-0"/>
            <p className="transition-opacity duration-300 ease-in-out text-sm sm:text-base flex-grow">
                {announcements.acf?.announcement_text}
            </p>
            {announcements.acf?.link_to_linkedin_post && (
                <a 
                    href={"/learn#linked-in-" + announcements.acf.linkedin_post} 
                    onClick={handleLearnMore}
                    className="flex-shrink-0 mt-1 sm:mt-0"
                >
                    <div className="border-2 sm:border-4 rounded-rounded-3 px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Learn More</div>
                </a>
            )}
            <button onClick={handleClose} aria-label="close-button" className="flex-shrink-0 ml-auto">
                <IoClose className="h-5 w-5 sm:h-6 sm:w-6"/>
            </button>
        </div>
    )
}
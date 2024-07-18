import { useEffect, useState } from "react";
import TimelineItem from "./TimelineItem"

const awardsURL = `/api/wp-json/wp/v2/awards?acf_format=standard&_fields=id,title,acf`


export default function AwardTimeline() {

    const [awards, setAwards] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAwards = async () => {
            try {                
                const req = await fetch(awardsURL, {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'no-cache, no-store, must-revalidate',
                    }
                });

                if (!req.ok) {
                    throw new Error(`HTTP error! status: ${req.status}`);
                }

                const awardsData = await req.json();
                setAwards(awardsData);
                setLoading(false);
                console.log('awards', awardsData);
            } catch (error) {
                console.error('Error fetching awards:', error);
                setLoading(false);
            }
        };
        fetchAwards();
    }, []);
    
    if(loading){
        return <div>
            <h1 className="text-5xl text-Light-Gray">
            Upcoming Awards
            </h1>
            
            <h6 className="text-[1.25rem] text-center pt-4 pb-32 text-Light-Gray">
            Find out where to see us next!
            </h6><div>Loading...</div>
        </div>
      }
    
      if(!awards || (Array.isArray(awards) && awards.length === 0)){
        return(<div><h1 className="text-5xl text-Light-Gray">
            Upcoming Awards
        </h1>
        
        <h6 className="text-[1.25rem] text-center pt-4 pb-32 text-Light-Gray">
            Find out where to see us next!
        </h6>
            <p className="text-center pb-64">Nothing Scheduled right now. We'll see you soon!</p>
        </div>)
      }
    
        

    return (
        <div className='z-20 py-16 h-full relative algin-center'>
        <h2 className=' text-center  px-16 text-3xl lg:text-4xl font-bold award-winning-gradient'>award-winning expertise</h2>
        <h6 className='text-white px-16 pt-8 font-thin text-[1.25rem] text-center'>Dr. Medina’s leadership and innovation in the field garners attention from all over.</h6>
        <div className='border-white border-2 lg:border-0 rounded-7 mt-8 grid mx-8 py-16 xl:px-48 lg:px-36 grid-cols-1 lg:grid-cols-4'>

            {awards.map(award => (
                <TimelineItem key={award.id} year={award.acf.year} text={award.title.rendered}></TimelineItem>
            ))}
        </div>

      </div>
    )
}
import Card from "../shared/Card";
import React, { useState, useEffect } from 'react';



function Events(){

    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const timestamp = Date.now(); // Add a timestamp to prevent caching
                const eventsURL = `/api/wp-json/wp/v2/events?acf_format=standard&_fields=id,title,acf&timestamp=${timestamp}`;
                
                const req = await fetch(eventsURL, {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'no-cache, no-store, must-revalidate',
                    }
                });

                if (!req.ok) {
                    throw new Error(`HTTP error! status: ${req.status}`);
                }
                
                const eventsData = await req.json();
                setEvents(eventsData);
                setLoading(false);
                console.log('events', eventsData);
            } catch (error) {
                console.error('Error fetching events:', error);
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);
    


  if(loading){
    return <div>
        <h1 className="text-5xl text-Light-Gray">
        Upcoming Events
        </h1>
        
        <h6 className="text-[1.25rem] text-center pt-4 pb-32 text-Light-Gray">
        Find out where to see us next!
        </h6><div>Loading...</div>
    </div>
  }

  if(!events || (Array.isArray(events) && events.length === 0)){
    return(<div><h1 className="text-5xl text-Light-Gray">
        Upcoming Events
    </h1>
    
    <h6 className="text-[1.25rem] text-center pt-4 pb-32 text-Light-Gray">
        Find out where to see us next!
    </h6>
        <p className="text-center pb-64">Nothing Scheduled right now. We'll see you soon!</p>
    </div>)
  }

    return (<div>
        <h1 className="text-5xl text-Light-Gray">
            Upcoming Events
        </h1>
        
        <h6 className="text-[1.25rem] text-center pt-4 pb-32 text-Light-Gray">
            Find out where to see us next!
        </h6>
        <div className="pb-64 justify-items-center w-full grid gap-8 px-16 grid-cols-1 lg:grid-cols-3">
        
            {events.map(event => (
                <Card 
                    key={event.id}
                    imageURL={event.acf.featured_image}
                    title={event.title.rendered}
                    date={event.acf.event_date}
                    location={event.acf.location}
                    category={event.acf.category.name}
                />
            ))}
        </div>
    </div>)
}

export default Events;
import Card from "../shared/Card";
import React, { useState, useEffect } from 'react';

const eventsURL = `${import.meta.env.VITE_API_BASE_URL}/wp-json/wp/v2/events?acf_format=standard&_fields=id,title,acf`


function Events(){

    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
        try {
            const req = await fetch(eventsURL);
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

  if(Object.keys(events).length == 0){
    return(<div>
        Nothing Schedules right now. We'll see you soon!
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
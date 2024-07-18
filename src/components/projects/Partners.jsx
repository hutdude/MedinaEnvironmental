import Card from "../shared/Card";
import React, { useState, useEffect } from 'react';
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";

const partnersURL = `${import.meta.env.VITE_API_BASE_URL}/wp-json/wp/v2/partners?acf_format=standard&_fields=id,title,acf`


function Partners(){

    const [partners, setPartners] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPartners = async () => {
        try {
            const req = await fetch(partnersURL);
            const partnersData = await req.json();
            setPartners(partnersData);
            setLoading(false);
            console.log('partners', partnersData);
        } catch (error) {
            console.error('Error fetching partners:', error);
            setLoading(false);
        }
        };
        fetchPartners();
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

  if(Object.keys(partners).length == 0){
    return(<div>
        Nothing Schedules right now. We'll see you soon!
    </div>)
  }

    return (<div className="h-[500px] w-full relative bg-white">
        <h6 className="z-30 text-Dark-Navy text-3xl text-center font-bold absolute tranform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Our Partners</h6>
    <Marquee velocity={12} minScale={0.7} resetAfterTries={200} scatterRandomly>
      {partners.map(partner => (
        <Motion
          key={`child-${partner.id}`}
          direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
          velocity={50}
          radius={150}
        >
          <div className="w-[150px] h-[150px] rounded-full rounded-[50%] bg-slate-200 flex items-center justify-center overflow-hidden">
            <img 
              src={partner.acf.partner_logo} 
              alt={`${partner.title.rendered} logo`}
              className="w-full p-4 h-full object-contain"
            />
          </div>
        </Motion>
      ))}
    </Marquee>
</div>)
}

export default Partners;
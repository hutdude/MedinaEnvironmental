import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import Marquee, { Motion } from "react-marquee-slider";
import Marquee from 'react-fast-marquee'

const partnersURL = `/api/wp-json/wp/v2/partners?acf_format=standard&_fields=id,title,acf&timestamp=${Date.now()}`;

function Partners() {
    const [partners, setPartners] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPartners = useCallback(async () => {
        try {
            const req = await fetch(partnersURL);
            const partnersData = await req.json();
            setPartners(partnersData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching partners:', error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPartners();
    }, [fetchPartners]);

    // const memoizedMarqueeContent = useMemo(() => {
    //     if (!partners) return null;
    //     return partners.map(partner => (
    //         <Motion
    //             key={`child-${partner.id}`}
    //             direction={partner.id % 2 === 0 ? "clockwise" : "counterclockwise"}
    //             velocity={50}
    //             radius={150}
    //         >
    //             <div className="w-[150px] h-[150px] rounded-full rounded-[50%] bg-slate-200 flex items-center justify-center overflow-hidden">
    //                 <img 
    //                     src={partner.acf.partner_logo} 
    //                     alt={`${partner.title.rendered} logo`}
    //                     className="w-full p-4 h-full object-contain"
    //                 />
    //             </div>
    //         </Motion>
    //     ));
    // }, [partners]);

    if (loading) {
        return (
            <div className="h-[500px] w-full relative bg-white">
                <h6 className="z-30 text-Dark-Navy text-3xl text-center font-bold absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Our Partners
                </h6>
            </div>
        );
    }

    if (!partners || partners.length === 0) {
        return (
            <div className="h-[500px] w-full relative bg-white">
                <h6 className="z-30 text-Dark-Navy text-3xl text-center font-bold absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Our Partners
                </h6>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full relative bg-white">
            <h6 className="z-30 text-Dark-Navy text-3xl text-center font-bold ">
                Our Partners
            </h6>
            <Marquee autoFill='true'>
                {partners.map(partner => (
                    <div key={partner.id} className="w-[150px] h-[150px] mx-16 flex items-center justify-center overflow-hidden">
                    <img 
                        src={partner.acf.partner_logo} 
                        alt={`${partner.title.rendered} logo`}
                        className="w-full p-4 h-full object-contain"
                    />
                </div>
                ))}
            </Marquee>
        </div>
    );
}

export default React.memo(Partners);
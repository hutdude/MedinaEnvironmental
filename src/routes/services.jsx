import { PageContext } from "../main";
import { useContext, useEffect } from "react";


export default function Services() {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("services");
  }, []); 
return (
  <div id="services" className="overflow-hidden" >
    <div>
      Services Page
    </div>
  </div>
);
}
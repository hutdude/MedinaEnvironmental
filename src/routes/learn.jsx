import { PageContext } from "../main";
import { useContext, useEffect } from "react";
import IdukkiEmbed from "../components/learn/LinkedIn";


  export default function Learn() {
    const { currentPage, setCurrentPage } = useContext(PageContext);
    useEffect(() => {
      setCurrentPage("learn");
    }, []); 
    
  return (
    <div id="learn" className="overflow-hidden" >
      <div>
        Learn Page
      </div>
      
      {/* <IdukkiEmbed /> */}
    </div>
  );
}
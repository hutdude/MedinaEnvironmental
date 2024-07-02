import { PageContext } from "../main";
import { useContext, useEffect } from "react";


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
    </div>
  );
}
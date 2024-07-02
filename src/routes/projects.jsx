import { PageContext } from "../main";
import { useContext, useEffect } from "react";


export default function Projects() {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("projects");
  }, []); 

  return (
    <div id="projects">
      <div>
        
      </div>
    </div>
  );
}
import Project from "./Project"
import './projects.css'

function Projects() {

    const projects = [
        {
            name: "Car Rental", 
            imgUrl: "../public/sample.jpg", 
            details: `A Full Stack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was 
            rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images.`, 
            codeUrl: "#",
            previewUrl: "#"
        },
        {
            name: "Car Rental", 
            imgUrl: "../public/sample.jpg", 
            details: `A Full Stack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was 
            rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images.`, 
            codeUrl: "#",
            previewUrl: "#"
        },
        {
            name: "Car Rental", 
            imgUrl: "../public/sample.jpg", 
            details: `A Full Stack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was 
            rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images.`, 
            codeUrl: "#",
            previewUrl: "#"
        }
    ]

    const projectComponents = projects.map((element, index) => (
        <Project
          name={element.name}
          imgUrl={element.imgUrl}
          key={index}
          details={element.details}
          codeUrl={element.codeUrl}
          previewUrl={element.previewUrl}
        />
      ));

    return (
        <div className="projects" id="projectsComponent">{projectComponents}</div>
        
    )
}

export default Projects;
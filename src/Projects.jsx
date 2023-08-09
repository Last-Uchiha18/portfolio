import Project from "./Project"
import './projects.css'

function Projects() {

    const projects = [
        {
            name: "Bike Rental", 
            imgUrl: "./src/assets/bikeRental.png", 
            details: `This application was created to provide users with a convenient and user-friendly platform for renting bikes online. 
            By seamlessly integrating React, JavaScript, HTML, and Tailwind CSS, I designed and developed an intuitive interface 
            that simplifies the bike rental process.`, 
            codeUrl: "https://github.com/Last-Uchiha18/flights",
            previewUrl: "https://last-uchiha18.github.io/flights/"
        },
        // {
        //     name: "Car Rental", 
        //     imgUrl: "/portfolio/sample.jpg", 
        //     details: `A Full Stack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was 
        //     rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images.`, 
        //     codeUrl: "#",
        //     previewUrl: "#"
        // },
        // {
        //     name: "Car Rental", 
        //     imgUrl: "/portfolio/sample.jpg", 
        //     details: `A Full Stack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was 
        //     rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images.`, 
        //     codeUrl: "#",
        //     previewUrl: "#"
        // }
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
import './project.css'
// eslint-disable-next-line react/prop-types
function Project({name, imgUrl, details, codeUrl, previewUrl}) {

    return (
        <>
            <h1 className='projectName'>{name}</h1>
            <div className="projectDetails">
                <div className="left"><a href="https://last-uchiha18.github.io/flights/"><img src={imgUrl} alt="" className='projectImage' /></a></div>
                <div className="right">
                    <h1>Summary</h1>
                    <h2 className='details'>{details}</h2>
                    <div className="btns">
                        <button className='btn1'><a href={previewUrl}>Live Preview  ↗</a></button>
                        <button className='btn2'><a href={codeUrl}>View Code  ↗</a></button>
                     </div>
                    </div>
            </div>
            <div className="separator"></div>
        </>
    )
}
export default Project;
import "../styles/Projects.css"

export default function Project(props){
    return(
        <> 
            <div className="project-card">
                <div className="project-image">
                    <img src={props.image} alt="image"/>
                </div>
                
                <div className="project-text">
                    <h4>{props.heading}</h4>
                    <p>{props.description}</p>
                    <p>{props.date}</p>
                </div>
                

            </div>

        </>
    );
}


import Projects from "../components/Projects";
import ImageHeading from "../components/ImageHeading";

export default function ProjectsPage(){
    return(
        <>
            <ImageHeading
            img = {require("../assets/images/CodeBG.jpg")}
            title = "Los proyectos son la llave que desbloquea el potencial de la programación."
            />

            <Projects/>
            
        </>
        
    );
}
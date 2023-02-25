import Project from "./Project";
import "../styles/Projects.css"


export default function Projects(){
    return(
        <>
            <div className="projects">
                <h1>Conoce a los proyectos en los que estamos trabajando:</h1>

                <div className="projects-cards">
                    
                    <Project
                    image = {require("../assets/images/Projects/1.jpg")}
                    heading = "Seminarios de programación"
                    description = "Ayudar a gestionar o conseguir gente que pueda dar como conferencias o seminarios acerca de programación, ciencia de datos, etc"
                    date = "2022-03-25"
                    />

                    <Project
                    image = {require("../assets/images/Projects/2.jpg")}
                    heading = "Datatec "
                    description = "Concurso de programación, se hizo el semestre pasado, pediremos ayuda a los organizadores del concurso pasado"
                    date = "2022-03-25"
                    />

                    <Project
                    image = {require("../assets/images/Projects/3.jpg")}
                    heading = "Codeparty"
                    description = "Aprender algo de programación y echar la plática"
                    date = "2022-03-25"
                    />

                    <Project
                    image = {require("../assets/images/Projects/4.jpg")}
                    heading = "Canal de YouTube"
                    description = "Hacer un canal de Youtube para hacer videos de programacion"
                    date = "2022-03-25"
                    />
                    
                </div>



            </div>
        </>
        
    );
}
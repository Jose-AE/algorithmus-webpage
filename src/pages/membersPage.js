import Members from "../components/Members";
import ImageHeading from "../components/ImageHeading";


export default function MembersPage(){
    return(
        <>
            <ImageHeading
            img = {require("../assets/images/CodeBG.jpg")}
            title = "La programación es una carrera de relevos, el equipo que mejor se coordina gana."
            />
            <Members/>
        </>
        
    );
}
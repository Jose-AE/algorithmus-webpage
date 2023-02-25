import ImageHeading from "../components/ImageHeading";
import Info from "../components/Info";

export default function HomePage(){
    return(
        <>
            <ImageHeading
            img = {require("../assets/images/CodeBG.jpg")}
            title = "¡La programación es nuestra pasión y nuestro futuro!"
            />

            <Info/>
            
        </>
        
    );
}
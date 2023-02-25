import Contact from "../components/Contact";
import ImageHeading from "../components/ImageHeading";
import Info from "../components/Info";



export default function ContactPage(){
    return(
        <>
            <ImageHeading
            img = {require("../assets/images/CodeBG.jpg")}
            title = "print(email)"
            />

            <Contact/>

        </>
        
    );
}
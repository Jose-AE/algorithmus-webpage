
import "../styles/Members.css"
import Member from "./Member";

export default function Members(){
    return(
        <>
            <div className="members">
                <h1>Conoce a los integrantes del grupo:</h1>

                <div className="member-cards">
                    <Member
                    image = {require("../assets/images/Members/Carlos.jpg")}
                    heading = "Carlos "
                    roll = "Admin Supremo"
                    mayor = "IDM"
                    />

                    <Member
                    image = {require("../assets/images/Members/Jero.jpg")}
                    heading = "Jero"
                    roll = "Admin"
                    mayor = "IDM"
                    />

                    <Member
                    image = {require("../assets/images/Members/Edson.png")}
                    heading = "Edson"
                    roll = "Miembro"
                    mayor = "IDM"
                    />

                    <Member
                    image = {require("../assets/images/Members/Osmar.jpg")}
                    heading = "Osmar"
                    roll = "Admin"
                    mayor = "IDM"
                    />
                    
                    <Member
                    image = {require("../assets/images/Members/Pedro.png")}
                    heading = "Pedro"
                    roll = "Admin"
                    mayor = "IDM"
                    />

                    <Member
                    image = {require("../assets/images/Members/Pokefan.png")}
                    heading = "Pokefan"
                    roll = "Miembro"
                    mayor = "ITC"
                    />

                    <Member
                    image = {require("../assets/images/Members/JoseLuis.png")}
                    heading = "Jose Luis"
                    roll = "Miembro"
                    mayor = "ITC"
                    />
                    
                    



                </div>



            </div>
        </>
        
    );
}
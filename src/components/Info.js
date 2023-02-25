import React from "react";
import { useState } from "react";
import "../styles/Info.css"


export default function(){
    return(
        <>
            <div className="info">


                <div className="info1">
                    <div className="info-text">
                        <h2>Que somos?</h2> 
                        <p>Somos un grupo estudiantil dedicado a compartir conocimientos y habilidades en el área de programación y ciencia de datos. Estamos interesados en aprender más sobre cómo aplicar técnicas de análisis de datos para resolver problemas y obtener información valiosa a partir de datos. En este grupo, podrás encontrar a estudiantes de carreras relacionadas con la programación y la ciencia de datos. Lo importante es que todos compartan el interés y la pasión por aprender y compartir conocimientos sobre programación y análisis de datos.</p>
                    </div>

                    <div className="image"> 
                        <img alt="image" src={require("../assets/images/ScreenCode.jpg")}/>
                    </div>

                </div>


                <div className="info2">
                    <div className="info-text">
                        <h2>Quienes somos?</h2> 
                        <p>Somos un grupo estudiantil dedicado a compartir conocimientos y habilidades en el área de programación y ciencia de datos. Estamos interesados en aprender más sobre cómo aplicar técnicas de análisis de datos para resolver problemas y obtener información valiosa a partir de datos. En este grupo, podrás encontrar a estudiantes de carreras relacionadas con la programación y la ciencia de datos. Lo importante es que todos compartan el interés y la pasión por aprender y compartir conocimientos sobre programación y análisis de datos.</p>
                    </div>

                    <div className="image"> 
                        <img alt="image" src={require("../assets/images/ScreenCode.jpg")}/>
                    </div>

                </div>

            </div>


            
        </>
    );
}
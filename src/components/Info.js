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
                        <h2>Es para ti este grupo?</h2> 
                        <p>Si estás interesado en la programación y quieres aprender más sobre ella, unirte a este grupo es una excelente idea. Al formar parte del grupo, tendrás la oportunidad de interactuar con otras personas que comparten tus intereses y pasión por la programación. Podrás compartir tus ideas y conocimientos, así como aprender de los demás. También podrás trabajar en proyectos conjuntos, recibir retroalimentación y consejos útiles, y estar al tanto de las últimas tendencias y herramientas en el mundo de la programación.</p>
                    </div>

                    <div className="image"> 
                        <img alt="image" src={require("../assets/images/PCcode.jpeg")}/>
                    </div>

                </div>

            </div>


            
        </>
    );
}
import "../styles/Members.css"

export default function Member(props){
    return(
        <> 
            <div className="member-card">
                <div className="member-image">
                    <img src={props.image} alt="image"/>
                </div>
                <h4>{props.heading}</h4>
                <p>{props.roll}</p>
                <p>{props.mayor}</p>

            </div>

        </>
    );
}


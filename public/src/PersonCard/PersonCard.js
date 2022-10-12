import React, {useState} from 'react';
const PersonCard = ({firstName, lastName, age, color}) => {
    
    //useState
    //const [state, setState] = useState({edoCivil: "Casado"})
    
    const [edad, setEdad] = useState(age);

    
    const cumpleaños = () => {
        setEdad (edad+1)
    }




return(
    <div className="card">
        <h4>{firstName} {lastName}</h4>
        <p>
            <b>Edad:</b>{edad}
        </p>
        <p>
            <b>Hair Color:</b>{color}
        </p>     
        <button className="btn btn-info" onClick={cumpleaños}>Cumpleaños {firstName}</button>
    </div>
)
}
export default PersonCard;
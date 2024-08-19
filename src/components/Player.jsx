import { useState } from "react";

export default function Player({name, symbol}){
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    const changeEditingStatus = ()=>{
        setIsEditing(()=>!isEditing); //sets isEditing opposite of its current value so true becomes false and vice versa
    }
    let spanText = <span className="player-name">{playerName}</span>

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    if (isEditing){
        spanText = <input type="text" required value={playerName} onChange={handleChange}/>
    }
    return (
        <li>
            <span className="player-info">
            {spanText}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={changeEditingStatus}>{isEditing?'Save':'Edit'}</button>
          </li>
    )
}
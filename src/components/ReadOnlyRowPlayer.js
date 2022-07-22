import React, { useState } from 'react'
import Select from 'react-select';
import PlayerService from '../services/PlayerService';
import pic from "./player1.png";
import pic1 from "./match1.JPG";
const ReadOnlyRowPlayer = ({ player,setEditedPlayer}) => {
  const options = [
    { value: 'Available', label: 'Available' },
    { value: 'NoShow', label: 'NoShow' },
  ];
  const [selectedOption,setSelectedOption] = useState({ value: player.status, label: player.status });
  const savePlayer = (e) => {
   console.log('asdfasdf',e);
   setSelectedOption(e);
    const players = {playerID:player.playerID,
      name:player.name,
      school:player.school,
      status:e.value,
      gender:player.gender};
    console.log(player);
    PlayerService.createPlayer(players).then((response) => {
        console.log("submit",response.data);
//setShowEdit(false);
      //  setShowAdd(false);
        //console.log('showedit',showEdit);
       // navigate ('/players');

    }).catch(error => {
        console.log(error);
    })
    window.location.reload(false);
}

 
  const editPlayers=(event)=>{


    //console.log('ricky',typeof player);
    console.log('array',player);
    setEditedPlayer(player);
    
    
    };

  return (
    <tr key = {player.playerID} class = {player.status}>
        <td>
          <input type = "radio" value={player.playerID} name="radioButton" onClick={editPlayers}></input>
        </td>
        <td> <img src = {pic} className = 'player1' />{player.playerID} </td>
        <td> {player.name} </td>
        <td> {player.school} </td>
        <td> {player.ranking} </td>
        <td> 
        <Select
        defaultValue={selectedOption}
        onChange={(e)=>{savePlayer(e);}}
        options={options}
      />     </td>          
         <td><img src = {pic1} className = 'player1' />{player.currentMatch}</td>     
        <td> {player.gender }</td>                       
    </tr>
  );
};

export default ReadOnlyRowPlayer;

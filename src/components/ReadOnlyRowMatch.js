import React, { useState } from 'react';
import NumericInput from 'react-numeric-input';
import Select from 'react-select';
import MatchService from '../services/MatchService';
import pic1 from "./player1.png";
import pic2 from "./player1.png";
import pic3 from "./court1.JPG";
import pic from "./match1.JPG";
const ReadOnlyRowMatch = ({ match,setEditedMatch}) => {
  const options = [
    { value: 'Completed', label: 'Completed' },
    { value: 'Canceled', label: 'Canceled' },
  ];
  const scoreoptions = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },

    
  ];
  const [selectedOptionStatus,setSelectedOptionStatus] = useState({ value: match.status, label: match.status });
  const saveMatchStatus = (e) => {
    console.log('asdfasdf',e);
    setSelectedOptionStatus(e);
    const matches = {
      matchID: match.matchID, 
      gameSet: match.gameSet,
      player1Name: match.player1Name,
      player2Name: match.player2Name,
      status: e.value,
      court: match.court,
      player1Score: match.player1Score,
      player2Score: match.player2Score,  
    };
     console.log(match);
     MatchService.createMatch(matches).then((response) => {
         console.log("submit",response.data);
 
    
     }).catch(error => {
         console.log(error);
     })
     window.location.reload(false);
 }
 const [selectedPlayer1Score, setSelectedPlayer1Score] = useState({value: match.player1Score , label: match.player1Score} );
 const saveMatchPlayer1Score = (event) => {
    setSelectedPlayer1Score(event);
    console.log('score1', event);
   
    const matches = {
      matchID: match.matchID, 
      gameSet: match.gameSet,
      player1Name: match.player1Name,
      player2Name: match.player2Name,
      status: match.status,
      court: match.court,
      player1Score: event.value,
      player2Score: match.player2Score,  
    };
    console.log(match);
    MatchService.createMatch(matches).then((response) => {
        console.log("submit",response.data);


    }).catch(error => {
        console.log(error);
    })
    window.location.reload(false);
  }

const [selectedPlayer2Score, setSelectedPlayer2Score] = useState({value: match.player2Score , label: match.player2Score} );
 const saveMatchPlayer2Score = (event2) => {
   setSelectedPlayer2Score(event2);
    console.log('score2', event2);
   
    const matches = {
      matchID: match.matchID, 
      gameSet: match.gameSet,
      player1Name: match.player1Name,
      player2Name: match.player2Name,
      status: match.status,
      court: match.court,
      player1Score: match.player1Score,
      player2Score: event2.value,  
    };
    console.log(match);
    MatchService.createMatch(matches).then((response) => {
        console.log("submit",response.data);


    }).catch(error => {
        console.log(error);
    })
    window.location.reload(false);
  }
  
  
  const editMatches=(event)=>{
    //console.log('ricky',typeof player);
    console.log('array',match);
    setEditedMatch(match);
    };

  return (
    <tr key = {match.matchID} className = {match.status}>
    <td>
      <input type = "radio" value={match.matchID} name="radioButton" onClick={editMatches}></input>
    </td>
    <td> <img src = {pic} className = 'player1' /> {match.matchID} </td>
    <td> {match.gameSet} </td>
    <td> <img src = {pic1} className = 'player1' />{match.player1Name}({match.player1Status})</td>
    <td> <img src = {pic2} className = 'player1' />{match.player2Name}({match.player2Status}) </td>
    <td> 
        <Select
        defaultValue={selectedOptionStatus}
        onChange={(e)=>{saveMatchStatus(e);}}
        options={options}
      />     </td>        
    <td> <img src = {pic3} className = 'player1' />{match.court} </td>
      <td>  
          <Select
            defaultValue={selectedPlayer1Score}
            onChange = {(event)=>{saveMatchPlayer1Score(event);}}
            options={scoreoptions}
          />
      </td>
          <Select
            defaultValue={selectedPlayer2Score}
            onChange = {(event2)=>{saveMatchPlayer2Score(event2);}}
            options={scoreoptions}
          />
      <td> 
       
      </td>              
     </tr>
  );
};

export default ReadOnlyRowMatch;

import React, {useState} from 'react'
import MatchService from '../services/MatchService'
import {useNavigate} from 'react-router-dom'

const EditMatch = ({editedMatch,setShowEdit,setShowAdd,showEdit}) => {

  console.log('testing',editedMatch);
  const [matchID,setMatchID] = useState(editedMatch.matchID);
  const [gameSet,setGameSet] = useState(editedMatch.gameSet);
  const [player1Name,setPlayer1Name] = useState(editedMatch.player1Name);
  const [player2Name,setPlayer2Name] = useState(editedMatch.player2Name);
  const [status,setStatus] = useState(editedMatch.status)
  const [court,setCourt] = useState(editedMatch.court)
  const [player1Score,setPlayer1Score] = useState(editedMatch.player1Score);
  const [player2Score,setPlayer2Score] = useState(editedMatch.player2Score);
  const navigate  = useNavigate();

  const saveMatch = (e) => {
        e.preventDefault();
        const match = {matchID,gameSet,player1Name,player2Name,status,court,player1Score,player2Score}
        console.log(match)
        MatchService.createMatch(match).then((response) => {
            console.log("submit",response.data);
            setShowEdit(false);
            setShowAdd(false);
            console.log('showedit',showEdit);
           // navigate ('/players');
  
        }).catch(error => {
            console.log(error);
        })
    }
  
    return (
        <div> <br/><br/>
        <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <div>
                        <h2 className = "text-center">Edit Match</h2>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Match ID :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter ID"
                                        name = "matchID"
                                        className = "form-control"
                                        value = {matchID}
                                        onChange = {(e) => setMatchID(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Match Type :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Type"
                                        name = "gameSet"
                                        className = "form-control"
                                        value = {gameSet}
                                        onChange = {(e) => setGameSet(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Player 1 Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Name"
                                        name = "name"
                                        className = "form-control"
                                        value = {player1Name}
                                        onChange = {(e) => setPlayer1Name(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Player 2 Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Name"
                                        name = "name"
                                        className = "form-control"
                                        value = {player2Name}
                                        onChange = {(e) => setPlayer2Name(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Status :</label>
                                  { /* <input
                                        type = "text"
                                        placeholder = "Enter Status"
                                        name = "status"
                                        className = "form-control"
                                        value = {status}
                                        onChange = {(e) => setStatus(e.target.value)} 
                                    >
                                    </input> */}
                                        <select value={status}  className = "form-control" onChange={(e) => setStatus(e.target.value)}>
                                            <option value="">Select..</option>
                                            <option value="Completed">Completed</option>
                                          </select>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Court :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Court"
                                        name = "court"
                                        className = "form-control"
                                        value = {court}
                                        onChange = {(e) => setCourt(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Player 1 Score :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Score"
                                        name = "score"
                                        className = "form-control"
                                        value = {player1Score}
                                        onChange = {(e) => setPlayer1Score(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Player 2 Score :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Score"
                                        name = "score"
                                        className = "form-control"
                                        value = {player2Score}
                                        onChange = {(e) => setPlayer2Score(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) =>saveMatch(e)}>
                                    Submit
                                </button>
                            </form>
    
                        </div>
                    </div>
    
                </div>
    
            </div>
            
        </div>
        </div>
      )
}

export default EditMatch;
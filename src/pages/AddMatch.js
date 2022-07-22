import React, {useState} from 'react'
import MatchService from '../services/MatchService'
import {useNavigate} from 'react-router-dom'

const AddMatch = ({setShowEdit,setShowAdd,showAdd}) => {

  
  const [matchID,setMatchID] = useState('')
  const [gameSet,setGameSet] = useState('')
  const [player1Name,setPlayer1Name] = useState('')
  const [player2Name,setPlayer2Name] = useState('')
  const [status,setStatus] = useState('')
  const navigate  = useNavigate();

  const saveMatch = (e) => {
      e.preventDefault();
      const match = {matchID,gameSet,player1Name,player2Name,status}
      console.log(match)
      MatchService.createMatch(match).then((response) => {
          console.log(response.data);
          setShowEdit(false);
          setShowAdd(false);
          console.log(showAdd);
          //navigate ('/players');

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
                    <h2 className = "text-center">Add Match</h2>
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
                                <label className = "form-label"> Game Set :</label>
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
                                {/*<input
                                    type = "text"
                                    placeholder = "Enter Status"
                                    name = "status"
                                    className = "form-control"
                                    value = {status}
                                    onChange = {(e) => setStatus(e.target.value)} 
                                >
                                </input>*/}
                                 <select value={status}    className = "form-control" onChange={(e) => setStatus(e.target.value)}>
                                            <option value="Completed">Completed</option>
                                            <option value="Playing">Playing</option>
                                            <option value="On Deck">On Deck</option>
                                            <option value="Paired">Paired</option>
                                </select>
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

export default AddMatch;
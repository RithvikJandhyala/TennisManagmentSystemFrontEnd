import React, {useState} from 'react'
import PlayerService from '../services/PlayerService'
import {useNavigate} from 'react-router-dom'

const AddPlayer = ({setShowEdit,setShowAdd,showAdd}) => {

  
  const [playerID,setPlayerID] = useState('')
  const [name,setName] = useState('')
  const [school,setSchool] = useState('')
  const [status,setStatus] = useState('')
  const [gender,setGender] = useState('')
  const navigate  = useNavigate();

  const savePlayer = (e) => {
      e.preventDefault();
      const player = {playerID,name,school,status,gender}
      console.log(player)
      PlayerService.createPlayer(player).then((response) => {
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
                    <h2 className = "text-center">Add Player</h2>
                    <div className = "card-body">
                        <form>
                            <div className = "form-group mb-2">
                                <label className = "form-label"> Player ID :</label>
                                <input
                                    type = "text"
                                    placeholder = "Enter ID"
                                    name = "playerID"
                                    className = "form-control"
                                    value = {playerID}
                                    onChange = {(e) => setPlayerID(e.target.value)} 
                                >
                                </input>
                            </div>
                            <div className = "form-group mb-2">
                                <label className = "form-label"> Name :</label>
                                <input
                                    type = "text"
                                    placeholder = "Enter Name"
                                    name = "name"
                                    className = "form-control"
                                    value = {name}
                                    onChange = {(e) => setName(e.target.value)} 
                                >
                                </input>
                            </div>
                            <div className = "form-group mb-2">
                                <label className = "form-label"> School :</label>
                                <input
                                    type = "text"
                                    placeholder = "Enter School"
                                    name = "school"
                                    className = "form-control"
                                    value = {school}
                                    onChange = {(e) => setSchool(e.target.value)} 
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
                                </input> */}
                                <select value={status}  className = "form-control"  onChange={(e) => setStatus(e.target.value)}>
                                            <option value="Available">Available</option>
                                            <option value="Playing">Playing</option>
                                            <option value="On Deck">On Deck</option>
                                            <option value="No Show">No Show</option>
                                </select>
                            </div>
                            <div className = "form-group mb-2">
                                <label className = "form-label"> Gender :</label>
                                <input
                                    type = "text"
                                    placeholder = "Enter Gender"
                                    name = "gender"
                                    className = "form-control"
                                    value = {gender}
                                    onChange = {(e) => setGender(e.target.value)} 
                                >
                                </input>
                            </div>
                            <button className = "btn btn-success" onClick = {(e) =>savePlayer(e)}>
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

export default AddPlayer;
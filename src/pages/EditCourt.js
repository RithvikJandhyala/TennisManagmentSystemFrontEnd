import React, {useState} from 'react'
import CourtService from '../services/CourtService'
import {useNavigate} from 'react-router-dom'

const EditCourt = ({editedCourt,setShowEdit,setShowAdd,showEdit}) => {

  console.log('testing',editedCourt);
  const [courtid,setcourtid] = useState(editedCourt.courtid);
  const [currentMatch,setcurrentMatch] = useState(editedCourt.currentMatch)
  const [location,setlocation] = useState(editedCourt.currentMatch)
  const [status,setStatus] = useState(editedCourt.currentMatch)
  const navigate  = useNavigate();
 

  const saveCourt = (e) => {
    e.preventDefault();
    const court = {courtid,currentMatch,location,status}
    console.log(court)
    CourtService.createCourt(court).then((response) => {
        console.log(response.data);
        setShowEdit(false);
        setShowAdd(false);
        console.log('showedit',showEdit);
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
                        <h2 className = "text-center">Edit Court</h2>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Court ID :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter ID"
                                        name = "courtID"
                                        className = "form-control"
                                        value = {courtid}
                                        onChange = {(e) => setcourtid(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Current Match :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Match"
                                        name = "current Match"
                                        className = "form-control"
                                        value = {currentMatch}
                                        onChange = {(e) => setcurrentMatch(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Location :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Location"
                                        name = "location"
                                        className = "form-control"
                                        value = {location}
                                        onChange = {(e) => setlocation(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Status :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Status"
                                        name = "status"
                                        className = "form-control"
                                        value = {status}
                                        onChange = {(e) => setStatus(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) =>saveCourt(e)}>
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

export default EditCourt;
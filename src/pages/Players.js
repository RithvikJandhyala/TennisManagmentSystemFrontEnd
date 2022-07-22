import React,{useState,useEffect} from 'react'
import PlayerService from '../services/PlayerService';
import { Link } from 'react-router-dom';
import ReadOnlyRowPlayer from '../components/ReadOnlyRowPlayer';
 
import EditPlayer  from '../pages/EditPlayer';
import AddPlayer from '../pages/AddPlayer';
import pic from "../components/player.JPG";

const Players=()=>{ 

    const [players,setPlayers]=useState([]);
    const [editedPlayer, setEditedPlayer] = useState([]);
    const [showEdit,setShowEdit] =useState(false);
    const [showAdd,setShowAdd] =useState(false);
    
    
    
 
const handleEdit=()=>{
 
 
 setShowEdit(true);
 setShowAdd(false);

}

const handleAdd=()=>{
 
 
    setShowAdd(true);
    setShowEdit(false);

   }
    useEffect(()=>{
        PlayerService.getPlayers().then((response) => {
           
            setPlayers(response.data);
        });

    },[showEdit,showAdd]);
    
  
        return(
            <div>
                {!showEdit && !showAdd? <h1 className = "text-center"><img src = {pic}/>Players List</h1>:''}
                {!showAdd && !showEdit?<button type="button" className = "btn btn-primary mb-2 player-right player-left" onClick={handleAdd}> Add Player </button>:''}
                {!showEdit && !showAdd? <button type="button" className = "btn btn-primary mb-2 player-right" onClick={handleEdit}>Edit Player</button> :''}
                {!showEdit && !showAdd?
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th> Select </th>
                            <th> Player ID </th>
                            <th> Name</th>
                            <th> School</th>
                            <th> Ranking</th>
                            <th> Status</th>
                            <th> Current Match</th>
                            <th> Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map(
                                player =>
                               <ReadOnlyRowPlayer player={player} setEditedPlayer={setEditedPlayer}/>
                            )
                        }
                    </tbody>
                </table>:''}

                { showAdd && !showEdit?                
                <AddPlayer  setShowEdit={setShowEdit}  setShowAdd={setShowAdd}    showAdd={showAdd}/>:''}
               {showEdit  && !showAdd?<EditPlayer  editedPlayer={editedPlayer}  setShowEdit={setShowEdit}  setShowAdd={setShowAdd}  showEdit={showEdit}/>:''}
  


            </div>
        )
    


}

export default Players
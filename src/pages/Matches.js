import React,{useState,useEffect} from 'react'
import MatchService from '../services/MatchService';
import ReadOnlyRowMatch from '../components/ReadOnlyRowMatch';

import EditMatch  from '../pages/EditMatch';
import AddMatch from '../pages/AddMatch';
import pic from "../components/match.JPG";

const Matches=()=>{ 

  const [matches,setMatches]=useState([]);
  const [editedMatch, setEditedMatch] = useState([]);
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
      MatchService.getMatches().then((response) => {
         
          setMatches(response.data);
      });

  },[showEdit,showAdd]);
  

      return(
          <div>
              {!showEdit && !showAdd? <div className='stickyheader'><h1 className = "text-center stickyheader" >
              <img src = {pic}/>Matches List</h1> </div>:''}
              {!showAdd && !showEdit?<span className='stickybtn'><button type="button" className = "btn btn-primary mb-2 player-right player-left" onClick={handleAdd}> Add Match </button></span>:''}
              {!showEdit && !showAdd? <span className='stickybtn'><button type="button" className = "btn btn-primary mb-2 player-right" onClick={handleEdit}>Edit Match</button></span> :''}
              <div className='space'/>              {!showEdit && !showAdd?
              
              <table className = "table table-striped">
                  <thead className = 'stickyrow'>
                    <tr>
                        <th> Select </th>
                        <th> Match ID </th>
                        <th> GameSet </th>
                        <th> Player 1</th>
                        <th> Player 2</th>
                        <th> Status</th>
                        <th> Court </th>
                        <th> Player 1 Score</th>
                        <th> Player 2 Score</th>
                    </tr>
                  </thead>
                  <tbody>
                     
                      {
                          matches.map(
                              match =>
                             <ReadOnlyRowMatch match={match} setEditedMatch={setEditedMatch}/>
                          )
                      }
                      
                     
                  </tbody>
              </table>:''}

              { showAdd && !showEdit?                
              <AddMatch  setShowEdit={setShowEdit}  setShowAdd={setShowAdd}    showAdd={showAdd}/>:''}
             {showEdit  && !showAdd?<EditMatch  editedMatch={editedMatch}  setShowEdit={setShowEdit}  setShowAdd={setShowAdd}  showEdit={showEdit}/>:''}
          </div>
      )
  


}

export default Matches;

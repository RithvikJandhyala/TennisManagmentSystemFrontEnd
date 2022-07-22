import React,{useState,useEffect} from 'react'
import CourtService from '../services/CourtService'
import ReadOnlyRowCourt from '../components/ReadOnlyRowCourt';
import EditCourt  from '../pages/EditCourt';
import AddCourt from '../pages/AddCourt';
import pic from "../components/court.JPG";
const Courts = () =>{
    const [courts,setCourts]=useState([]);
    const [editedCourt, setEditedCourt] = useState([]);
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
        CourtService.getCourts().then((response) => {
           
            setCourts(response.data);
        });
  
    },[showEdit,showAdd]);

    return(
        <div>
            {!showEdit && !showAdd? <h1 className = "text-center"><img src = {pic}/>Courts List</h1>:''}
           {/* {!showAdd && !showEdit?<button type="button" className = "btn btn-primary mb-2 player-right player-left" onClick={handleAdd}> Add Court </button>:''}
            {!showEdit && !showAdd? <button type="button" className = "btn btn-primary mb-2 player-right" onClick={handleEdit}>Edit Court</button> :''} */}
            {!showEdit && !showAdd?
            <table className = "table table-striped">
                <thead>
                  <tr>
                  
                      <th> Court ID </th>
                      <th> Status</th>
                      <th> Current Match </th>
                      <th> Location</th>
                     
                  </tr>
                </thead>
                <tbody>
                    {
                        courts.map(
                            court =>
                           <ReadOnlyRowCourt court={court} setEditedCourt={setEditedCourt}/>
                        )
                    }
                </tbody>
            </table>:''}

            { showAdd && !showEdit?                
            <AddCourt  setShowEdit={setShowEdit}  setShowAdd={setShowAdd}    showAdd={showAdd}/>:''}
           {showEdit  && !showAdd?<EditCourt  editedCourt={editedCourt}  setShowEdit={setShowEdit}  setShowAdd={setShowAdd}  showEdit={showEdit}/>:''}
        </div>
    )

}



export default Courts
import React from 'react'
import pic from "./court1.JPG";
const ReadOnlyRowCourt = ({ court,setEditedCourt}) => {

  const editCourts=(event)=>{


    //console.log('ricky',typeof player);
    console.log('array',court);
    setEditedCourt(court);
    
    
    };

  return (
    <tr key = {court.courtID}>
       
        <td><img src = {pic} className = 'player1' /> {court.courtID} </td> 
        <td> {court.status} </td>   
        <td> {court.match} </td>
        <td> {court.location} </td>
                        
    </tr>
  );
};

export default ReadOnlyRowCourt;

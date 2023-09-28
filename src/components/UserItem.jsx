import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';



const UserItem = ({user}) => {
    const navigate = useNavigate();

  return (
    <Paper sx={{
      padding: '10px',
      width: '300px',
      height: '200px',
      margin: '10px'
    }} elevation={3}>
        <p>{user.name}</p>
        <p>{user.position}</p>
        <p>{user.expirience}</p>
        <Button variant="contained" onClick={()=>navigate(`/details/${user.id}`)}>Details</Button>
    </Paper>
  )
}

export default UserItem
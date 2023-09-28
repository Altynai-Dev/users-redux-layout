import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../store/usersSlice'
import { useNavigate } from 'react-router-dom'

const UserCreate = () => {
    const [user, setUser] = useState({
        name: '',
        position: '',
        experience: ''
    })

    const navigate = useNavigate();
    const dispatch = useDispatch()

    function addUser(){
        for(let key in user){
            if(!user[key]) return alert('empty')
        }
        dispatch(createUser(user))
        navigate('/')
    }
  return (
    <div>
        <h3>Register user</h3>
        <input type='text' placeholder='name' onChange={e => setUser({...user, name: e.target.value})} value={user.name} />
        <input type='text' placeholder='position' onChange={e => setUser({...user, position: e.target.value})} value={user.position} />
        <input type='text' placeholder='experience' onChange={e => setUser({...user, experience: e.target.value})} value={user.experience} />
        <button onClick={addUser}>Create</button>
    </div>
  )
}

export default UserCreate
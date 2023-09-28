import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:8000/users';
//createAsyncThunk - инструмент для асинхронной задачи, принимает название action 

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async ()=>{
        const res = await axios.get(API)
        return res.data
    }
)

export const createUser = createAsyncThunk(
    'users/createUser',
    async(newUserObj, {dispatch}) =>{
        await axios.post(API, newUserObj);
        dispatch(getUsers())
    }
)

export const getOneUser = createAsyncThunk(
    'users/getOneUser',
    async(userId)=>{
        const {data} = await axios.get(`${API}/${userId}`)
        return data;
    }
)
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
        oneUser: null
    },
    reducers: {
        clearOneUserState: (state)=>{
            state.oneUser = null;
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getUsers.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(getUsers.fulfilled, (state, action)=>{
            state.loading = false;
            state.users = action.payload
        })
        .addCase(getUsers.rejected, (state, action)=>{
            state.loading = false;
        })
        .addCase(getOneUser.pending, (state, action)=>{
            state.loading = true
        })
        .addCase(getOneUser.fulfilled, (state, action)=>{
            state.oneUser = action.payload;
            state.loading = false;
        })
    }
})
export const {clearOneUserState} = usersSlice.actions;
export default usersSlice.reducer

//builder - запускает запрос по цепочке кейсов
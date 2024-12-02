import { createSlice  , createAsyncThunk} from "@reduxjs/toolkit";
import { authservice } from "./userService";
export const registerUser = createAsyncThunk('auth/register',async (userData , thunkAPI)=>{
    try{
        return await authservice.register(userData)
    }
    catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    user:"",
    isError:false,
    isSuccess:false ,
    isLoading:false,
    message:""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading = true;
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isError = false;
            state.isSuccess = true;
            state.isLoading = false;
        }).addCase(registerUser.rejected,(state,action)=>{
            state.isError = true;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = action.error
        }) ;
    }
});

export default authSlice.reducer;

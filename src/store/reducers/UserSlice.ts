import {IUser} from "../../models/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface  UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: "",
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
        usersFetching(state){
            state.isLoading = true;
        },
        userFetchingSuccess(state, action: PayloadAction<Array<IUser>>){
            state.isLoading = false;
            state.error = "";
            state.users = action.payload;
        },
        userFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        }
   }
})

export default userSlice.reducer;








import {AppDispatch, } from "../store.ts";
import axios from "axios";
import {IUser} from "../../models/IUser.ts";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        const response =
            await axios.get<Array<IUser>>('https://jsonplaceholder.typicode.com/users');

    } catch (e) {

    }
}
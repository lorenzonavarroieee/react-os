import { instance } from "../config/axios-config";
import { User } from "../types/user";

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await instance.get(`/usuarios`);
        const data = response.data;
        return data;
    }catch(error){
        console.log(error);
        throw new Error();
    }
}

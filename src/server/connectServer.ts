import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333",
});



export const ConnectServer = () => ({
    sing : async (email: string, password : string)=> {
        const response = await api.post("auth/sing", {
            email,
            password,
        });
        return response.data;
    },

    create : async (user: object)=> { 
        const response = await api.post("auth/create", {
            ...user,
        });
        return response.data;
    }
})
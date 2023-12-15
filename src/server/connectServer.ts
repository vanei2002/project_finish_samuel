import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

interface User {
    email: string;
    password: string;
}

export const ConnectServer = () => ({
    sing : async ({ email, password }: User)=> {
        const response = await api.post("/sing", {
            email,
            password,
        });
        return response.data;
    }
})
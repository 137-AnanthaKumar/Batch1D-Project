import axios from "axios";
const adduser_url ="http://localhost:8080/newaccout/create";
 

export class RegisterService {
    
    createNewUser(newuser){
        return axios.post(adduser_url, newuser);
    }
};


import {isValidUsername} from "6pp"
export const usernamevalidator=(username)=>{
    if(!isValidUsername(username))
        return {invalid:false, errorMessage:"username is invalid"}
}
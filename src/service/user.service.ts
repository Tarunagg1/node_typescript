import { DocumentDefinition } from "mongoose";
import user,{userDocument} from "../models/user.model";

export async function createuser(input:DocumentDefinition<userDocument>){
    try {
        return await user.create(input);
    } catch (error:any) {
        throw new Error(error);
    }
}

export async function findUser(input:DocumentDefinition<userDocument>){
    try {
        return await user.create(input);
    } catch (error:any) {
        throw new Error(error);
    }
}












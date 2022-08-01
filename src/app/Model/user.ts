import { community } from "./community"
import { type } from "./type"

export class user{
    Iduser:Number=0
    firstName:string=''
    lastName:string=''
    dateOfBirth:Date=new Date()
    gender:string=''
    address:string=''
    phon:string=''
    userType:type=new type()
    idGroup:community=new community()
    password:string=''
}
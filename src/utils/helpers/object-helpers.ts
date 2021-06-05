import {userType} from "../../dal/api";

export const updateobjectInArray = (items:userType[],itemId:number,objPropName:string,newObjProps:any) => {
    return items.map((user:any) => {
        if (user[objPropName] === itemId) {
            return {...user, ...newObjProps}
        }
        return user
    })
}
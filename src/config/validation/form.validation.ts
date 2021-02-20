
export const emailValidation = (string:String) =>{
    const expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regex = new RegExp(expression);
    if (!string.match(regex))
      return {successful:false, message:"Insert email correctly"}
    else {
        return {successful:true, message:""}

    }
}

export const phoneValidation = (string:String)=>{
    const expression = /\d{3}-\d{3}-\d{4}/;
                const regex = new RegExp(expression);
                if(!string.match(regex)) 
                return {successful:false, message:"Insert phone correctly"}
                else {
                    return {successful:true, message:""}
                }
}

export const passwordValidation= (string:String)=>{
    const valueLen = string.length;
    if(valueLen > 20 || valueLen < 4) 
    return {successful:false, message:"Password must be more than 4 digits"}
    else {
        return {successful:true, message:""}
    }
}

export const nameValidation= (string:String)=>{
    const valueLen = string.length;
    if(valueLen > 20 || valueLen <= 1) 
    return {successful:false, message:"name must be more than 1 digit"}
    else {
        return {successful:true, message:""}
    }
}
export const cityValidation= (string:String)=>{
    const valueLen = string.length;
    if(valueLen > 20 || valueLen <= 1) 
    return {successful:false, message:"city must be more than 1 digit"}
    else {
        return {successful:true, message:""}
    }
}
export const streetValidation= (string:String)=>{
    const valueLen = string.length;
    if(valueLen > 20 || valueLen <= 1) 
    return {successful:false, message:"street must be more than 1 digit"}
    else {
        return {successful:true, message:""}
    }
}
export const houseValidation= (string:String)=>{
    const valueLen = string.length;
    if(valueLen > 20 || valueLen <= 1) 
    return {successful:false, message:"house number must be more than 1 digit"}
    else {
        return {successful:true, message:""}
    }
}
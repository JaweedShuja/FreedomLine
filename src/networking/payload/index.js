export function AuthenticatePayloads(
    username,
    password,
    deviceId,
    deviceType,
    deviceToken,
){
    return JSON.stringify({
        username:username,
        password:password,
        deviceId:deviceId,
        deviceType:deviceType,
        deviceToken:deviceToken
    });
}

export function ChangeAddressRequestPayloads(
    client_id,
    address,
    state,  
    zip,    
    city    
){  
    return JSON.stringify({
        client_id:client_id,
        address:address,
        state:state,
        zip:zip,
        city:city
    })
}
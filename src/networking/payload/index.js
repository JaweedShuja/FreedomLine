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
    city,
    zip,
    state
){  
    return JSON.stringify({
        client_id:client_id,
        address:address,
        city:city,
        zip:zip,
        state:state
    })
}

export function GetUserProfilePayloads(
    userId, 
    accessToken
){
    return JSON.stringify({
        userId:userId,
        accessToken:accessToken
    })
}

export function GetDashboardByClientIdPayloads(
    clientId
){
    return JSON.stringify({
        clientId:clientId       
    })
}

export function GetPolicyByClientIdPayloads(
    clientId
){
    return JSON.stringify({
        clientId:clientId       
    })
}

export function GetAllInvoicesPayloads(
    clientId
){
    return JSON.stringify({
        clientId:clientId       
    })
}

export function GetClientDeviceNotificationsPayloads(
    clientId
){
    return JSON.stringify({
        clientId:clientId       
    })
}
export function GetVehicleByPolicyAndClientIdPayloads(
    clientId,
    policyId
){
    return JSON.stringify({
        clientId:clientId,
        policyId:policyId,       
    })
}
export function GetRecentPaymentPayloads(
    clientId
){
    return JSON.stringify({
        clientId:clientId     
    })
}

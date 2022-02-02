//Host Name
const hostName = "http://47.21.85.156:7777/api/"

//subdomain
const User = 'User/'
const Client = 'Client/'
const Invoice = 'Invoice/'
const Endorsement = 'Endorsement/'

//End Points
const Authenticate = 'Authenticate'
const RegisterNewUser = 'RegisterNewUser'
const ChangeAddressRequest = 'ChangeAddressRequest'
const GetUserProfile = 'getUserProfile'
const GetDocumentType = 'GetDocumentType'
const GetDashboardByClientId = 'getDashboardByClientId'
const GetPolicyByClientId = 'getPolicyByClientId'
const GetAllInvoices = 'getAllInvoices'
const GetClientDeviceNotifications = 'GetClientDeviceNotifications'
const GetVehicleByPolicyAndClientId = 'getVehicleByPolicyAndClientId'
const GetDriverByPolicyAndVehicleId = 'getDriverByPolicyAndVehicleId'

const GetRecentPayment = 'getRecentPayment'

function getFullApi(subDomain, endPoint) {
    return hostName + subDomain + endPoint
}

//USER
export function AuthenticateAPI(){
    return getFullApi(User, Authenticate)
}
export function RegisterNewUserAPI(){
    return getFullApi(User, RegisterNewUser)
}
export function GetUserProfileAPI(){
    return getFullApi(User, GetUserProfile)
}
export function GetDocumentTypeAPI(){
    return getFullApi(User, GetDocumentType)
}

//CLEINT
export function GetDashboardByClientIdAPI(){
    return getFullApi(Client, GetDashboardByClientId)
}
export function GetPolicyByClientIdAPI(){
    return getFullApi(Client, GetPolicyByClientId)
}
export function GetClientDeviceNotificationsAPI(){
    return getFullApi(Client, GetClientDeviceNotifications)
}
export function GetVehicleByPolicyAndClientIdAPI(){
    return getFullApi(Client, GetVehicleByPolicyAndClientId)
}
export function GetDriverByPolicyAndVehicleIdAPI(){
    return getFullApi(Client, GetDriverByPolicyAndVehicleId)
}

//INVOICE
export function GetRecentPaymentAPI(){
    return getFullApi(Invoice, GetRecentPayment)
}
export function GetAllInvoicesAPI(){
    return getFullApi(Invoice, GetAllInvoices)
}

//Endorsement
export function ChangeAddressRequestAPI(){
    return getFullApi(Endorsement, ChangeAddressRequest)
}
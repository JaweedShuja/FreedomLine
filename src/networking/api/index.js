//Host Name
const hostName = "http://47.21.85.156:7777/api/"

//subdomain
const User = 'User/'
const Endorsement = 'Endorsement/'

//End Points
const Authenticate = 'Authenticate'
const ChangeAddressRequest = 'ChangeAddressRequest'

function getFullApi(subDomain, endPoint) {
    return hostName + subDomain + endPoint
}

//POST
export function AuthenticateAPI(){
    return getFullApi(User, Authenticate)
}
export function ChangeAddressRequestAPI(){
    return getFullApi(Endorsement, ChangeAddressRequest)
}


//GET
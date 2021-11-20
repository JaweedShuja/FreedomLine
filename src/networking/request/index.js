const debug = true

export function PostRequest(payloads, api) {
    try{
        if (debug) {
            console.log('API => ' + api)
            console.log('Payloads => ' + payloads)
        }
        return fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Connection:'keep-alive',
                'Accept-Encoding': 'gzip, deflate',
            },
            body: payloads,
        })
            .then(response => response.json())
            .then(responseJson => {
                if (debug) {
                    console.log('Response => ' + JSON.stringify(responseJson));
                }
                return responseJson
            })
            .catch(error => {
                return error;
            })
    }
    catch(e){
        console.log(e)
    }
    
}
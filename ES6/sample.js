function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making a Request to ${location}`)
        if(location === 'Google') {
            resolve('Google Says Hi');
        } else {
            reject('We can only talk to Googe')
        }
    })
}

function proccessRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response:')
        resolve(`Extra information + ${response}`)
    })
}function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making a Request to ${location}`)
        if(location === 'Google') {
            resolve('Google Says Hi');
        } else {
            reject('We can only talk to Googe')
        }
    })
}

function proccessRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response:')
        resolve(`Extra information + ${response}`)
    })
}